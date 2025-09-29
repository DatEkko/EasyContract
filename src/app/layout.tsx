import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import NextAuthWrapper from "@/library/NextAuthWrapper";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Easy Contract",
  description: "Tạo hợp đồng, hóa đơn nhanh chóng, đơn giản",
};

const roboto = localFont({
  src: [
    { path: "../fonts/Roboto/Roboto-Light.ttf", weight: "300", style: "normal" },
    { path: "../fonts/Roboto/Roboto-Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/Roboto/Roboto-Medium.ttf", weight: "500", style: "normal" },
    { path: "../fonts/Roboto/Roboto-Bold.ttf", weight: "700", style: "normal" },
    { path: "../fonts/Roboto/Roboto-Black.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <body
      >
        <NextAuthWrapper>
          <Header />
          <div className="pt-20">{children}</div>
          <Footer />
        </NextAuthWrapper>
      </body>
    </html>
  );
}
