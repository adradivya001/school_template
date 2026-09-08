import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { TemplateProvider } from "@/context/TemplateContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const metadata: Metadata = {
  title: "School Template Builder",
  description: "A highly customizable school template.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${jakarta.variable} ${inter.variable}`}>
      <body className={`${jakarta.className} antialiased`}>
        <TemplateProvider>
          {children}
        </TemplateProvider>
      </body>
    </html>
  );
}
