"use client";

import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Progress,
} from "@/components/ui";
import { EyeIcon, MoreHorizontal, Settings2 } from "lucide-react";

export const CardEvent = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Eventos</CardTitle>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              <MoreHorizontal className="w-5 h-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-52">
            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <EyeIcon className="mr-2 w-5 h-5" />
                <p>Ver</p>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings2 className="mr-2 w-5 h-5" />
                <p>Modificar</p>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>
        <p className="text-base opacity-80">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          harum placeat veritatis.
        </p>
      </CardContent>
      <CardFooter className="block mt-2">
        <div className="flex justify-between">
          <time dateTime="2018-07-07" className="text-sm opacity-70">
            July 7
          </time>
          <time dateTime="2018-07-07" className="text-sm opacity-70">
            July 7
          </time>
        </div>
        <Progress value={50} color="oragen" />
      </CardFooter>
    </Card>
  );
};
