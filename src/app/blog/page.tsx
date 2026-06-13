import type { Metadata } from "next";
import { getBlogPosts, type BlogFrontmatter } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Your trusted resource for improving accuracy, efficiency, and productivity through expert tips, latest tools, and practical strategies.",
};

function BlogCard({ post }: { post: BlogFrontmatter }) {
  return (
    <div role="listitem">
      <a className="blog-card-link" href={`/blog/${post.slug}`}>
        <div className="overflow-hidden overflow-item">
          <img alt={post.title} className="blog-image" loading="lazy" src={post.mainImage} />
        </div>
        <div className="blog-card-detail">
          <div className="short-detail blog">
            <div className="publish-date">{post.date}</div>
            <div className="blog-item-dot"></div>
            <div className="publish-date">{post.readTime}</div>
          </div>
          <div className="blog-item-name">{post.title}</div>
        </div>
      </a>
    </div>
  );
}

function Pane({ tab, posts }: { tab: string; posts: BlogFrontmatter[] }) {
  return (
    <div className="blog-tab-pane" data-tab={tab}>
      <div>
        <div className="collection-list-blogs" role="list">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function BlogPage() {
  const posts = getBlogPosts();
  const byCategory = (c: string) => posts.filter((p) => p.category === c);

  return (
    <>
      <section className="blog-hero-section">
        <div className="container large-container">
          <div className="wrapper blog-hero-wrapper">
            <div className="hero-top-contents">
              <h1 className="hero-title blog-hero-title reveal">
                Behind the Screens: Life in Data Entry
              </h1>
              <p className="hero-para reveal">
                Your trusted resource for improving accuracy, efficiency, and productivity in
                data entry tasks through expert tips, latest tools, and practical strategies.
              </p>
            </div>
            <div className="blog-tabs">
              <div className="blog-tabs-menu reveal">
                <a className="blog-tab-link" data-tab="Tab 1"><div>All</div></a>
                <a className="blog-tab-link" data-tab="Tab 2"><div>Interaction</div></a>
                <a className="blog-tab-link" data-tab="Tab 3"><div>Collaboration</div></a>
                <a className="blog-tab-link" data-tab="Tab 4"><div>Case Studies</div></a>
              </div>
              <div className="blog-tabs-content reveal">
                <Pane tab="Tab 1" posts={posts} />
                <Pane tab="Tab 2" posts={byCategory("Interaction")} />
                <Pane tab="Tab 3" posts={byCategory("Collaboration")} />
                <Pane tab="Tab 4" posts={byCategory("Case Studies")} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
