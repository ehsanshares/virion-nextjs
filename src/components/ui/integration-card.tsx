import type { IntegrationFrontmatter } from "@/lib/content";

/** Integration card — shared by the listing grid and the "More Integration" section. */
export function IntegrationCard({ item }: { item: IntegrationFrontmatter }) {
  return (
    <div className="reveal" role="listitem">
      <div className="integration-item">
        <div className="integration-icon-block">
          <img alt={item.title} className="integration-icon" loading="lazy" src={item.icon} />
        </div>
        <div className="integration-detail">
          <div className="integration-item-name">{item.title}</div>
          <p className="integration-short-desp">{item.excerpt}</p>
          <a className="integration-button" href={`/integration/${item.slug}`}>
            <div className="button-texts">
              <div className="more-text _01">Learn More</div>
              <div className="more-text _02">Learn More</div>
            </div>
            <div className="buttton-arrows integration">
              <svg className="more-button-arrow integration-1" fill="none" viewBox="0 0 20 20" width="100%" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.8327 14.9995L15.8327 9.9995L10.8327 4.99951M15.416 9.9995H4.16602" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
              <svg className="more-button-arrow integration-2" fill="none" viewBox="0 0 20 20" width="100%" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.8327 14.9995L15.8327 9.9995L10.8327 4.99951M15.416 9.9995H4.16602" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
