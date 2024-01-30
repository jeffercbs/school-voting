"use client";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Theme } from "./theme";

export const Header = () => {
  return (
    <header className="w-full h-20 px-6 py-1 fixed bg-gradient-to-t to-background from-transparent z-20">
      <div className="flex justify-between items-center w-full h-full">
        <div>
          <Link href="/" className="font-mono text-2xl capitalize">
            Votaciones escolares
          </Link>
        </div>
        <div className="flex gap-4">
          <Theme />
          <Link href="/signin" className={buttonVariants()}>
            Iniciar sesion
          </Link>
        </div>
      </div>
    </header>
  );
};
