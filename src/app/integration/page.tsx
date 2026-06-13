import type { Metadata } from "next";
import { getIntegrations } from "@/lib/content";
import { IntegrationCard } from "@/components/ui/integration-card";

export const metadata: Metadata = {
  title: "Integrations",
  description:
    "Easily connect your favorite tools and platforms to create a cohesive, efficient workflow — no disruption, no downtime.",
};

export default function IntegrationListPage() {
  const integrations = getIntegrations();
  return (
    <>
      <section className="blog-hero-section">
        <div className="container large-container">
          <div className="wrapper blog-hero-wrapper">
            <div className="hero-top-contents">
              <h1 className="integration-title reveal">Effortless Tools. Smarter Workflows.</h1>
              <p className="integration-para reveal">
                Easily connect your favorite tools and platforms to create a cohesive, efficient
                workflow no disruption, no downtime.
              </p>
            </div>
            <div className="collection-list-wrapper-integration">
              <div className="collection-list-integration" role="list">
                {integrations.map((item) => (
                  <IntegrationCard key={item.slug} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
