import {
  DropdownMenu,
  DropdownMenuTrigger,
  Button,
  Avatar,
  AvatarImage,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  AvatarFallback,
} from "@/components/ui";
import { signOut } from "next-auth/react";

export function User() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="mb-6 " asChild>
        <Button
          className="w-full px-0 py-6 flex justify-start gap-2"
          variant="outline"
        >
          <Avatar>
            <AvatarImage
              src="https://avatars.githubusercontent.com/u/40169999?v=4"
              alt="avatar"
            />
            <AvatarFallback>JB</AvatarFallback>
          </Avatar>
          <p className="text-sm font-medium leading-none">
            dario echandia olaya
          </p>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Hola, dario echandia olaya</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => signOut()} color="warning">
            Item 1
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
