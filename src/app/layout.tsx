import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/content/narrative";
import { getBaseUrl } from "@/lib/seoBaseUrl";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = getBaseUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${profile.fullName} - ${profile.role}`,
  description:
    "Portfolio full-stack JS Toulouse & Montauban : projets livrés et méthode de travail.",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${profile.fullName} - ${profile.role}`,
    description:
      "Portfolio full-stack JS Toulouse & Montauban : projets livrés et méthode de travail.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Portfolio de Jeffrey Basset",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: `${profile.fullName} - ${profile.role}`,
    description:
      "Portfolio full-stack JS Toulouse & Montauban : projets livrés et méthode de travail.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-zinc-950 text-neutral-100 antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: profile.fullName,
              jobTitle: profile.role,
              url: siteUrl,
              sameAs: profile.sameAs,
              knowsAbout: profile.keywords,
            }),
          }}
        />
        <main className="min-h-screen">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
