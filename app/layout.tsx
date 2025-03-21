import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Black Screen",
  description: "Enter Blackscreennow.space and feel the ultimate charm of black screen.",
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
