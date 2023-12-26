"use client";
import { CommandMenu } from "@/components/command-menu";
import { Theme } from "@/components/theme";
import { Notifications } from "./notifications";

export function Header() {
  return (
    <header className="w-full rounded-md relative h-14 border flex items-center justify-between px-4 py-2 z-20">
      <div>
        <h2 className="font-semibold">Bienvenidos</h2>
      </div>
      <div className="flex gap-4">
        <div className="w-full flex-1 md:w-auto md:flex-none">
          <CommandMenu />
        </div>
        <Notifications />
        <Theme />
      </div>
    </header>
  );
}
