import Header from "@/components/Header";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Evelan Test",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="text-black container sm:px-0 px-4 mx-auto">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
