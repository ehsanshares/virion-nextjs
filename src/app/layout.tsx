import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { VirionScripts } from "@/components/virion-scripts";

export const metadata: Metadata = {
  title: {
    default: "Virion - SaaS Startup Template",
    template: "%s - Virion",
  },
  description:
    "Virion – a futuristic and clean template crafted for SaaS startups, AI tools, and tech-driven businesses.",
  icons: {
    icon: "/assets/images/favicon.png",
    apple: "/assets/images/webclip.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="js">
      <head>
        <link href="/assets/fonts/fonts.css" rel="stylesheet" />
        <link href="/assets/css/styles.css" rel="stylesheet" />
      </head>
      <body>
        <div className="page-wrapper">
          <div className="main-wrapper">
            <img
              alt="Ellipse Icon"
              className="ellipse-icon _01"
              loading="lazy"
              src="/assets/images/Ellipse-Icon.webp"
            />
            <Header />
            {children}
            <Footer />
          </div>
        </div>
        <VirionScripts />
      </body>
    </html>
  );
}
