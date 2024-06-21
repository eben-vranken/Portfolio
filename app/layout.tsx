import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/UI/Navbar";
import Footer from "@/components/UI/Footer";

const inconsolata = Inconsolata({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eben Vranken",
  description: "Eben Vranken - Front-end Web Developer. Explore my portfolio showcasing expertise in creating responsive, user-friendly websites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inconsolata.className} flex justify-center text-white bg-bg w-full`}>

        {/* Wrapper */}
        <section className="p-5 min-h-screen overflow-hidden w-10/12 max-lg:w-11/12 relative flex flex-col justify-between">
          <Navbar />

          {children}

          <Footer />
        </section>
      </body>
    </html>
  );
}
