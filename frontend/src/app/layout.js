import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// TODO: once you have a final domain, add `metadataBase: new URL("https://your-domain")`
// and an `openGraph.images` / `twitter.images` entry (e.g. a 1200x630 og.png in /public)
// for rich social link previews.
export const metadata = {
  title: {
    default: "Mayank Gupta — Full-Stack Developer",
    template: "%s · Mayank Gupta",
  },
  description:
    "Mayank Gupta — full-stack developer specializing in the MERN stack and Next.js. I build fast, accessible dashboards, SaaS platforms, and web apps.",
  keywords: [
    "Mayank Gupta",
    "Full-Stack Developer",
    "MERN Stack",
    "Next.js",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Mayank Gupta", url: "https://github.com/Mayankgupta-22" }],
  creator: "Mayank Gupta",
  openGraph: {
    type: "website",
    siteName: "Mayank Gupta",
    title: "Mayank Gupta — Full-Stack Developer",
    description:
      "Full-stack developer (MERN / Next.js) building fast, accessible web apps.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayank Gupta — Full-Stack Developer",
    description:
      "Full-stack developer (MERN / Next.js) building fast, accessible web apps.",
  },
};

// Applied before paint to avoid a flash of the wrong theme on load.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}if(t==='dark'){document.documentElement.classList.add('dark');}}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
