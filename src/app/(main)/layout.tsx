import type { Metadata } from "next";
import '@/app/globals.css'
import TopHeader from "@/components/top-header";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Ruby Travel",
  description: "",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>
        <TopHeader />
        <Header />
        {children}
      </body>
    </html>
  );
}
