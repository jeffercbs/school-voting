import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";
import { GithubIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface FormProps {
  children: React.ReactNode;
  title: string;
  description: string;
  onSubmit?: (event: React.SyntheticEvent) => void;
  action?: () => void;
  className?: string;
  btn?: string;
}

export const Form = ({
  children,
  title,
  description,
  onSubmit,
  className: classes,
  btn,
}: FormProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div className="grid place-content-center overflow-y-scroll h-screen max-h-screen pt-12">
      <div className="flex flex-col justify-center space-y-6 sm:w-[350px] relative my-4">
        <div className="flex flex-col space-y-2 text-center pt-6">
          <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <div className="grid gap-4">
          <form onSubmit={onSubmit && onSubmit} className={classes}>
            <div className="grid gap-2">
              <div className="grid gap-4 mb-3">{children}</div>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Loading..." : btn}
              </Button>
            </div>
          </form>

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
          <Button variant="outline" type="button" disabled={isLoading}>
            {isLoading ? (
              <p className="mr-2 h-4 w-4 animate-spin">loading....</p>
            ) : (
              <GithubIcon className="mr-2 h-4 w-4" />
            )}{" "}
            Github
          </Button>
        </div>
        <p className="px-8 text-center text-sm text-muted-foreground">
          By clicking continue, you agree to our
          <Link href="/terms">Terms of Service</Link>
          and
          <Link href="/privacy">Privacy Policy</Link>.
        </p>
      </div>
    </div>
  );
};
