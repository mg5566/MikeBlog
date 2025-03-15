import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "components/nav";
import Footer from "components/footer";
import { baseUrl } from "./sitemap";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  verification: {
    // <meta name="google-site-verification" content="OOL_H_8lqQA0ZLQYwiJXRTLSThla9oCOr40zDdeHFnM" />
    google: "OOL_H_8lqQA0ZLQYwiJXRTLSThla9oCOr40zDdeHFnM",
  },
  title: {
    default: "그저 그렇지만은 않은 개발자",
    template: "%s | 그저 그렇지만은 않은 개발자",
  },
  description:
    "그저 그렇지도 못한 개발자에서 그저 그런 개발자로, 그저 그런 개발자에서 그저 그렇지만은 않은 개발자가 되기 위해 노력하는 개발자의 블로그.",
  // "Started as a not-so-great developer, became an okay one, and now pushing to be anything but ordinary.",
  openGraph: {
    title: "그저 그렇지만은 않은 개발자",
    description:
      "그저 그렇지도 못한 개발자에서 그저 그런 개발자로, 그저 그런 개발자에서 그저 그렇지만은 않은 개발자가 되기 위해 노력하는 개발자의 블로그입니다.",
    // "Started as a not-so-great developer, became an okay one, and now pushing to be anything but ordinary.",
    url: baseUrl,
    siteName: "그저 그렇지만은 않은 개발자",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og_image.png",
        width: 800,
        height: 600,
        alt: "그저 그렇지만은 않은 개발자 블로그 대표 이미지",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og_image.png"],
  },
  icons: {
    icon: "/og_image.png",
    apple: "/og_image.png",
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cx(GeistSans.variable, GeistMono.variable)}
    >
      <body className="antialiased max-w-xl mx-4 mt-8 sm:mx-auto text-black bg-white dark:text-white dark:bg-black">
        <ThemeProvider attribute="class" defaultTheme="light">
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
            <Navbar />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
