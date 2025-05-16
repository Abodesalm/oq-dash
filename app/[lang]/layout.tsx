import "@/public/css/globals.css";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import ToUp from "@/components/layout/ToUp";
import Providers from "./Providers";
import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { ToastContainer } from "react-toastify";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export const metadata: Metadata = {
  title: "Q dashboard",
  description: "Q dashboard",
};

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lang = await getLocale();
  return (
    <html
      lang={lang}
      dir={lang === "ar" ? "rtl" : "ltr"}
      style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
      suppressHydrationWarning
    >
      <body>
        <Providers>
          <SidebarProvider>
            <AppSidebar variant="inset" />
            {children}
            <ToUp />
          </SidebarProvider>
        </Providers>
        <ToastContainer />
      </body>
    </html>
  );
}
