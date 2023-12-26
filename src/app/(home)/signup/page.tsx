"use client";
import { Input, Label } from "@/components/ui";
import { useState } from "react";
import { Form } from "../components/form";

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 overflow-hidden max-h-screen">
      <div className="flex items-end p-3 bg-zinc-900">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, modi.
        </p>
      </div>
      <Form
        title="Crear cuenta"
        description="Ingrese su usuario y contraseña para iniciar sesion"
        btn="Iniciar sesion"
      >
        {[
          {
            id: "school",
            name: "school",
            placeholder: "Nombre del colegio",
            type: "text",
            autoCapitalize: "off",
            autoComplete: "school",
          },
          {
            id: "name",
            name: "name",
            placeholder: "Nombre completo",
            type: "text",
            autoCapitalize: "off",
            autoComplete: "name",
            autoCorrect: "off",
          },
          {
            id: "dni",
            name: "dni",
            placeholder: "Cedula de identidad",
            type: "number",
            autoCapitalize: "none",
            autoComplete: "dni",
            autoCorrect: "off",
          },
          {
            id: "username",
            name: "user",
            placeholder: "username",
            type: "text",
            autoCapitalize: "none",
            autoComplete: "username",
            autoCorrect: "off",
          },
          {
            id: "password",
            name: "password",
            placeholder: "*******",
            type: "password",
            autoComplete: "password",
          },
        ].map((input) => (
          <div key={input.id}>
            <Label className="sr-only" htmlFor={input.name}>
              {input.name}
            </Label>
            <Input {...input} disabled={isLoading} />
          </div>
        ))}
      </Form>
    </div>
  );
}
