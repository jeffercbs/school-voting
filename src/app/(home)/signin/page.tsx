"use client";
import { authenticate } from "@/app/actions";
import { Button, Input, Label } from "@/components/ui";
import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { FormContainer } from "../components/form-container";

export default function SigninPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, dispath] = useFormState(authenticate, undefined);
  const { pending } = useFormStatus();

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 overflow-y-auto">
      <div className="flex items-end p-3 bg-zinc-900">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, modi.
        </p>
      </div>

      <FormContainer
        title="Iniciar sesión"
        description="Ingrese su usuario y contraseña para iniciar sesion"
      >
        <form action={dispath} className="block">
          <div className="flex flex-col pb-6 gap-y-3">
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
          </div>
          <Button
            type="submit"
            aria-disabled={pending}
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Ingresar"}
          </Button>
        </form>
      </FormContainer>
    </div>
  );
}
