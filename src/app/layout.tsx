import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Easy Contract",
  description: "Tạo hợp đồng, hóa đơn nhanh chóng, đơn giản",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <Header />
        <div className="pt-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
