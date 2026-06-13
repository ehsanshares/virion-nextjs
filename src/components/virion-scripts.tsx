"use client";

import { useEffect } from "react";

/**
 * Vanilla interaction layer ported verbatim from the template's assets/js/main.js
 * (mobile nav, Pages dropdown, pricing/blog tabs, FAQ accordion, localStorage cart,
 * checkout, included-features popover, marquees, scroll-reveal, demo forms).
 *
 * The original markup + class names are reproduced 1:1 in the React components, so
 * this logic drives them unchanged. It runs after mount (post-hydration) on every
 * route so client navigations re-initialise the freshly rendered DOM.
 */
export function VirionScripts() {
  useEffect(() => {
    /* ---------- Mobile navigation ---------- */
    function initNav() {
      const btn = document.querySelector<HTMLElement>(".menu-button");
      const nav = document.querySelector<HTMLElement>(".navbar");
      if (!btn || !nav) return;
      btn.setAttribute("role", "button");
      btn.setAttribute("tabindex", "0");
      btn.setAttribute("aria-label", "Menu");
      btn.setAttribute("aria-expanded", "false");
      function toggle(open?: boolean) {
        const willOpen = open === undefined ? !nav!.classList.contains("nav-open") : open;
        nav!.classList.toggle("nav-open", willOpen);
        document.body.classList.toggle("nav-locked", willOpen);
        btn!.setAttribute("aria-expanded", String(willOpen));
      }
      btn.addEventListener("click", () => toggle());
      btn.addEventListener("keydown", (e: KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      });
      nav
        .querySelectorAll(".nav-link-block, .nav-page-link, .nav-menu-buttons a")
        .forEach((a) => a.addEventListener("click", () => toggle(false)));
    }

    /* ---------- Pages dropdown ---------- */
    function initDropdown() {
      document.querySelectorAll<HTMLElement>(".nav-dropdown-toggle").forEach((toggle) => {
        const wrap = toggle.parentElement;
        if (!wrap) return;
        toggle.setAttribute("role", "button");
        toggle.setAttribute("tabindex", "0");
        toggle.setAttribute("aria-expanded", "false");
        const list = wrap.querySelector(".nav-dropdown-list");
        function set(open: boolean) {
          wrap!.classList.toggle("dropdown-open", open);
          if (list) list.classList.toggle("is-open", open);
          toggle.setAttribute("aria-expanded", String(open));
        }
        toggle.addEventListener("click", (e) => {
          e.stopPropagation();
          set(!wrap.classList.contains("dropdown-open"));
        });
        toggle.addEventListener("keydown", (e: KeyboardEvent) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            (toggle as HTMLElement).click();
          }
          if (e.key === "Escape") set(false);
        });
        let closeTimer: ReturnType<typeof setTimeout>;
        wrap.addEventListener("mouseenter", () => {
          if (window.matchMedia("(min-width: 992px)").matches) {
            clearTimeout(closeTimer);
            set(true);
          }
        });
        wrap.addEventListener("mouseleave", () => {
          if (window.matchMedia("(min-width: 992px)").matches) {
            clearTimeout(closeTimer);
            closeTimer = setTimeout(() => set(false), 240);
          }
        });
      });
      document.addEventListener("click", () => {
        document.querySelectorAll(".dropdown-open").forEach((w) => {
          w.classList.remove("dropdown-open");
          const t = w.querySelector(".nav-dropdown-toggle");
          if (t) t.setAttribute("aria-expanded", "false");
        });
      });
    }

    /* ---------- Tabs (pricing / blog) ---------- */
    function initTabs() {
      document.querySelectorAll(".membershop-tabs, .blog-tabs").forEach((tabs) => {
        const links = tabs.querySelectorAll<HTMLElement>("a[data-tab]");
        const panes = Array.prototype.slice
          .call(tabs.querySelectorAll<HTMLElement>("[data-tab]"))
          .filter((el: HTMLElement) => el.tagName !== "A");
        function activate(name?: string) {
          links.forEach((l) => l.classList.toggle("is-active", l.dataset.tab === name));
          panes.forEach((p: HTMLElement) =>
            p.classList.toggle("is-active", p.dataset.tab === name),
          );
        }
        links.forEach((l) => {
          l.setAttribute("role", "tab");
          l.setAttribute("tabindex", "0");
          l.addEventListener("click", () => activate(l.dataset.tab));
          l.addEventListener("keydown", (e: KeyboardEvent) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              activate(l.dataset.tab);
            }
          });
        });
        const initial = tabs.querySelector<HTMLElement>("a[data-tab].is-active") || links[0];
        if (initial) activate(initial.dataset.tab);
      });
    }

    /* ---------- FAQ accordion ---------- */
    function initFaq() {
      document.querySelectorAll<HTMLElement>(".faq-list-wrap").forEach((item) => {
        const q = item.querySelector<HTMLElement>(".faq-question");
        const a = item.querySelector<HTMLElement>(".faq-answer");
        if (!q || !a) return;
        q.setAttribute("role", "button");
        q.setAttribute("tabindex", "0");
        q.setAttribute("aria-expanded", "false");
        function toggle() {
          const open = item.classList.toggle("faq-open");
          q!.setAttribute("aria-expanded", String(open));
          a!.style.maxHeight = open ? a!.scrollHeight + "px" : "";
        }
        q.addEventListener("click", toggle);
        q.addEventListener("keydown", (e: KeyboardEvent) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
          }
        });
      });
    }

    /* ---------- Cart (localStorage, no backend) ---------- */
    const CART_KEY = "virion:cart:v1";
    type CartItem = { id: string; name: string; price: number; qty: number };
    const Cart = {
      read(): CartItem[] {
        try {
          return JSON.parse(localStorage.getItem(CART_KEY) || "[]") || [];
        } catch {
          return [];
        }
      },
      write(items: CartItem[]) {
        localStorage.setItem(CART_KEY, JSON.stringify(items));
        this.render();
      },
      add(p: CartItem) {
        const items = this.read();
        const found = items.find((i) => i.id === p.id);
        if (found) found.qty += p.qty || 1;
        else items.push({ id: p.id, name: p.name, price: p.price, qty: p.qty || 1 });
        this.write(items);
      },
      setQty(id: string, qty: number) {
        const items = this.read().map((i) =>
          i.id === id ? Object.assign(i, { qty: Math.max(1, qty) }) : i,
        );
        this.write(items);
      },
      remove(id: string) {
        this.write(this.read().filter((i) => i.id !== id));
      },
      count() {
        return this.read().reduce((n, i) => n + i.qty, 0);
      },
      total() {
        return this.read().reduce((s, i) => s + i.price * i.qty, 0);
      },
      money(n: number) {
        return "$" + n.toFixed(2);
      },
      render() {
        const count = this.count();
        document.querySelectorAll("[data-cart-count]").forEach((el) => {
          el.textContent = String(count);
        });
        document.querySelectorAll("[data-cart-subtotal]").forEach((el) => {
          el.textContent = Cart.money(Cart.total());
        });
        const list = document.querySelector("[data-cart-list]");
        if (list) {
          const items = this.read();
          const empty = document.querySelector<HTMLElement>("[data-cart-empty]");
          const footer = document.querySelector<HTMLElement>("[data-cart-footer]");
          if (empty) empty.hidden = items.length > 0;
          if (footer) footer.hidden = items.length === 0;
          list.innerHTML = items
            .map(
              (i) =>
                '<li class="cart-line" data-id="' +
                i.id +
                '"><div class="cart-line-info"><span class="cart-line-name">' +
                i.name +
                '</span><span class="cart-line-price">' +
                Cart.money(i.price) +
                '</span></div><div class="cart-line-actions"><button type="button" class="cart-qty-btn" data-qty-dec aria-label="Decrease">−</button><span class="cart-qty">' +
                i.qty +
                '</span><button type="button" class="cart-qty-btn" data-qty-inc aria-label="Increase">+</button><button type="button" class="cart-remove" data-remove aria-label="Remove">×</button></div></li>',
            )
            .join("");
        }
      },
    };

    function initCart() {
      Cart.render();
      const wrap = document.querySelector<HTMLElement>(".cart");
      if (wrap) {
        const openBtn = wrap.querySelector("[data-cart-open]");
        const closeBtn = wrap.querySelector("[data-cart-close]");
        const panel = wrap.querySelector<HTMLElement>(".cart-modal");
        function setOpen(o: boolean) {
          wrap!.classList.toggle("cart-open", o);
          document.body.classList.toggle("nav-locked", o);
          if (panel) panel.setAttribute("aria-hidden", String(!o));
        }
        if (openBtn)
          openBtn.addEventListener("click", (e) => {
            e.preventDefault();
            setOpen(true);
          });
        if (closeBtn)
          closeBtn.addEventListener("click", (e) => {
            e.preventDefault();
            setOpen(false);
          });
        if (panel)
          panel.addEventListener("click", (e) => {
            if (e.target === panel) setOpen(false);
          });
        document.addEventListener("keydown", (e: KeyboardEvent) => {
          if (e.key === "Escape") setOpen(false);
        });
      }
      const list = document.querySelector<HTMLElement>("[data-cart-list]");
      if (list)
        list.addEventListener("click", (e) => {
          const target = e.target as HTMLElement;
          const line = target.closest<HTMLElement>(".cart-line");
          if (!line) return;
          const id = line.dataset.id!;
          const item = Cart.read().find((i) => i.id === id);
          if (!item) return;
          if (target.closest("[data-qty-inc]")) Cart.setQty(id, item.qty + 1);
          else if (target.closest("[data-qty-dec]")) Cart.setQty(id, item.qty - 1);
          else if (target.closest("[data-remove]")) Cart.remove(id);
        });
      document.querySelectorAll<HTMLElement>("[data-add-to-cart]").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          Cart.add({
            id: btn.dataset.id!,
            name: btn.dataset.name!,
            price: parseFloat(btn.dataset.price || "0") || 0,
            qty: 1,
          });
          const w = document.querySelector(".cart");
          if (w) w.classList.add("cart-open");
        });
      });
    }
    (window as unknown as { VirionCart: typeof Cart }).VirionCart = Cart;

    /* ---- Scroll-reveal ---- */
    function initReveal() {
      const els = Array.prototype.slice.call(document.querySelectorAll<HTMLElement>(".reveal"));
      if (!els.length) return;
      if (!("IntersectionObserver" in window)) {
        els.forEach((e: HTMLElement) => e.classList.add("is-visible"));
        return;
      }
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              en.target.classList.add("is-visible");
              io.unobserve(en.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
      );
      els.forEach((e: HTMLElement) => {
        const sibs = Array.prototype.slice
          .call(e.parentNode!.children)
          .filter((c: HTMLElement) => c.classList.contains("reveal"));
        const i = sibs.indexOf(e);
        if (i > 0) e.style.transitionDelay = Math.min(i * 80, 320) + "ms";
        io.observe(e);
      });
    }

    /* ---- Demo forms ---- */
    function initForms() {
      document.querySelectorAll<HTMLFormElement>("[data-demo-form]").forEach((form) => {
        form.addEventListener("submit", (e) => {
          e.preventDefault();
          const wrap = form.parentElement;
          const done = wrap?.querySelector<HTMLElement>("[data-form-done]");
          const fail = wrap?.querySelector<HTMLElement>("[data-form-fail]");
          if (fail) fail.hidden = true;
          form.style.display = "none";
          if (done) done.hidden = false;
        });
      });
    }

    /* ---- Checkout + order confirmation ---- */
    const ORDER_KEY = "virion:lastorder";
    function initCheckout() {
      const isConfirm =
        document.body.hasAttribute("data-order-confirmation") ||
        location.pathname.replace(/\/$/, "") === "/order-confirmation";
      const onCheckout = !!document.querySelector("[data-place-order]");
      if (!isConfirm && !onCheckout) return;
      let items: CartItem[], total: number;
      if (isConfirm) {
        let last: { items?: CartItem[]; total?: number } | null = null;
        try {
          last = JSON.parse(localStorage.getItem(ORDER_KEY) || "null");
        } catch {}
        items = (last && last.items) || [];
        total = (last && last.total) || 0;
      } else {
        items = Cart.read();
        total = Cart.total();
      }
      const list = document.querySelector("[data-checkout-items]");
      if (list) {
        list.innerHTML = items.length
          ? items
              .map(
                (i) =>
                  '<div class="checkout-item"><div class="checkout-item-info">' +
                  i.name +
                  ' <span class="checkout-item-qty">x' +
                  i.qty +
                  "</span></div><div>" +
                  Cart.money(i.price * i.qty) +
                  "</div></div>",
              )
              .join("")
          : '<div class="checkout-empty">Your cart is empty.</div>';
      }
      document
        .querySelectorAll("[data-checkout-subtotal], [data-checkout-total]")
        .forEach((el) => {
          el.textContent = Cart.money(total);
        });
      document.querySelectorAll("[data-place-order]").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          localStorage.setItem(
            ORDER_KEY,
            JSON.stringify({ items: Cart.read(), total: Cart.total(), date: Date.now() }),
          );
          Cart.write([]);
          window.location.href = "/order-confirmation";
        });
      });
      document.querySelectorAll(".checkout-form, form.checkout-block").forEach((f) => {
        f.addEventListener("submit", (e) => e.preventDefault());
      });
    }

    /* ---- Pricing "Included" popover ---- */
    function initIncluded() {
      document.querySelectorAll<HTMLElement>(".product-card").forEach((card) => {
        const content = card.querySelector<HTMLElement>(".features-inculded-block");
        if (!content) return;
        const toggle =
          content.closest<HTMLElement>(".included-block") ||
          card.querySelector<HTMLElement>(".included-block");
        if (!toggle) return;
        let timer: ReturnType<typeof setTimeout>;
        function show() {
          clearTimeout(timer);
          content!.style.display = "flex";
          toggle!.classList.add("is-open");
        }
        function hide() {
          timer = setTimeout(() => {
            content!.style.display = "";
            toggle!.classList.remove("is-open");
          }, 120);
        }
        toggle.style.cursor = "pointer";
        toggle.addEventListener("mouseenter", show);
        toggle.addEventListener("mouseleave", hide);
        content.addEventListener("mouseenter", show);
        content.addEventListener("mouseleave", hide);
        toggle.addEventListener("click", (e) => {
          if (content.contains(e.target as Node)) return;
          if (content.style.display === "flex") hide();
          else show();
        });
      });
    }

    /* ---- Marquees / tickers ---- */
    function initMarquee() {
      const cfgs = [
        { sel: ".testimonial-items-top", dur: "55s", dir: "fwd" },
        { sel: ".testimonial-items-bottom", dur: "55s", dir: "rev" },
        { sel: ".integration-marquee.top", dur: "40s", dir: "fwd" },
        { sel: ".integration-marquee.middle", dur: "46s", dir: "rev" },
        { sel: ".integration-marquee.bottom", dur: "40s", dir: "fwd" },
        { sel: ".about-testimonial-mask", dur: "55s", dir: "fwd" },
      ];
      cfgs.forEach((cfg) => {
        document.querySelectorAll<HTMLElement>(cfg.sel).forEach((track) => {
          if (track.dataset.mq) return;
          const kids = Array.prototype.slice.call(track.children);
          if (!kids.length) return;
          track.dataset.mq = "1";
          kids.forEach((k: HTMLElement) => track.appendChild(k.cloneNode(true)));
          track.style.setProperty("--mq-dur", cfg.dur);
          track.classList.add("virion-marquee-track", cfg.dir === "rev" ? "mq-rev" : "mq-fwd");
        });
      });
    }

    initNav();
    initDropdown();
    initTabs();
    initFaq();
    initCart();
    initForms();
    initCheckout();
    initIncluded();
    initMarquee();
    initReveal();
  }, []);

  return null;
}
