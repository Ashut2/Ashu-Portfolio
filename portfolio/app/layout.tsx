import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Ashutosh Shukla | DevOps Learner & CS Student",
  description: "DevOps Learner | CS Engineering Student | Content Creator. Building foundational skills in Linux, Docker, Git, and AWS while sharing knowledge.",
  keywords: ["DevOps", "Linux", "Docker", "AWS", "Git", "CI/CD", "Portfolio", "Ashutosh Shukla"],
  authors: [{ name: "Ashutosh Shukla" }],
  openGraph: {
    title: "Ashutosh Shukla | DevOps Learner & CS Student",
    description: "DevOps Learner | CS Engineering Student | Content Creator",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashutosh Shukla | DevOps Learner & CS Student",
    description: "DevOps Learner | CS Engineering Student | Content Creator",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${inter.variable} font-body antialiased bg-terminal-bg text-terminal-text`}
      >
        {children}
      </body>
    </html>
  );
}
