import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Simple Dashboard",
  description: "Created by Rafael Marques de Oliveira",
  icons: {
    icon: "/icons8-conexão-ótima-24.png", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // RootLayout.tsx
    <html lang="en" className="w-full h-full">
      <body className="w-full h-full">
        <SidebarProvider>
          <AppSidebar />
          <main className="w-full h-full">
            <SidebarTrigger />
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
