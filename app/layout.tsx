import type { Metadata } from "next";
import { Nabla, Luckiest_Guy } from "next/font/google";
import "./globals.css";

const nablaFont = Nabla({ subsets: ["latin"], variable: "--font-nabla" });

const luckiestGuyFont = Luckiest_Guy({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-luckiestGuy",
});

export const metadata: Metadata = {
  title: "Card Flip Game",
  description:
    "Put your memory to the test in this thrilling card flip game—match pairs and beat the clock!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${luckiestGuyFont.variable} ${nablaFont.variable} font-primary`}
      >
        {children}
      </body>
    </html>
  );
}
