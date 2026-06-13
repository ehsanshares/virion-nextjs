import { MDXRemote } from "next-mdx-remote/rsc";

/**
 * Renders an MDX/Markdown body. The caller wraps this in the original rich-text
 * container (`.blog-detail-wrap` / `.integration-details`), so styles.css styles
 * the emitted h3/h4/p/blockquote/img tags exactly as in the static template — no
 * component overrides needed.
 */
export function MdxBody({ source }: { source: string }) {
  return <MDXRemote source={source} />;
}
