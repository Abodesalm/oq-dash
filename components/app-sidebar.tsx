"use client";

import * as React from "react";
import {
  ArrowUpCircleIcon,
  BarChartIcon,
  CameraIcon,
  ClipboardListIcon,
  DatabaseIcon,
  FileCodeIcon,
  FileIcon,
  FileTextIcon,
  FolderIcon,
  HelpCircleIcon,
  LayoutDashboardIcon,
  ListIcon,
  SearchIcon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react";

import { NavDocuments } from "@/components/nav-documents";
import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "عبدالرحمن السالم",
    email: "abodesalm45@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "main",
      url: "#",
      icon: LayoutDashboardIcon,
    },
    {
      title: "Users",
      url: "#",
      icon: UsersIcon,
    },
    {
      title: "Codes",
      url: "#",
      icon: BarChartIcon,
    },
    {
      title: "Tests",
      url: "#",
      icon: FolderIcon,
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: SettingsIcon,
    },
  ],
  navData: [
    {
      title: "Users Table",
      url: "#",
      icon: DatabaseIcon,
    },
    {
      title: "Codes Table",
      url: "#",
      icon: DatabaseIcon,
    },
    {
      title: "Tests Table",
      url: "#",
      icon: DatabaseIcon,
    },
    {
      title: "Banks Table",
      url: "#",
      icon: DatabaseIcon,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <p className="flex flex-row gap-4 items-center">
              <ArrowUpCircleIcon className="h-5 w-5" />
              <span className="text-base font-semibold">OQ maker</span>
            </p>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain label={`Dashboards`} items={data.navMain} />
        <NavMain label={`Data`} items={data.navData} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
