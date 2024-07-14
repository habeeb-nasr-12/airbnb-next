import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "airbnb",
  description: "airbnb services ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <Navbar />
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
