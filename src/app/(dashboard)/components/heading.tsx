"use client";
import { Separator } from "@/components/ui";

export const Heading = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="w-full h-fit mb-6 py-6">
      <div className="block pb-4">
        <h2 className="text-3xl font-semibold capitalize">{title}</h2>
        <p className="opacity-70 capitalize">{subtitle}</p>
      </div>
      <Separator />
    </div>
  );
};
