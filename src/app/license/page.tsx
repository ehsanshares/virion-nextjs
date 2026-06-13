// Virion template — this page's markup mirrors the original design; styling comes
// from /assets/css/styles.css. Edit copy and image sources directly below.
export default function LicensePage() {
  return (
    <>
      <section className="style-guide-section">
                <div className="container large-container">
                  <div className="wrapper license-wrapper">
                    <div className="block-wrap licenses">
                      <h1 className="center-align reveal">
                        License
                      </h1>
                      <p className="center-align license-para reveal">
                        All graphical assets in this template are licensed for personal and commercial use. If you'd like to use a specific asset, please check the license below.
                      </p>
                    </div>
                    <div className="license-wrap">
                      <div className="license-card reveal">
                        <div className="license-icon-block">
                          <img alt="License Icon" className="license-icon" loading="lazy" src="/assets/images/License-Icon-1.webp" />
                        </div>
                        <div className="license-flex">
                          <div className="license-card-title">
                            Images
                          </div>
                          <p>
                            Images featured in the PR template are sourced from
                            <a className="license-link" href="https://www.lummi.ai/license" target="_blank">
                              Lummi.ai
                            </a>
                            curated to ensure aesthetic appeal and licensing freedom. All visuals are free to use for both personal and commercial projects.
                          </p>
                        </div>
                      </div>
                      <div className="license-card reveal">
                        <div className="license-icon-block">
                          <img alt="License Icon" className="license-icon" loading="lazy" src="/assets/images/License-Icon-2.webp" />
                        </div>
                        <div className="license-flex">
                          <div className="license-card-title">
                            Icon
                          </div>
                          <p>
                            All icons in the PR template are powered by
                            <a className="license-link" href="https://hugeicons.com/license-agreement" target="_blank">
                              Huge Icons
                            </a>
                            , an open-source icon library made for designers and developers. They’re free to use in both personal and commercial projects  no strings attached.
                          </p>
                        </div>
                      </div>
                      <div className="license-card reveal">
                        <div className="license-icon-block">
                          <img alt="License Icon" className="license-icon" loading="lazy" src="/assets/images/License-Icon-3.webp" />
                        </div>
                        <div className="license-flex">
                          <div className="license-card-title">
                            Font
                          </div>
                          <p>
                            PR template uses two typefaces: Inter Display and Instrument Serif, both available via
                            <a className="license-link" href="https://fonts.google.com/specimen/Inter" target="_blank">
                              Google Fonts
                            </a>
                            . They are 100% free for both personal and commercial use, with flexible licensing and seamless integration.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="cta-section">
                <div className="container large-container">
                  <div className="wrapper cta-wrapper">
                    <div className="cta-wrap">
                      <div className="cta-flex">
                        <h2 className="white-text cta-title">
                          Unlock Smarter Analytics Now
                        </h2>
                        <p className="cta-para">
                          Start free today or book a demo to see how Virion transforms your data.
                        </p>
                        <div className="cta-buttons">
                          <a className="cta-button" href="/contact">
                            <div className="text-overflow">
                              <div className="button-text _01">
                                Get Started
                              </div>
                              <div className="button-text _02">
                                Get Started
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
    </>
  );
}
