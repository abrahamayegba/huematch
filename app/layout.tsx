import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Huematch",
  description:
    "A go-to tool for effortless color conversion in Tailwind CSS. Convert standard color codes to their Tailwind equivalents, translate Tailwind color classes to HEX, RGB, HSL, and more. Streamline your Tailwind development process with Huematch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
