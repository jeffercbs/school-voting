import {
  Home,
  LifeBuoy,
  PlusIcon,
  Settings,
  UserIcon,
  UsersRound,
} from "lucide-react";
import { Nav } from "./nav";
import { User } from "./user";

export const Sidebar = ({
  collapsed = false,
}: {
  collapsed: boolean | undefined;
}) => {
  return (
    <aside className="z-20 h-screen w-full py-4 px-2 bg-white dark:bg-black">
      <User />
      <Nav
        isCollapsed={collapsed}
        links={[
          {
            title: "Dashboard",
            href: "",
            icon: Home,
          },
          {
            title: "Mi perfil",
            href: "/profile",
            icon: UserIcon,
          },
          {
            title: "Estudiantes",
            href: "/students",
            icon: UsersRound,
          },
          {
            title: "Eventos",
            href: "/event",
            icon: PlusIcon,
          },
          {
            title: "Ayuda",
            href: "/help",
            icon: LifeBuoy,
          },
        ]}
      />
    </aside>
  );
};
