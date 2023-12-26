"use client";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Textarea,
} from "@/components/ui";
import { DatePicker } from "../../components/date-picker";
import { Heading } from "../../components/heading";
import { User } from "lucide-react";

export default function EventPage() {
  return (
    <div className="space-y-6">
      <Heading title="Event" subtitle="crear un nuevo evento" />
      <div className="grid md:grid-cols-2 grid-cols-1">
        <form action="" className="flex flex-col px-5 gap-6">
          {[
            {
              id: "title",
              name: "title",
              label: "Titulo",
              type: "text",
              placeholder: "Titulo del evento",
            },
            {
              id: "starttime",
              name: "date",
              label: "Fecha",
              type: "date",
            },

            {
              id: "description",
              name: "description",
              label: "Descripcion",
              type: "textarea",
              placeholder: "Descripcion del evento",
            },
          ].map((input) => (
            <div key={input.id} className="flex flex-col">
              <Label htmlFor={input.name} className="capitalize text-base">
                {input.label}
              </Label>
              {input.type === "date" ? (
                <DatePicker />
              ) : input.type === "textarea" ? (
                <Textarea {...input} className="min-h-32" />
              ) : (
                <Input {...input} />
              )}
            </div>
          ))}
        </form>
        <div>
          <Card>
            <CardHeader className="block">
              <CardTitle>Estudiantes</CardTitle>
              <CardDescription>
                ingrese el numero de documento de un estudiante para excluirlo
                de este evento
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form action="" className="flex flex-col gap-3">
                <div className="block">
                  <Label htmlFor="dni">Documento</Label>
                  <Input
                    type="number"
                    name="dni"
                    id="dni"
                    placeholder="Numero de documento"
                  />
                </div>

                <Button type="submit">Excluir</Button>
              </form>
            </CardContent>
            <CardFooter>
              <div className="flex justify-between w-full rounded-md py-2 px-3 border">
                <div className="flex gap-4">
                  <User className="w-6 h-6" />
                  <p>Jeferson Barrero</p>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
