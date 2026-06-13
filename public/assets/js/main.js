/* Virion — vanilla interactions (replaces webflow.js + jQuery)
   Mobile nav · Pages dropdown · pricing tabs · FAQ accordion · cart (localStorage). */
(function () {
  "use strict";

  /* ---------- Mobile navigation ---------- */
  function initNav() {
    var btn = document.querySelector(".menu-button");
    var nav = document.querySelector(".navbar");
    if (!btn || !nav) return;
    btn.setAttribute("role", "button");
    btn.setAttribute("tabindex", "0");
    btn.setAttribute("aria-label", "Menu");
    btn.setAttribute("aria-expanded", "false");
    function toggle(open) {
      var willOpen = open === undefined ? !nav.classList.contains("nav-open") : open;
      nav.classList.toggle("nav-open", willOpen);
      document.body.classList.toggle("nav-locked", willOpen);
      btn.setAttribute("aria-expanded", String(willOpen));
    }
    btn.addEventListener("click", function () { toggle(); });
    btn.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
    });
    // close when a nav link is tapped (mobile)
    nav.querySelectorAll(".nav-link-block, .nav-page-link, .nav-menu-buttons a").forEach(function (a) {
      a.addEventListener("click", function () { toggle(false); });
    });
  }

  /* ---------- Pages dropdown ---------- */
  function initDropdown() {
    document.querySelectorAll(".nav-dropdown-toggle").forEach(function (toggle) {
      var wrap = toggle.parentElement;
      toggle.setAttribute("role", "button");
      toggle.setAttribute("tabindex", "0");
      toggle.setAttribute("aria-expanded", "false");
      var list = wrap.querySelector(".nav-dropdown-list");
      function set(open) {
        wrap.classList.toggle("dropdown-open", open);
        if (list) list.classList.toggle("is-open", open);
        toggle.setAttribute("aria-expanded", String(open));
      }
      toggle.addEventListener("click", function (e) {
        e.stopPropagation();
        set(!wrap.classList.contains("dropdown-open"));
      });
      toggle.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle.click(); }
        if (e.key === "Escape") set(false);
      });
      // hover (desktop) — close on a short delay so moving the cursor across
      // the gap between the toggle and the panel doesn't dismiss it early
      var closeTimer;
      wrap.addEventListener("mouseenter", function () {
        if (window.matchMedia("(min-width: 992px)").matches) { clearTimeout(closeTimer); set(true); }
      });
      wrap.addEventListener("mouseleave", function () {
        if (window.matchMedia("(min-width: 992px)").matches) {
          clearTimeout(closeTimer);
          closeTimer = setTimeout(function () { set(false); }, 240);
        }
      });
    });
    document.addEventListener("click", function () {
      document.querySelectorAll(".dropdown-open").forEach(function (w) {
        w.classList.remove("dropdown-open");
        var t = w.querySelector(".nav-dropdown-toggle");
        if (t) t.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Tabs (pricing Monthly / Yearly) ---------- */
  function initTabs() {
    document.querySelectorAll(".membershop-tabs, .blog-tabs").forEach(function (tabs) {
      var links = tabs.querySelectorAll("a[data-tab]");
      var panes = [].slice.call(tabs.querySelectorAll("[data-tab]")).filter(function (el) { return el.tagName !== "A"; });
      function activate(name) {
        links.forEach(function (l) { l.classList.toggle("is-active", l.dataset.tab === name); });
        panes.forEach(function (p) { p.classList.toggle("is-active", p.dataset.tab === name); });
      }
      links.forEach(function (l) {
        l.setAttribute("role", "tab");
        l.setAttribute("tabindex", "0");
        l.addEventListener("click", function () { activate(l.dataset.tab); });
        l.addEventListener("keydown", function (e) {
          if (e.key === "Enter" || e.key === " ") { e.preventDefault(); activate(l.dataset.tab); }
        });
      });
      // default active: the one originally marked, else first
      var initial = tabs.querySelector("a[data-tab].is-active") || links[0];
      if (initial) activate(initial.dataset.tab);
    });
  }

  /* ---------- FAQ accordion ---------- */
  function initFaq() {
    document.querySelectorAll(".faq-list-wrap").forEach(function (item) {
      var q = item.querySelector(".faq-question");
      var a = item.querySelector(".faq-answer");
      if (!q || !a) return;
      q.setAttribute("role", "button");
      q.setAttribute("tabindex", "0");
      q.setAttribute("aria-expanded", "false");
      function toggle() {
        var open = item.classList.toggle("faq-open");
        q.setAttribute("aria-expanded", String(open));
        a.style.maxHeight = open ? a.scrollHeight + "px" : "";
      }
      q.addEventListener("click", toggle);
      q.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
      });
    });
  }

  /* ---------- Cart (localStorage, no backend) ---------- */
  var CART_KEY = "virion:cart:v1";
  var Cart = {
    read: function () { try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; } catch (e) { return []; } },
    write: function (items) { localStorage.setItem(CART_KEY, JSON.stringify(items)); this.render(); },
    add: function (p) {
      var items = this.read();
      var found = items.find(function (i) { return i.id === p.id; });
      if (found) found.qty += p.qty || 1; else items.push({ id: p.id, name: p.name, price: p.price, qty: p.qty || 1 });
      this.write(items);
    },
    setQty: function (id, qty) {
      var items = this.read().map(function (i) { return i.id === id ? Object.assign(i, { qty: Math.max(1, qty) }) : i; });
      this.write(items);
    },
    remove: function (id) { this.write(this.read().filter(function (i) { return i.id !== id; })); },
    count: function () { return this.read().reduce(function (n, i) { return n + i.qty; }, 0); },
    total: function () { return this.read().reduce(function (s, i) { return s + i.price * i.qty; }, 0); },
    money: function (n) { return "$" + n.toFixed(2); },
    render: function () {
      var count = this.count();
      document.querySelectorAll("[data-cart-count]").forEach(function (el) { el.textContent = count; });
      document.querySelectorAll("[data-cart-subtotal]").forEach(function (el) { el.textContent = Cart.money(Cart.total()); });
      var list = document.querySelector("[data-cart-list]");
      if (list) {
        var items = this.read();
        var empty = document.querySelector("[data-cart-empty]");
        var footer = document.querySelector("[data-cart-footer]");
        if (empty) empty.hidden = items.length > 0;
        if (footer) footer.hidden = items.length === 0;
        list.innerHTML = items.map(function (i) {
          return '<li class="cart-line" data-id="' + i.id + '">' +
            '<div class="cart-line-info"><span class="cart-line-name">' + i.name + '</span>' +
            '<span class="cart-line-price">' + Cart.money(i.price) + '</span></div>' +
            '<div class="cart-line-actions"><button type="button" class="cart-qty-btn" data-qty-dec aria-label="Decrease">−</button>' +
            '<span class="cart-qty">' + i.qty + '</span>' +
            '<button type="button" class="cart-qty-btn" data-qty-inc aria-label="Increase">+</button>' +
            '<button type="button" class="cart-remove" data-remove aria-label="Remove">×</button></div></li>';
        }).join("");
      }
    }
  };

  function initCart() {
    Cart.render();
    var wrap = document.querySelector(".cart");
    if (wrap) {
      var openBtn = wrap.querySelector("[data-cart-open]");
      var closeBtn = wrap.querySelector("[data-cart-close]");
      var panel = wrap.querySelector(".cart-modal");
      function setOpen(o) {
        wrap.classList.toggle("cart-open", o);
        document.body.classList.toggle("nav-locked", o);
        if (panel) panel.setAttribute("aria-hidden", String(!o));
      }
      if (openBtn) openBtn.addEventListener("click", function (e) { e.preventDefault(); setOpen(true); });
      if (closeBtn) closeBtn.addEventListener("click", function (e) { e.preventDefault(); setOpen(false); });
      if (panel) panel.addEventListener("click", function (e) { if (e.target === panel) setOpen(false); });
      document.addEventListener("keydown", function (e) { if (e.key === "Escape") setOpen(false); });
    }
    // line item qty / remove (event delegation)
    var list = document.querySelector("[data-cart-list]");
    if (list) list.addEventListener("click", function (e) {
      var line = e.target.closest(".cart-line"); if (!line) return;
      var id = line.dataset.id;
      var item = Cart.read().find(function (i) { return i.id === id; }); if (!item) return;
      if (e.target.closest("[data-qty-inc]")) Cart.setQty(id, item.qty + 1);
      else if (e.target.closest("[data-qty-dec]")) Cart.setQty(id, item.qty - 1);
      else if (e.target.closest("[data-remove]")) Cart.remove(id);
    });
    // add-to-cart buttons on product/pricing pages
    document.querySelectorAll("[data-add-to-cart]").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        Cart.add({ id: btn.dataset.id, name: btn.dataset.name, price: parseFloat(btn.dataset.price) || 0, qty: 1 });
        var wrap = document.querySelector(".cart");
        if (wrap) wrap.classList.add("cart-open");
      });
    });
  }
  window.VirionCart = Cart;

  /* ---- Scroll-reveal (replaces IX2 fade-up entrances) ---- */
  function initReveal() {
    var els = [].slice.call(document.querySelectorAll(".reveal"));
    if (!els.length) return;
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (e) { e.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("is-visible");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    // light stagger for siblings revealed together
    els.forEach(function (e) {
      var sibs = [].slice.call(e.parentNode.children).filter(function (c) { return c.classList.contains("reveal"); });
      var i = sibs.indexOf(e);
      if (i > 0) e.style.transitionDelay = Math.min(i * 80, 320) + "ms";
      io.observe(e);
    });
  }

  /* ---- Front-end demo forms (no backend) ---- */
  function initForms() {
    document.querySelectorAll("[data-demo-form]").forEach(function (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var wrap = form.parentElement;
        var done = wrap.querySelector("[data-form-done]");
        var fail = wrap.querySelector("[data-form-fail]");
        if (fail) fail.hidden = true;
        form.style.display = "none";
        if (done) done.hidden = false;
      });
    });
  }

  /* ---- Checkout + order confirmation (front-end demo, no backend) ---- */
  var ORDER_KEY = "virion:lastorder";
  function initCheckout() {
    var isConfirm = document.body.hasAttribute("data-order-confirmation");
    var onCheckout = !!document.querySelector("[data-place-order]");
    if (!isConfirm && !onCheckout) return;

    var items, total;
    if (isConfirm) {
      var last = null;
      try { last = JSON.parse(localStorage.getItem(ORDER_KEY)); } catch (e) {}
      items = (last && last.items) || [];
      total = (last && last.total) || 0;
    } else {
      items = Cart.read();
      total = Cart.total();
    }

    var list = document.querySelector("[data-checkout-items]");
    if (list) {
      list.innerHTML = items.length
        ? items.map(function (i) {
            return '<div class="checkout-item"><div class="checkout-item-info">' + i.name +
              ' <span class="checkout-item-qty">x' + i.qty + '</span></div><div>' +
              Cart.money(i.price * i.qty) + "</div></div>";
          }).join("")
        : '<div class="checkout-empty">Your cart is empty.</div>';
    }
    document.querySelectorAll("[data-checkout-subtotal], [data-checkout-total]").forEach(function (el) {
      el.textContent = Cart.money(total);
    });

    // Place Order -> save order, clear cart, go to confirmation
    document.querySelectorAll("[data-place-order]").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        localStorage.setItem(ORDER_KEY, JSON.stringify({ items: Cart.read(), total: Cart.total(), date: Date.now() }));
        Cart.write([]);
        window.location.href = "order-confirmation.html";
      });
    });
    // demo forms shouldn't navigate
    document.querySelectorAll(".checkout-form, form.checkout-block").forEach(function (f) {
      f.addEventListener("submit", function (e) { e.preventDefault(); });
    });
  }

  /* ---- Pricing "Included" feature popover (hover/click) ---- */
  function initIncluded() {
    document.querySelectorAll(".product-card").forEach(function (card) {
      var content = card.querySelector(".features-inculded-block");
      if (!content) return;
      // the visible toggle is the .included-block that actually contains the popover
      var toggle = content.closest(".included-block") || card.querySelector(".included-block");
      if (!toggle) return;
      var timer;
      function show() { clearTimeout(timer); content.style.display = "flex"; toggle.classList.add("is-open"); }
      function hide() { timer = setTimeout(function () { content.style.display = ""; toggle.classList.remove("is-open"); }, 120); }
      toggle.style.cursor = "pointer";
      toggle.addEventListener("mouseenter", show);
      toggle.addEventListener("mouseleave", hide);
      content.addEventListener("mouseenter", show);
      content.addEventListener("mouseleave", hide);
      toggle.addEventListener("click", function (e) {
        if (content.contains(e.target)) return;
        if (content.style.display === "flex") hide(); else show();
      });
    });
  }

  /* ---- Marquees / tickers (replace IX2 auto-scroll) ---- */
  function initMarquee() {
    var cfgs = [
      { sel: ".testimonial-items-top", dur: "55s", dir: "fwd" },
      { sel: ".testimonial-items-bottom", dur: "55s", dir: "rev" },
      { sel: ".integration-marquee.top", dur: "40s", dir: "fwd" },
      { sel: ".integration-marquee.middle", dur: "46s", dir: "rev" },
      { sel: ".integration-marquee.bottom", dur: "40s", dir: "fwd" },
      { sel: ".about-testimonial-mask", dur: "55s", dir: "fwd" }
    ];
    cfgs.forEach(function (cfg) {
      document.querySelectorAll(cfg.sel).forEach(function (track) {
        if (track.dataset.mq) return;
        var kids = Array.prototype.slice.call(track.children);
        if (!kids.length) return;
        track.dataset.mq = "1";
        kids.forEach(function (k) { track.appendChild(k.cloneNode(true)); });
        track.style.setProperty("--mq-dur", cfg.dur);
        track.classList.add("virion-marquee-track", cfg.dir === "rev" ? "mq-rev" : "mq-fwd");
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
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
  });
})();
