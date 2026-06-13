// Virion template — this page's markup mirrors the original design; styling comes
// from /assets/css/styles.css. Edit copy and image sources directly below.
export default function ProductPage() {
  return (
    <>
      <section className="home-hero-section">
                <div className="container large-container">
                  <div className="wrapper plan-hero-wrapper">
                    <div className="features-top-contents">
                      <h1 className="hero-title features reveal">
                        For individual or personal
                      </h1>
                      <p className="features-para reveal">
                        No hidden fees. Choose a plan that fits your team and scale with confidence.
                      </p>
                    </div>
                    <div className="pricing-details-wrap reveal">
                      <div className="product-lists">
                        <div className="virion-text">
                          What’s included
                        </div>
                        <ul className="virion-lists" role="list">
                          <li className="virion-list">
                            Real-time dashboards
                          </li>
                          <li className="virion-list">
                            Automated reporting
                          </li>
                          <li className="virion-list">
                            AI-powered forecasting
                          </li>
                          <li className="virion-list">
                            80+ easy integrations
                          </li>
                          <li className="virion-list">
                            No-code setup
                          </li>
                          <li className="virion-list">
                            Enterprise-grade security
                          </li>
                        </ul>
                      </div>
                      <div className="price-plan">
                        <div className="price-text">
                          Price
                        </div>
                        <div className="plan-middle">
                          <div className="product-top-detail price">
                            <div className="product-price-detail">
                              <div className="dollar-sign hide">
                                $
                              </div>
                              <div className="display-title price">
                                49
                              </div>
                              <div className="dollar-sign hide">
                              </div>
                            </div>
                            <p className="product-type">
                              Per month
                            </p>
                          </div>
                        </div>
                        <div className="add-to-cart">
                          <form className="default-state">
                            <label className="quantity-field-label" htmlFor="quantity-84baa7e31f0025a246eed41effee81ed">
                              Quantity
                            </label>
                            <input className="quantity" id="quantity-84baa7e31f0025a246eed41effee81ed" inputMode="numeric" min="1" name="commerce-add-to-cart-quantity-input" pattern="^[0-9]+$" type="number" value="1" />
                            <input aria-busy="false" aria-haspopup="dialog" className="add-to-cart-button" data-add-to-cart="1" data-id="for-individual-or-personal" data-name="For individual or personal" data-price="49" type="button" value="Add to Cart" />
                            <a aria-busy="false" aria-haspopup="false" className="buy-now-button" data-default-text="Buy now" data-subscription-text="Subscribe now" href="/checkout">
                              Buy now
                            </a>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="comparison-section">
                <div className="container large-container">
                  <div className="wrapper comparison-wrapper">
                    <div className="use-case-top">
                      <div className="subtitle-block">
                        <div className="typography-title">
                          Comparison
                        </div>
                      </div>
                      <h2 className="heading-h2 why-title">
                        Virion vs Others
                      </h2>
                      <p className="center-align">
                        Simpler, faster, and more scalable than traditional analytics tools.
                      </p>
                    </div>
                    <div className="comparison-block">
                      <div className="comparison-card _01">
                        <h3 className="virion-text">
                          Virion
                        </h3>
                        <ul className="virion-lists" role="list">
                          <li className="virion-list">
                            Real-time dashboards
                          </li>
                          <li className="virion-list">
                            Automated reporting
                          </li>
                          <li className="virion-list">
                            AI-powered forecasting
                          </li>
                          <li className="virion-list">
                            80+ easy integrations
                          </li>
                          <li className="virion-list">
                            No-code setup
                          </li>
                          <li className="virion-list">
                            Enterprise-grade security
                          </li>
                        </ul>
                      </div>
                      <div className="comparison-card _02">
                        <h4>
                          Others
                        </h4>
                        <ul className="virion-lists" role="list">
                          <li className="virion-list cross">
                            Delayed updates
                          </li>
                          <li className="virion-list cross">
                            Manual reporting setup
                          </li>
                          <li className="virion-list cross">
                            Limited forecasting tools
                          </li>
                          <li className="virion-list cross">
                            Few integrations
                          </li>
                          <li className="virion-list cross">
                            Complex setup
                          </li>
                          <li className="virion-list cross">
                            Partial security
                          </li>
                        </ul>
                      </div>
                      <img alt="Comparison Icon" className="comparison-icon" loading="lazy" sizes="100vw" src="/assets/images/Comparison-Icon.webp" srcSet="/assets/images/Group-2147229506-p-500.png 500w, /assets/images/Group-2147229506-p-800.png 800w, /assets/images/Comparison-Icon.webp 932w" />
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
