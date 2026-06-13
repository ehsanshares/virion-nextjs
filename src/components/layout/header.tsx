
/**
 * Header — reproduces the template's original markup and class names verbatim so
 * assets/css/styles.css styles it identically; VirionScripts drives the mobile
 * nav, Pages dropdown and cart drawer.
 */
export function Header() {
  return (
    <div className="header">
      <div className="navbar" role="banner">
        <div className="navbar-wrapper">
          <a aria-current="page" className="navbar-brand" href="/">
            <img alt="Brand Logo" className="brand-logo" src="/assets/images/Logo.svg" />
          </a>
          <nav className="nav-menu-wrapper" role="navigation">
            <div className="nav-menu">
              <div className="nav-menu-items">
                <a className="nav-link-block" href="/about">
                  <div>About</div>
                </a>
                <a className="nav-link-block" href="/features">
                  <div>Features</div>
                </a>
                <a className="nav-link-block" href="/pricing">
                  <div>Pricing</div>
                </a>
                <a className="nav-link-block" href="/blog">
                  <div>Blog</div>
                </a>
                <div className="nav-dropdown">
                  <div className="nav-dropdown-toggle">
                    <div>Pages</div>
                    <svg className="nav-arrow" fill="none" viewBox="0 0 17 16" width="100%" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 5.99991L8.50003 9.99988L12.5 5.99988" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="16" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <nav className="nav-dropdown-list shadow-three mobile-shadow-hide">
                    <div className="nav-pages-items">
                      <div className="nav-pages-block">
                        <div className="pages-block-title">Main Pages</div>
                        <a className="nav-page-link" href="/">Home</a>
                        <a className="nav-page-link" href="/about">About</a>
                        <a className="nav-page-link" href="/features">Features</a>
                        <a className="nav-page-link" href="/pricing">Pricing</a>
                        <a className="nav-page-link" href="/blog">Blog</a>
                      </div>
                      <div className="nav-pages-block">
                        <div className="pages-block-title">Inner pages</div>
                        <a className="nav-page-link" href="/blog/building-secure-fintech-platforms-with-scalable-saas-templates">Blog single</a>
                        <a className="nav-page-link" href="/product/for-agency-or-enterprise">Pricing single</a>
                        <a className="nav-page-link" href="/integration">Integration</a>
                        <a className="nav-page-link" href="/integration/payline">Integration single</a>
                        <a className="nav-page-link" href="/contact">Contact</a>
                      </div>
                      <div className="nav-pages-block">
                        <div className="pages-block-title">Utility pages</div>
                        <a className="nav-page-link" href="/404">404</a>
                        <a className="nav-page-link" href="/license">License</a>
                        <a className="nav-page-link" href="/changelog">Changelog</a>
                        <a className="nav-page-link" href="/style-guide">Style guide</a>
                        <a className="nav-page-link" href="/401">Password</a>
                        <a className="nav-page-link" href="/login">Login</a>
                        <a className="nav-page-link" href="/signup">Sign up</a>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
              <div className="nav-menu-buttons">
                <a className="primary-button" href="/contact">
                  <div className="text-overflow">
                    <div className="button-text _01">Get Started</div>
                    <div className="button-text _02">Get Started</div>
                  </div>
                </a>
              </div>
            </div>
          </nav>
          <div className="menu-button">
            <svg aria-hidden="true" className="menu-icon-open" fill="none" height="26" viewBox="0 0 26 26" width="26">
              <path d="M4 8h18M4 13h18M4 18h18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
            </svg>
            <svg aria-hidden="true" className="menu-icon-close" fill="none" height="26" viewBox="0 0 26 26" width="26">
              <path d="M6 6l14 14M20 6 6 20" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
            </svg>
          </div>
          <div className="cart-abs">
            <div className="cart">
              <a aria-haspopup="dialog" aria-label="Open cart" className="cart-button" data-cart-open="" href="#" role="button">
                <div className="text-block">Cart</div>
                <div className="cart-quantity" data-cart-count="">0</div>
                <svg aria-hidden="true" fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.666 13.333l7.266-.606c2.274-.189 2.784-.685 3.036-2.953L17.5 5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
                  <path d="M5 5h13.333" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
                  <circle cx="5" cy="16.667" r="1.667" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="14.167" cy="16.667" r="1.667" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M6.666 16.667h5.833" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
                  <path d="M1.666 1.667h.805c.787 0 1.473.52 1.664 1.262l2.48 9.635c.125.486.018 1.002-.292 1.404L5.526 15" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
                </svg>
              </a>
              <div aria-hidden="true" className="cart-modal">
                <div aria-label="Your cart" className="cart-container" role="dialog">
                  <div className="cart-header">
                    <h4 className="cart-heading">Your Cart</h4>
                    <a aria-label="Close cart" className="close-button" data-cart-close="" role="button">
                      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" width="16">
                        <path d="M3 3l10 10M13 3 3 13" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
                      </svg>
                    </a>
                  </div>
                  <ul className="cart-list" data-cart-list=""></ul>
                  <div className="cart-empty" data-cart-empty="">No items found.</div>
                  <div className="cart-footer" data-cart-footer="" hidden>
                    <div className="cart-subtotal-row">
                      <div>Subtotal</div>
                      <div data-cart-subtotal="">$0.00</div>
                    </div>
                    <a className="checkout-button" href="/checkout">
                      Continue to Checkout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
