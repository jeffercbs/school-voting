"use client";
import { ThemeProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

interface Props extends ThemeProviderProps {}

export default function Providers({ children, ...props }: Props) {
  return <ThemeProvider {...props}>{children}</ThemeProvider>;
}
