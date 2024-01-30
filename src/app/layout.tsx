import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "devanagari"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Votaciones Escolares",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.variable}>
        <Providers attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
