import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "../components/componentsIndex";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Navbar />

        <main className="flex flex-col h-[calc(100vh-3.5rem-1px)]">
          <div className="flex flex-col flex-1">{children}</div>
          <Footer />
        </main>

        <Toaster />
      </body>
    </html>
  );
}
