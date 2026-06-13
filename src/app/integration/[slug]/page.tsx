import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getIntegration, getIntegrations } from "@/lib/content";
import { MdxBody } from "@/components/ui/mdx-body";
import { IntegrationCard } from "@/components/ui/integration-card";

export function generateStaticParams() {
  return getIntegrations().map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getIntegration(slug);
  if (!item) return {};
  return { title: `Virion + ${item.data.title}`, description: item.data.excerpt };
}

export default async function IntegrationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getIntegration(slug);
  if (!item) notFound();
  const { data, body } = item;
  const more = getIntegrations().filter((i) => i.slug !== slug);

  return (
    <>
      <section className="blog-hero-section">
        <div className="container large-container">
          <div className="wrapper integration-detail-wrapper">
            <div className="integration-top-wrap">
              <div className="integration-flex-1 reveal">
                <div className="integration-item-block">
                  <img alt={data.title} className="integration-logo" loading="lazy" src={data.icon} />
                </div>
                <img alt="Integration Plus" className="integration-plus" loading="lazy" src="/assets/images/Plus.webp" />
                <div className="integration-item-block">
                  <img alt="Integration Logo" className="integration-logo _01" loading="lazy" src="/assets/images/Logo.svg" />
                  <div></div>
                </div>
              </div>
              <div className="integration-header reveal">
                <h1>Virion +</h1>
                <h1>{data.title}</h1>
              </div>
              <p className="integration-details-para reveal">{data.comboDescription}</p>
            </div>
            <div className="integration-bottom-wrap">
              <div className="integration-details reveal">
                <MdxBody source={body} />
              </div>
              <div className="authshield-sticky reveal">
                <div className="integration-icon-block">
                  <img alt={data.title} className="integration-icon" loading="lazy" src={data.icon} />
                </div>
                <div className="authshield-flex">
                  <div className="authshield-title">{data.title}</div>
                  <p className="authshield-para">{data.excerpt}</p>
                </div>
                <div className="resources-block">
                  <div className="resources-text">Resources</div>
                  <a className="resource-link" href="/contact">
                    <svg className="resource-icon" fill="none" viewBox="0 0 18 18" width="100%" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 7.5C11.5858 7.5 11.25 7.83578 11.25 8.25V12.75C11.25 13.1642 11.5858 13.5 12 13.5H12.75C14.4068 13.5 15.75 12.1568 15.75 10.5C15.75 8.84317 14.4068 7.5 12.75 7.5H12Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.25" />
                      <path d="M6 7.5C6.41421 7.5 6.75 7.83578 6.75 8.25V12.75C6.75 13.1642 6.41421 13.5 6 13.5H5.25C3.59314 13.5 2.25 12.1568 2.25 10.5C2.25 8.84317 3.59314 7.5 5.25 7.5H6Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.25" />
                      <path d="M2.25 10.5V8.25C2.25 4.52208 5.27208 1.5 9 1.5C12.728 1.5 15.75 4.52208 15.75 8.25V13.5C15.75 15.1568 14.4068 16.5 12.75 16.5H9" stroke="currentColor" strokeLinecap="round" strokeWidth="1.25" />
                    </svg>
                    <div>Support</div>
                    <svg className="resource-icon" fill="none" viewBox="0 0 18 18" width="100%" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.75004 4.5L11.25 9L6.75 13.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="16" strokeWidth="1.25" />
                    </svg>
                  </a>
                  <a className="resource-link" href="/blog">
                    <svg className="resource-icon" fill="none" viewBox="0 0 18 18" width="100%" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.625 11.3787V4.125C2.625 3.29657 3.29657 2.625 4.125 2.625H13.875C14.7034 2.625 15.375 3.29657 15.375 4.125V15C15.375 15.8284 14.7034 16.5 13.875 16.5H7.7463C7.34849 16.5 6.96697 16.342 6.68566 16.0606L3.06434 12.4394C2.78303 12.158 2.625 11.7765 2.625 11.3787Z" stroke="currentColor" strokeWidth="1.25" />
                      <path d="M12.75 1.5V3.375M9 1.5V3.375M5.25 1.5V3.375" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                      <path d="M10.125 11.25H11.625M6.375 7.5H11.625" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                      <path d="M3 11.625H6.375C7.20343 11.625 7.875 12.2966 7.875 13.125V16.5" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.25" />
                    </svg>
                    <div>Documentation</div>
                    <svg className="resource-icon" fill="none" viewBox="0 0 18 18" width="100%" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.75004 4.5L11.25 9L6.75 13.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="16" strokeWidth="1.25" />
                    </svg>
                  </a>
                  <a className="resource-link" href="/contact">
                    <svg className="resource-icon" fill="none" viewBox="0 0 18 18" width="100%" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 1.875H3.375C2.54657 1.875 1.875 2.54657 1.875 3.375V6M12 1.875H14.625C15.4534 1.875 16.125 2.54657 16.125 3.375V6M12 16.125H14.625C15.4534 16.125 16.125 15.4534 16.125 14.625V12M6 16.125H3.375C2.54657 16.125 1.875 15.4534 1.875 14.625V12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                      <path d="M7.28572 8.25H6V12.75H12V8.25H10.7143M7.28572 8.25V6.91667C7.28572 5.99619 8.0532 5.25 9 5.25C9.9468 5.25 10.7143 5.99619 10.7143 6.91667V8.25M7.28572 8.25H10.7143" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.25" />
                    </svg>
                    <div>Privacy Policy</div>
                    <svg className="resource-icon" fill="none" viewBox="0 0 18 18" width="100%" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.75004 4.5L11.25 9L6.75 13.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="16" strokeWidth="1.25" />
                    </svg>
                  </a>
                  <a className="resource-link" href="/" target="_blank" rel="noreferrer">
                    <svg className="resource-icon" fill="none" viewBox="0 0 18 18" width="100%" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.625 1.875H3.375C2.54657 1.875 1.875 2.54657 1.875 3.375V14.625C1.875 15.4534 2.54657 16.125 3.375 16.125H14.625C15.4534 16.125 16.125 15.4534 16.125 14.625V3.375C16.125 2.54657 15.4534 1.875 14.625 1.875Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                      <path d="M1.875 6.75073H16.125" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                      <path d="M10.5 4.5H10.5067M13.4932 4.5H13.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                    </svg>
                    <div>Website</div>
                    <svg className="resource-icon" fill="none" viewBox="0 0 18 18" width="100%" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.75004 4.5L11.25 9L6.75 13.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="16" strokeWidth="1.25" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="related-blog-section">
        <div className="container large-container">
          <div className="wrapper related-blog-wrapper">
            <div className="choose-top">
              <div className="subtitle-block reveal">
                <div className="typography-title">Integration</div>
              </div>
              <h2 className="heading-h2 related-blog reveal">More Integration</h2>
            </div>
            <div className="collection-list-wrapper-integration">
              <div className="collection-list-integration" role="list">
                {more.map((i) => (
                  <IntegrationCard key={i.slug} item={i} />
                ))}
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
