import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "guyasong",
  description: "portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-[100vh] bg-blue-400">
      <body className={inter.className}>
        <Navbar />
        <main className="md:pt-40 pt-10">
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
