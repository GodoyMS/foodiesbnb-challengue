import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { IVisit, VisitStatus } from "@/interfaces/Visit.interface";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import React from "react";

const ExisitingVisits = ({ visits }: { visits: IVisit[] }) => {
  const currentDate = new Date();
  const upcomingAppointments = visits.filter(
    (apt) => new Date(apt.visit_date) > currentDate
  );

  const pastVisits = visits.filter(
    (apt) => new Date(apt.visit_date) <= currentDate
  );

  const formatDate = (dateString: string | Date) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getStatusBadge = (status: VisitStatus) => {
    switch (status) {
      case "Aprobado":
        return (
          <Badge
            variant="default"
            className="bg-green-100 text-green-800 hover:bg-green-100"
          >
            {status}
          </Badge>
        );
      case "Concluido":
        return (
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              {status}
            </Badge>
          </div>
        );
      case "Rechazado":
        return (
          <Badge
            variant="destructive"
            className="bg-red-100 text-red-800 hover:bg-red-100"
          >
            {status}
          </Badge>
        );
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };
  return (
    <div className="space-y-8">
      {/* Upcoming Appointments */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <CalendarDays className="h-5 w-5 text-green-600" />
          <h2 className="text-xl font-semibold">Visitas agendadas</h2>
          <Badge variant="secondary" className="ml-auto">
            {upcomingAppointments.length}
          </Badge>
        </div>

        {upcomingAppointments.length > 0 ? (
          <div className="grid gap-4">
            {upcomingAppointments.map((appointment) => (
              <Card
                key={appointment.id}
                className="border-l-4 border-l-green-500 bg-green-50/50 hover:shadow-md transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <img
                      src={appointment.restaurant.image || "/placeholder.svg"}
                      alt={appointment.restaurant.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-lg">
                          {appointment.restaurant.name}
                        </h3>
                        {getStatusBadge(appointment.status)}
                      </div>
                      <p className="text-sm text-muted-foreground">
                      Tipo de cocina: {appointment.restaurant.type.name} 
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <CalendarDays className="h-4 w-4" />
                          <span>{formatDate(appointment.visit_date)}</span>
                        </div>
                       
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{appointment.restaurant.location.name}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="border-dashed">
            <CardContent className="p-8 text-center">
              <CalendarDays className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">No upcoming appointments</p>
            </CardContent>
          </Card>
        )}
      </div>

      <Separator />

      {/* Past Visits */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-muted-foreground" />
          <h2 className="text-xl font-semibold">Visitas pasadas</h2>
          <Badge variant="outline" className="ml-auto">
            {pastVisits.length}
          </Badge>
        </div>

        {pastVisits.length > 0 ? (
          <div className="grid gap-3">
            {pastVisits.map((visit) => (
              <Card
                key={visit.id}
                className="hover:shadow-sm transition-shadow"
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={visit.restaurant.image || "/placeholder.svg"}
                      alt={visit.restaurant.name}
                      className="w-12 h-12 rounded-lg object-cover opacity-90"
                    />
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">{visit.restaurant.name}</h3>
                        {getStatusBadge(visit.status)}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>Cocina {visit.restaurant.type.name}</span>
                        <span>•</span>
                        <span>{formatDate(visit.visit_date)}</span>
                        <span>•</span>
                        <span>{visit.restaurant.location.name}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="border-dashed">
            <CardContent className="p-8 text-center">
              <Clock className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">No hay visitas pasadas</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ExisitingVisits;
