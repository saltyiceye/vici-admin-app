"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { createElement } from "react";
import {
  useCanAccess,
  useCreatePath,
  useGetResourceLabel,
  useResourceDefinitions,
  usePermissions,
} from "ra-core";
import { Link, useMatch } from "react-router";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

import { Skeleton } from "@/components/ui/skeleton";
import { List, Send, TabletSmartphone } from "lucide-react";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const resources = useResourceDefinitions();
  const { openMobile, setOpenMobile } = useSidebar();
  const handleClick = () => {
    if (openMobile) {
      setOpenMobile(false);
    }
  };

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <TabletSmartphone className="!size-5" />
                <span className="text-base font-semibold">VICISMS</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
            <SendSmsMenuItem key="send_sms" onClick={handleClick} />
              {Object.keys(resources)
                .filter((name) => resources[name].hasList)
                .map((name) => (
                  <ResourceMenuItem
                    key={name}
                    name={name}
                    onClick={handleClick}
                  />
                ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {/* <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
      </SidebarContent>
      <SidebarFooter>
        {/* <NavUser user={data.user} /> */}
      </SidebarFooter>
    </Sidebar>
  )
}


export const SendSmsMenuItem = ({
  onClick,
}: {
  onClick?: () => void;
}) => {

  const to = '/send_sms';
  const match = useMatch({ path: to, end: false });
  const { canAccess, isPending } = useCanAccess({
    resource: "send_sms",
    action: "create",
  });

  if (isPending) {
    return <Skeleton className="h-8 w-full" />;
  }

  if (!canAccess) return null;

  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild isActive={!!match}
        // className="bg-primary text-primary-foreground"
        className={cn(
          // 基础过渡效果
          "transition-colors duration-200",
          // 激活状态 - 使用 shadcn/ui 的数据属性
          "data-[active=true]:bg-primary data-[active=true]:text-primary-foreground",
          // 悬停状态
          "hover:bg-accent hover:text-accent-foreground",
          // 如果还需要自定义覆盖
          match && "bg-primary text-primary-foreground"
        )}
      >
        <Link to={to} state={{ _scrollToTop: true }} onClick={onClick}>
          <Send />
          Send SMS
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

export const ResourceMenuItem = ({
  name,
  onClick,
}: {
  name: string;
  onClick?: () => void;
}) => {
  const { canAccess, isPending } = useCanAccess({
    resource: name,
    action: "list",
  });
  const resources = useResourceDefinitions();
  const getResourceLabel = useGetResourceLabel();
  const createPath = useCreatePath();
  const to = createPath({
    resource: name,
    type: "list",
  });
  const match = useMatch({ path: to, end: false });

  if (isPending) {
    return <Skeleton className="h-8 w-full" />;
  }

  if (!resources || !resources[name] || !canAccess) return null;

  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild isActive={!!match}
        // className="bg-primary text-primary-foreground"
        className={cn(
          // 基础过渡效果
          "transition-colors duration-200",
          // 激活状态 - 使用 shadcn/ui 的数据属性
          "data-[active=true]:bg-primary data-[active=true]:text-primary-foreground",
          // 悬停状态
          "hover:bg-accent hover:text-accent-foreground",
          // 如果还需要自定义覆盖
          match && "bg-primary text-primary-foreground"
        )}
      >
        <Link to={to} state={{ _scrollToTop: true }} onClick={onClick}>
          {resources[name].icon ? (
            createElement(resources[name].icon)
          ) : (
            <List />
          )}
          {getResourceLabel(name, 2)}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};