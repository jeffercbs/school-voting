"use client";
import { authenticate } from "@/app/actions";
import { Button, Input, Label } from "@/components/ui";
import { useFormState, useFormStatus } from "react-dom";

export const Form = () => {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  const { pending } = useFormStatus();

  return (
    <form action={dispatch} className="block">
      {errorMessage && (
        <p
          aria-live="polite"
          aria-atomic="true"
          className="text-center text-red-600 bg-red-100 py-1 mb-4"
        >
          {errorMessage}
        </p>
      )}
      <div className="flex flex-col pb-6 gap-y-3">
        <Label className="sr-only" htmlFor="username">
          username
        </Label>
        <Input
          id="username"
          name="username"
          placeholder="juanc"
          type="text"
          autoCapitalize="none"
          autoComplete="username"
          autoCorrect="off"
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
        />
      </div>
      <Button aria-disabled={pending} className="w-full">
        Iniciar sesion
      </Button>
    </form>
  );
};
