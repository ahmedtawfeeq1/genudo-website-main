import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-jb",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://genudo.ai"),
  title: {
    default: "GenuDo — Build AI employees that move work forward",
    template: "%s · GenuDo",
  },
  description:
    "Give every AI employee the knowledge, channels and tools it needs to work with clients and stakeholders — from first message to completed outcome. Humans stay in control.",
  openGraph: {
    title: "GenuDo — Build AI employees that move work forward",
    description:
      "Knowledge, channels and tools for AI employees that take action and move opportunities through a pipeline.",
    type: "website",
    siteName: "GenuDo",
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/brand/genudo-icon.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body>
        <Nav />
        <main id="top">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
