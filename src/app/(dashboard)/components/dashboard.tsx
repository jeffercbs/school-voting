"use client";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
  TooltipProvider,
} from "@/components/ui";
import { useState } from "react";
import { Header } from "./header";
import { Sidebar } from "./sidebar";
import { cn } from "@/lib/utils";

interface DashboardProps {
  children: React.ReactNode;
  defaultCollapsed?: boolean;
}

export const Dashboard = ({
  children,
  defaultCollapsed = false,
}: DashboardProps) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(defaultCollapsed);

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        className="h-full items-stretch"
      >
        <ResizablePanel
          defaultSize={20}
          collapsedSize={4}
          collapsible={true}
          minSize={15}
          maxSize={20}
          className={cn(
            isCollapsed &&
              "min-w-[50px] transition-all duration-300 ease-in-out"
          )}
          onResize={(size) =>
            size === 4 ? setIsCollapsed(true) : setIsCollapsed(false)
          }
          onCollapse={() =>
            (document.cookie = `resizable-panels:collapsed=${JSON.stringify(
              isCollapsed
            )}`)
          }
        >
          <Sidebar collapsed={isCollapsed} />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={80}>
          <div className="w-full h-screen overflow-y-scroll py-2 px-5 block">
            <Header />
            {children}
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  );
};
