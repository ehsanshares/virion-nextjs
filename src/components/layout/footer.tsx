
export function Footer() {
  return (
    <section className="footer">
      <div className="container">
        <div className="wrapper footer-wrapper">
          <div className="footer-logo-wrap">
            <a aria-current="page" className="footer-logo-link" href="/">
              <img alt="Footer Img" className="footer-img" src="/assets/images/Logo.svg" />
            </a>
          </div>
          <div className="footer-contents">
            <div className="footer-flex">
              <div className="navigation-text">Navigation</div>
              <div className="footer-pages-link">
                <a className="page-link" href="/">Home</a>
                <a className="page-link" href="/about">About</a>
                <a className="page-link" href="/features">Features</a>
                <a className="page-link" href="/contact">Contact</a>
              </div>
            </div>
            <div className="footer-flex">
              <div className="navigation-text">Documentation</div>
              <div className="footer-pages-link">
                <a className="page-link" href="/changelog">Changelog</a>
                <a className="page-link" href="/style-guide">Style guide</a>
                <a className="page-link" href="/license">License</a>
              </div>
            </div>
            <div className="footer-flex">
              <div className="navigation-text">Other Pages</div>
              <div className="footer-pages-link">
                <a className="page-link" href="/blog">Blog</a>
                <a className="page-link" href="/pricing">Pricing</a>
                <a className="page-link" href="/404">404</a>
              </div>
            </div>
            <div className="footer-flex">
              <div className="navigation-text">Social Connects</div>
              <div className="footer-pages-link">
                <a className="page-link" href="https://www.whatsapp.com/" target="_blank" rel="noreferrer">Whatsapp</a>
                <a className="page-link" href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
                <a className="page-link" href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="copyright-text">
              All Copyrights reserve at
              <a className="copyright-link" href="/">@Virion</a>
            </div>
          </div>
        </div>
      </div>
      <img alt="Footer Logo" className="footer-logo" src="/assets/images/Virion_1.webp" />
    </section>
  );
}
