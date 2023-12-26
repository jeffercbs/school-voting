"use client";
import { Separator } from "@/components/ui";
import { CardEvent } from "../components/card-event";
import { Heading } from "../components/heading";

export default function DashboardPage() {
  return (
    <>
      <Heading title="Dashboard" subtitle="Bienvenido a tu dashboard" />
      <section className="flex flex-col gap-2 my-4">
        <div className="flex justify-between">
          <h1 className="font-semibold text-xl">Eventos recientes</h1>
        </div>
        <Separator />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          <CardEvent />
          <CardEvent />
        </div>
      </section>
    </>
  );
}
