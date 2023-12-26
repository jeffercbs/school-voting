"use client";
import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui";
import { Bell } from "lucide-react";

export function Notifications() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon">
          <Bell className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="md:w-[400px] md:h-[500px] w-full h-full border">
        <h2>Notifications</h2>
      </PopoverContent>
    </Popover>
  );
}
