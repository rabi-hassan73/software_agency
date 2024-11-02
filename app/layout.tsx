import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bird | Design & Development Studio",
  description: "Grow your business with Bird, a design & development studio that specializes in web design, SEO, and cloud services.",
  keywords: "web design, SEO, cloud services, microservices, modern applications",
  openGraph: {
    title: "Bird | Design & Development Studio",
    description: "Grow your business with Bird, a design & development studio that specializes in web design, SEO, and cloud services.",
    // url: "https://yourwebsite.com", // Update with your URL
    siteName: "Bird Studio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    // site: "@yourtwitterhandle", // Update with your Twitter handle
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
