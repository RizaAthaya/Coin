import type { Metadata } from "next";
import "./globals.css";
import { inter, poppins } from "./fonts";
import Navbar from "@/components/shared/navbar";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Coinvestasi",
  description: "Aset masa kini, kaya masa depan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={`${poppins.variable} ${inter.variable}`}>
        {/* NAVBAR  */}
        <Navbar />

        {/* CONTENT  */}
        <div className="lg:pt-20">{children}</div>
      </body>
    </html>
  );
}
