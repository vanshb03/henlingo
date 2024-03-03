import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Henlingo",
  description: "ASL is easier than reading this!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
