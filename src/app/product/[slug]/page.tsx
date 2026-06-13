import type { Metadata } from "next";
import { notFound } from "next/navigation";
import products from "@/content/products.json";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.handle }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.handle === slug);
  return product ? { title: product.name } : {};
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.handle === slug);
  if (!product) notFound();
  const { handle, name, price } = product;

  return (
    <>
      <section className="home-hero-section">
        <div className="container large-container">
          <div className="wrapper plan-hero-wrapper">
            <div className="features-top-contents">
              <h1 className="hero-title features reveal">{name}</h1>
              <p className="features-para reveal">
                No hidden fees. Choose a plan that fits your team and scale with confidence.
              </p>
            </div>
            <div className="pricing-details-wrap reveal">
              <div className="product-lists">
                <div className="virion-text">What’s included</div>
                <ul className="virion-lists" role="list">
                  <li className="virion-list">Real-time dashboards</li>
                  <li className="virion-list">Automated reporting</li>
                  <li className="virion-list">AI-powered forecasting</li>
                  <li className="virion-list">80+ easy integrations</li>
                  <li className="virion-list">No-code setup</li>
                  <li className="virion-list">Enterprise-grade security</li>
                </ul>
              </div>
              <div className="price-plan">
                <div className="price-text">Price</div>
                <div className="plan-middle">
                  <div className="product-top-detail price">
                    <div className="product-price-detail">
                      <div className="dollar-sign hide">$</div>
                      <div className="display-title price">{price}</div>
                      <div className="dollar-sign hide"></div>
                    </div>
                    <p className="product-type">Per month</p>
                  </div>
                </div>
                <div className="add-to-cart">
                  <form className="default-state">
                    <label className="quantity-field-label" htmlFor={`quantity-${handle}`}>
                      Quantity
                    </label>
                    <input
                      className="quantity"
                      id={`quantity-${handle}`}
                      inputMode="numeric"
                      min="1"
                      name="commerce-add-to-cart-quantity-input"
                      pattern="^[0-9]+$"
                      defaultValue="1"
                      type="number"
                    />
                    <input
                      aria-busy="false"
                      aria-haspopup="dialog"
                      className="add-to-cart-button"
                      data-add-to-cart="1"
                      data-id={handle}
                      data-name={name}
                      data-price={price}
                      type="button"
                      value="Add to Cart"
                    />
                    <a
                      aria-busy="false"
                      aria-haspopup="false"
                      className="buy-now-button"
                      data-default-text="Buy now"
                      data-subscription-text="Subscribe now"
                      href="/checkout"
                    >
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
                <div className="typography-title">Comparison</div>
              </div>
              <h2 className="heading-h2 why-title">Virion vs Others</h2>
              <p className="center-align">
                Simpler, faster, and more scalable than traditional analytics tools.
              </p>
            </div>
            <div className="comparison-block">
              <div className="comparison-card _01">
                <h3 className="virion-text">Virion</h3>
                <ul className="virion-lists" role="list">
                  <li className="virion-list">Real-time dashboards</li>
                  <li className="virion-list">Automated reporting</li>
                  <li className="virion-list">AI-powered forecasting</li>
                  <li className="virion-list">80+ easy integrations</li>
                  <li className="virion-list">No-code setup</li>
                  <li className="virion-list">Enterprise-grade security</li>
                </ul>
              </div>
              <div className="comparison-card _02">
                <h4>Others</h4>
                <ul className="virion-lists" role="list">
                  <li className="virion-list cross">Delayed updates</li>
                  <li className="virion-list cross">Manual reporting setup</li>
                  <li className="virion-list cross">Limited forecasting tools</li>
                  <li className="virion-list cross">Few integrations</li>
                  <li className="virion-list cross">Complex setup</li>
                  <li className="virion-list cross">Partial security</li>
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
                <h2 className="white-text cta-title">Unlock Smarter Analytics Now</h2>
                <p className="cta-para">
                  Start free today or book a demo to see how Virion transforms your data.
                </p>
                <div className="cta-buttons">
                  <a className="cta-button" href="/contact">
                    <div className="text-overflow">
                      <div className="button-text _01">Get Started</div>
                      <div className="button-text _02">Get Started</div>
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
