import type { Metadata } from "next";

import "./globals.css";
import { Navbar } from "../components/componentsIndex";

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
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
