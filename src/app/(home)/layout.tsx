import { Header } from "@/components/header";

export default function LayoutHome({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col">
      <Header />
      {children}
    </main>
  );
}
