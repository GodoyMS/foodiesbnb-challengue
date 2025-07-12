import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Plus, Utensils } from "lucide-react";
import Link from "next/link";

const EmptyVisits = () => {
  return (
    <div>
      <Card className=" ">
        <CardContent className="flex flex-col items-center justify-center py-10 px-6 text-center">
          {/* Icon */}
          <div className="relative mb-6">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center">
              <Utensils className="w-10 h-10 text-orange-600" />
            </div>
            <div className="absolute -top-1 -right-1 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
              <Calendar className="w-4 h-4 text-gray-500" />
            </div>
          </div>

          {/* Main Message */}
          <h2 className="text-2xl font-semibold text-foreground mb-3">
            No hay visitas agendadas
          </h2>

          <p className="text-muted-foreground mb-8 max-w-md">
            {
              "Aún no tienes ninguna cita en restaurantes programada. ¡Comienza a explorar y reserva tu próxima experiencia gastronómica!"
            }
          </p>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild variant="outline" size="lg">
              <Link href={"/foodies"}>Buscar restaurantes</Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link href={"/foodies/favorites"}>
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className=" text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Utensils className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-medium text-gray-900 mb-1">Favoritos</h3>
              <p className="text-sm text-gray-500">
                Reserva en tus restaurantes favoritos
              </p>
            </CardContent>
          </Card>
        </Link>
        <Link href={"/foodies"}>
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className=" text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Plus className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-medium text-gray-900 mb-1">Descubre</h3>
              <p className="text-sm text-gray-500">
                Explora nuevos restaurantes cerca
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default EmptyVisits;
