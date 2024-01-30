import Link from "next/link";
import { Form } from "../components/atoms/form";
import { GoogleSignin } from "../components/atoms/google-signin";

export default function SigninPage() {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 overflow-y-auto">
      <div className="flex items-end p-3 dark:bg-zinc-900 bg-gray-100">
        <small>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, modi.
        </small>
      </div>

      <div className="grid place-content-center overflow-y-scroll h-screen max-h-screen pt-12">
        <div className="flex flex-col justify-center space-y-6 sm:w-[350px] relative my-4">
          <div className="flex flex-col space-y-2 text-center pt-6">
            <h1 className="text-2xl font-semibold tracking-tight">
              Iniciar sesion
            </h1>
          </div>
          <div className="grid gap-4">
            <Form />

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  O continue con
                </span>
              </div>
            </div>
            <GoogleSignin />
          </div>
          <p className="px-8 text-center text-sm text-muted-foreground">
            Al hacer clic en continuar, usted acepta nuestro
            <Link href="/terms">Términos de servicio</Link>y
            <Link href="/privacy">Política de privacidad</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
