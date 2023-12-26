"use client";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface NavProps {
  isCollapsed: boolean;
  links: {
    title: string;
    icon: LucideIcon;
    href: string;
  }[];
}

export function Nav({ links, isCollapsed }: NavProps) {
  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
    >
      <nav className="grid gap-2 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {links.map((link, index) =>
          isCollapsed ? (
            <Tooltip key={index} delayDuration={0}>
              <TooltipTrigger asChild>
                <Link
                  href={`/dashboard${link.href}`}
                  className={buttonVariants({ variant: "ghost" })}
                >
                  <link.icon className="h-6 w-6" />
                  <span className="sr-only">{link.title}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="flex items-center gap-4">
                {link.title}
              </TooltipContent>
            </Tooltip>
          ) : (
            <Link
              key={index}
              href={`/dashboard${link.href}`}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "justify-start opacity-70 hover:opacity-100 transition-opacity ease-out duration-200"
              )}
            >
              <link.icon className="mr-4 h-6 w-6" />
              {link.title}
            </Link>
          )
        )}
      </nav>
    </div>
  );
}
