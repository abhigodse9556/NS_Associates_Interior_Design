import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://nsassociates.co"),
  title: {
    default: "NS Associates | Interior Design",
    template: "%s | NS Associates",
  },
  description:
    "NS Associates is an interior design practice creating refined residential, commercial, and hospitality spaces.",
  openGraph: {
    title: "NS Associates | Interior Design",
    description:
      "Refined interior design for homes, hospitality, and workspaces.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/logo/favicon-refine.png" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
