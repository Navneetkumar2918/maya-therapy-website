import type { Metadata } from "next";
import { Montserrat, Karla } from "next/font/google";
import "./globals.css";

const headingFont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-heading",
  display: "swap",
});

const bodyFont = Karla({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Therapy for Adults in Santa Monica, CA",
  description:
    "Anxiety, trauma, and burnout therapy in Santa Monica and across California.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable}`}
    >
      <body className="antialiased bg-[#FAF9F6] text-[#2F4A2F]">
        {children}
      </body>
    </html>
  );
}