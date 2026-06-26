import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "M LINE | 나무로 짓는 꿈, 시간이 머무는 집",
  description: "나무로 짓는 꿈, 시간이 머무는 집. M LINE",
  verification: {
    google: "iUEU3e3jBgJj3boOmKw6GdvD7nNK16uOVnwk785ke40",
  },
  openGraph: {
    title: "M LINE | 나무로 짓는 꿈, 시간이 머무는 집",
    description: "나무로 짓는 꿈, 시간이 머무는 집. M LINE",
    url: "https://house-blog.vercel.app",
    siteName: "M LINE",
    images: [
      {
        url: "https://house-blog.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "M LINE 목조주택",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "M LINE | 나무로 짓는 꿈, 시간이 머무는 집",
    description: "나무로 짓는 꿈, 시간이 머무는 집. M LINE",
    images: ["https://house-blog.vercel.app/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${inter.variable} ${playfair.variable} scroll-smooth antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-background font-body-md text-body-md overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
