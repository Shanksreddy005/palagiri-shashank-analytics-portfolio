import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Palagiri Shashank Reddy | Senior Data & Business Analyst Portfolio",
  description: "Portfolio of Palagiri Shashank Reddy. Specializing in SQL, Python, Tableau, and statistical profiling to build data-driven analytics solutions that solve real business problems.",
  keywords: [
    "Data Analyst",
    "Business Analyst",
    "Product Analyst",
    "Founder's Office",
    "Analytics",
    "SQL",
    "Python",
    "Tableau",
    "Portfolio",
  ],
  authors: [{ name: "Palagiri Shashank Reddy" }],
  openGraph: {
    title: "Palagiri Shashank Reddy | Senior Data & Business Analyst Portfolio",
    description: "Transforming Data Into Actionable Business Insights. Explore analytics case studies, production dashboards, and strategic business recommendations.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Palagiri Shashank Reddy | Analytics Portfolio",
    description: "Transforming Data Into Actionable Business Insights.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-apple-white text-apple-graphite antialiased`}>
        {children}
      </body>
    </html>
  );
}
