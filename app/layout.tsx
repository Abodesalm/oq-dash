import "@/public/css/globals.css";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import ToUp from "@/components/layout/ToUp";
import Providers from "./Providers";
import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Q dashboard",
  description: "Q dashboard",
};

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={`en`} suppressHydrationWarning>
      <body>
        <Providers>
          <SidebarProvider>
            <AppSidebar variant="inset" />
            <SidebarInset>
              <SiteHeader />
              {children}
            </SidebarInset>
            <ToUp />
          </SidebarProvider>
        </Providers>
        <ToastContainer />
      </body>
    </html>
  );
}
