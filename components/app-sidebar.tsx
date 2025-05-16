"use client";

import * as React from "react";
import {
  ArrowUpCircleIcon,
  BarChartIcon,
  CameraIcon,
  ClipboardListIcon,
  CreditCard,
  CreditCardIcon,
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
import { IoCardOutline } from "react-icons/io5";
import {
  PiCardsFill,
  PiFilesFill,
  PiUsersFill,
  PiVaultFill,
} from "react-icons/pi";
import { RiBankCardFill } from "react-icons/ri";

const data = {
  user: {
    name: "عبدالرحمن السالم",
    email: "abodesalm45@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "main",
      url: "/",
      icon: LayoutDashboardIcon,
    },
    {
      title: "Users",
      url: "/users",
      icon: UsersIcon,
    },
    {
      title: "Codes",
      url: "/codes",
      icon: CreditCardIcon,
    },
    {
      title: "Tests",
      url: "/tests",
      icon: FileIcon,
    },
  ],

  navData: [
    {
      title: "Users Table",
      url: "/users-data",
      icon: PiUsersFill,
    },
    {
      title: "Codes Table",
      url: "/codes-data",
      icon: PiCardsFill,
    },
    {
      title: "Tests Table",
      url: "/tests-data",
      icon: PiFilesFill,
    },
    {
      title: "Banks Table",
      url: "/banks-data",
      icon: PiVaultFill,
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "/settings",
      icon: SettingsIcon,
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
