// Batch HTML → JSX converter for the whole Virion template.
// For every source .html it extracts the content between the <div class="header">
// and <section class="footer"> (both provided by the React layout), rewrites the
// markup to JSX, and writes it to the matching App Router route. Styling is the
// original /assets/css/styles.css; interactivity is VirionScripts.
import fs from "node:fs";
import path from "node:path";

const SRC_DIR = path.resolve("../virion-html-src/virion-html");
const APP_DIR = path.resolve("src/app");

/* ---- filename → { route folder, component name } ---- */
function routeFor(file) {
  const base = file.replace(/\.html$/, "");
  if (base === "index") return { dir: "", name: "HomePage" };
  if (base === "contact-us") return { dir: "contact", name: "ContactPage" };
  if (base === "sign-up") return { dir: "signup", name: "SignupPage" };
  if (base === "integration") return { dir: "integration", name: "IntegrationListPage" };
  if (base.startsWith("blog-")) return { dir: "blog/" + base.slice(5), name: "BlogPostPage" };
  if (base.startsWith("integration-"))
    return { dir: "integration/" + base.slice(12), name: "IntegrationPage" };
  if (base.startsWith("product-")) return { dir: "product/" + base.slice(8), name: "ProductPage" };
  return { dir: base, name: pascal(base) + "Page" };
}
function pascal(s) {
  const p = s.replace(/(^|[-_])([a-z0-9])/g, (_, __, c) => c.toUpperCase()).replace(/[^A-Za-z0-9]/g, "");
  return /^[0-9]/.test(p) ? "Page" + p : p;
}

/* ---- find the end (index just past </div>) of the div opened at idx ---- */
function endOfDiv(html, idx) {
  const re = /<div\b|<\/div>/gi;
  re.lastIndex = idx;
  let depth = 0;
  let m;
  while ((m = re.exec(html))) {
    if (m[0][1] === "/") depth--;
    else depth++;
    if (depth === 0) return m.index + m[0].length;
  }
  return idx;
}

function mapHref(href) {
  if (/^(https?:|mailto:|tel:|#)/.test(href)) return href;
  let h = href.replace(/^\.\//, "");
  if (h === "index.html" || h === "/" || h === "") return "/";
  const m = h.match(/^([a-z0-9-]+)\.html$/i);
  if (!m) return href.startsWith("/") ? href : "/" + h;
  const f = m[1];
  if (f === "contact-us") return "/contact";
  if (f === "sign-up") return "/signup";
  if (f.startsWith("blog-")) return "/blog/" + f.slice(5);
  if (f.startsWith("integration-")) return "/integration/" + f.slice(12);
  if (f.startsWith("product-")) return "/product/" + f.slice(8);
  return "/" + f;
}

const attrMap = {
  class: "className", for: "htmlFor", viewbox: "viewBox", tabindex: "tabIndex",
  maxlength: "maxLength", minlength: "minLength", autocomplete: "autoComplete",
  readonly: "readOnly", autofocus: "autoFocus", crossorigin: "crossOrigin",
  novalidate: "noValidate", enctype: "encType", colspan: "colSpan", rowspan: "rowSpan",
  "stroke-width": "strokeWidth", "stroke-linecap": "strokeLinecap",
  "stroke-linejoin": "strokeLinejoin", "stroke-miterlimit": "strokeMiterlimit",
  "stroke-dasharray": "strokeDasharray", "stroke-opacity": "strokeOpacity",
  "fill-rule": "fillRule", "clip-rule": "clipRule", "clip-path": "clipPath",
  "stop-color": "stopColor", "stop-opacity": "stopOpacity",
  gradientunits: "gradientUnits", gradienttransform: "gradientTransform",
  inputmode: "inputMode", "xmlns:xlink": "xmlnsXlink", "xlink:href": "xlinkHref",
  srcset: "srcSet",
};
const numericAttrs = ["tabIndex", "maxLength", "minLength", "rowSpan", "colSpan"];
const voids = ["img", "input", "br", "hr", "meta", "link", "source", "col", "area", "embed", "track", "wbr"];

function transform(file) {
  const html = fs.readFileSync(path.join(SRC_DIR, file), "utf8");
  const headerStart = html.indexOf('<div class="header"');
  const footerStart = html.indexOf('<section class="footer"');
  const start = headerStart !== -1 ? endOfDiv(html, headerStart) : html.indexOf("<section");
  const end = footerStart !== -1 ? footerStart : html.length;
  let body = html.slice(start, end);

  body = body.replace(/href="([^"]*)"/g, (_, h) => `href="${mapHref(h)}"`);
  // Normalise asset paths: attribute-leading (src=, the first srcset entry) and
  // the space-separated srcset entries that follow. Keep srcset/sizes so the PNG
  // fallbacks render where AVIF isn't supported.
  body = body.replace(/="assets\//g, '="/assets/');
  body = body.replace(/(\s)assets\//g, "$1/assets/");
  // Features "Insight" graphic: the template ships it only as AVIF at the largest
  // srcset width, which high-DPR displays select and some browsers fail to decode
  // (collapsing the section). Replace the whole <img> with a single nicely-named
  // PNG and drop the scroll-reveal gating so the focal graphic always renders.
  body = body.replace(
    /<img alt="Insight Image"[^>]*\/>/,
    '<img alt="Insight Image" class="insight-image" loading="lazy" src="/assets/images/insight-graphic.png"/>',
  );
  for (const [from, to] of Object.entries(attrMap)) {
    body = body.replace(new RegExp(`(\\s)${from}=`, "g"), `$1${to}=`);
  }
  body = body
    .replace(/\s(hidden|required|disabled|checked|selected|autoPlay|loop|muted|playsInline)=""/g, " $1")
    .replace(/\sautoFocus="true"/g, " autoFocus");
  // numeric-typed attrs must be JSX expressions, and href="#" is a no-op that
  // also appears on non-anchor Webflow elements (invalid in JSX) — drop it.
  for (const a of numericAttrs) {
    body = body.replace(new RegExp(`\\s${a}="(\\d+)"`, "g"), ` ${a}={$1}`);
  }
  body = body.replace(/\shref="#"/g, "");
  for (const tag of voids) {
    body = body.replace(new RegExp(`<${tag}\\b([^>]*?)\\s*/?>`, "gi"), `<${tag}$1 />`);
  }
  return body.trim();
}

function emit(name, body) {
  return `// AUTO-GENERATED by scripts/convert-all.mjs. Markup mirrors the original template;
// styling comes from /assets/css/styles.css. Re-run the script to regenerate.
export default function ${name}() {
  return (
    <>
${body.split("\n").map((l) => (l.trim() ? "      " + l.trimEnd() : "")).join("\n")}
    </>
  );
}
`;
}

const files = fs.readdirSync(SRC_DIR).filter((f) => f.endsWith(".html"));
let count = 0;
for (const file of files) {
  const { dir, name } = routeFor(file);
  const outDir = path.join(APP_DIR, dir);
  fs.mkdirSync(outDir, { recursive: true });
  const body = transform(file);
  fs.writeFileSync(path.join(outDir, "page.tsx"), emit(name, body), "utf8");
  count++;
  // 404 also backs the App Router not-found boundary
  if (file === "404.html") {
    fs.writeFileSync(
      path.join(APP_DIR, "not-found.tsx"),
      `import NotFoundPage from "./404/page";\nexport default NotFoundPage;\n`,
      "utf8",
    );
  }
}
console.log(`Converted ${count} pages.`);
