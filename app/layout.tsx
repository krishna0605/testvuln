import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import QueryProvider from "@/components/QueryProvider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: "VulnScanner",
  description: "Illuminate Your Web Security",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body className={`${spaceGrotesk.variable} bg-background-dark font-display text-body-text`}>
        <QueryProvider>
          <div className="relative flex min-h-screen w-full flex-col">
            <main className="w-full grow">{children}</main>
            <Footer />
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
