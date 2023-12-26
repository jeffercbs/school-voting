"use client";
import { Input, Label } from "@/components/ui";
import { useState } from "react";
import { Form } from "../components/form";

export default function SigninPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 overflow-y-auto">
      <div className="flex items-end p-3 bg-zinc-900">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, modi.
        </p>
      </div>
      <Form
        title="Iniciar sesión"
        description="Ingrese su usuario y contraseña para iniciar sesion"
        btn="Crear cuenta"
      >
        <Label className="sr-only" htmlFor="user">
          User
        </Label>
        <Input
          id="user"
          name="user"
          placeholder="juanc"
          type="text"
          autoCapitalize="none"
          autoComplete="user"
          autoCorrect="off"
          disabled={isLoading}
        />
        <Label className="sr-only" htmlFor="password">
          Password
        </Label>
        <Input
          id="password"
          name="password"
          placeholder="*******"
          type="password"
          autoComplete="password"
          disabled={isLoading}
        />
      </Form>
    </div>
  );
}
