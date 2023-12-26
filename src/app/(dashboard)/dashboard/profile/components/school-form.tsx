"use client";
import { Input, Label } from "@/components/ui";

export const StudentForm = () => {
  return (
    <form action="" className="block min-h-screen">
      {[
        {
          id: "colegio",
          name: "colegio",
          label: "Colegio",
          type: "text",
          placeholder: "nombre del colegio",
        },
      ].map((input) => (
        <div key={input.id} className="flex flex-col">
          <Label htmlFor={input.name} className="capitalize text-base">
            {input.label}
          </Label>
          <Input {...input} />
        </div>
      ))}
    </form>
  );
};
