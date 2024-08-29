import type { Metadata } from "next";
import { Recursive } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "../components/componentsIndex";
import { Toaster } from "@/components/ui/toaster";
import Providers from "@/components/Providers";

const recursive = Recursive({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SnakeCase",
  description:
    "SnakeCase allows you to protect your memories, not just your phone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={recursive.className}>
        <Navbar />

        <main className="flex grainy-light flex-col h-[calc(100vh-3.5rem-1px)]">
          <div className="flex flex-col flex-1">
            <Providers>{children}</Providers>
          </div>
          <Footer />
        </main>

        <Toaster />
      </body>
    </html>
  );
}
