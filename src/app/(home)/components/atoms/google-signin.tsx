"use client";
import { Button } from "@/components/ui";
import { signIn } from "next-auth/react";

export const GoogleSignin = () => {
  return (
    <>
      <Button variant="outline" onClick={() => signIn("google")}>
        Iniciar sesion con Google
      </Button>
      <Button variant="outline" onClick={() => signIn("github")}>
        Iniciar sesion con Github
      </Button>
    </>
  );
};
