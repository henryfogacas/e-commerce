import type { Metadata } from "next";
import clsx from "clsx";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import { ptBR } from "@clerk/localizations";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Commerce",
  description: "E-Commerce com Nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={ptBR}>
      <html lang="en">
        <body className={clsx(inter.className, "bg-slate-700")}>
          <Navbar />
          <main className="h-screen p-16">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
