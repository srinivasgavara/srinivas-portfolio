import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Satya Srinivas G | Portfolio",
  description:
    "Portfolio of Satya Srinivas G - Aspiring Software Engineer skilled in Python, SQL, AI & Data Science.",

  icons: {
    icon: "/profile.jpg",
  },
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