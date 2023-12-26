"use client";
import { Presentation } from "./presentation";

export const Drawer = () => {
  return (
    <div className="absolute inset-0 p-4 max-h-screen">
      <div className="flex gap-4 bg-card border-2 rounded-lg w-full h-full overflow-hidden">
        <Presentation />
        <div className="flex flex-1 flex-col">
          <div>
            <h1 className="text-4xl font-bold">Event Page</h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptas.
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
