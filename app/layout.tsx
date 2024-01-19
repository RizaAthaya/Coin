import type { Metadata } from "next";
import "./globals.css";
import { inter, poppins } from "./fonts";

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
      <body className={`${poppins.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
