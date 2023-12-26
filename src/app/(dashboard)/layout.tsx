import { Dashboard } from "./components/dashboard";
import { cookies } from "next/headers";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const collapsed = cookies().get("resizable-panels:collapsed");

  return (
    <main>
      <Dashboard
        defaultCollapsed={collapsed ? JSON.parse(collapsed.value) : undefined}
      >
        {children}
      </Dashboard>
    </main>
  );
}
