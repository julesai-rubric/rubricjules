import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rubric",
  description: "Digital Product Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="p-4 border-b">
          <nav className="max-w-4xl mx-auto flex justify-between items-center">
            <Link href="/" className="font-bold text-xl">
              Rubric
            </Link>
            <div className="space-x-4">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <Link href="/about" className="hover:underline">
                About
              </Link>
              <Link href="/work" className="hover:underline">
                Work
              </Link>
              <Link href="/careers" className="hover:underline">
                Careers
              </Link>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </div>
          </nav>
        </header>
        <main className="max-w-4xl mx-auto p-4">{children}</main>
        <footer className="p-4 border-t text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Rubric. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
