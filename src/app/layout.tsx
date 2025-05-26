import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rabba",
  description: "Pay for all your utilities with Rabba.",
  icons: {
    icon: "/icons/rabba.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
