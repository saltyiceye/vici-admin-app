
import { Suspense, useState, type ErrorInfo, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { CoreLayoutProps } from "ra-core";
import { ErrorBoundary } from "react-error-boundary";
// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { UserMenu } from "@/components/admin/user-menu";
import { ThemeModeToggle } from "@/components/admin/theme-mode-toggle";
import { Notification } from "@/components/admin/notification";
// import { AppSidebar } from "@/components/admin/app-sidebar";
import { RefreshButton } from "@/components/admin/refresh-button";
import { LocalesMenuButton } from "@/components/admin/locales-menu-button";
import { Error } from "@/components/admin/error";
import { Loading } from "@/components/admin/loading";
import { Separator } from "@/components/ui/separator"


import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger
} from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/layout/app-sidebar"

export const ViciLayout = (props: { children: ReactNode }) => {
  const [errorInfo, setErrorInfo] = useState<ErrorInfo | undefined>(undefined);
  const handleError = (_: Error, info: ErrorInfo) => {
    setErrorInfo(info);
  };
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 62)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
      <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
            <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
                <SidebarTrigger className="-ml-1" />
                <Separator
                    orientation="vertical"
                    className="mx-2 data-[orientation=vertical]:h-4"
                />

                <div className="flex-1 flex items-center" id="breadcrumb" />
                <LocalesMenuButton />
                <ThemeModeToggle />
                <RefreshButton />
                <UserMenu />
            </div>
        </header>

        {/* <SectionCards />
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              <DataTable data={data} /> */}
        <ErrorBoundary
          onError={handleError}
          fallbackRender={({ error, resetErrorBoundary }) => (
            <Error
              error={error}
              errorInfo={errorInfo}
              resetErrorBoundary={resetErrorBoundary}
            />
          )}
        >
          <Suspense fallback={<Loading />}>
            <div className="flex flex-1 flex-col">
              <div className="@container/main flex flex-1 flex-col gap-2">
                <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                  <div className="flex flex-1 flex-col px-4 ">{props.children}</div>
                </div>
              </div>
            </div>
          </Suspense>
        </ErrorBoundary>

      </SidebarInset>
      <Notification />
    </SidebarProvider>
    // <SidebarProvider>
    //   <AppSidebar />
    //   <main
    //     className={cn(
    //       "ml-auto w-full max-w-full",
    //       "peer-data-[state=collapsed]:w-[calc(100%-var(--sidebar-width-icon)-1rem)]",
    //       "peer-data-[state=expanded]:w-[calc(100%-var(--sidebar-width))]",
    //       "sm:transition-[width] sm:duration-200 sm:ease-linear",
    //       "flex h-svh flex-col",
    //       "group-data-[scroll-locked=1]/body:h-full",
    //       "has-[main.fixed-main]:group-data-[scroll-locked=1]/body:h-svh",
    //     )}
    //   >
    //     <header className="flex h-16 md:h-12 shrink-0 items-center gap-2 px-4">
    //       <SidebarTrigger className="scale-125 sm:scale-100" />
    //       <div className="flex-1 flex items-center" id="breadcrumb" />
    //       <LocalesMenuButton />
    //       <ThemeModeToggle />
    //       <RefreshButton />
    //       <UserMenu />
    //     </header>

    //   </main>
    //   <Notification />
    // </SidebarProvider>
  );
};
