import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { useRestaurantsContext } from "@/context/restaurantsContext";
import axios from "axios";
import { format } from "date-fns";
import {
  CalendarIcon,
  CookieIcon,
  FlagIcon,
  Loader,
  MapIcon,
  StarIcon,
  StarsIcon,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "sonner";

const RestaurantVisitSheet = () => {
  const { isSheetOpen, setIsSheetOpen } = useRestaurantsContext();
  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetContent className=" !max-w-xl ">
        <SheetHeader>
          <SheetDescription>
            <RestaurantCardBody />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default RestaurantVisitSheet;

const RestaurantCardBody = () => {
  const { selectedRestaurant, setIsSheetOpen, setSelectedRestaurant } =
    useRestaurantsContext();
  const [date, setDate] = React.useState<Date>();
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  const [description, setDescription] = useState<string>("");

  const registerVisit = async () => {
    if(!date || !description){

        toast.error("Hay campos por completar")
        return

    }
    try {
      setLoadingUpdate(true);
    await axios.post("/api/foodies/visit/create", {
        restaurantId: selectedRestaurant?.id,
        description,
        visitDate: date,
      });

      toast.success("Visita agendada correctamente", {
        description: `Tu visita a ${selectedRestaurant?.name} esta en revisión `,
      });
      setIsSheetOpen(false);
      setSelectedRestaurant(null);
    } catch (error: any) {
      toast.error("Error");
    } finally {
      setLoadingUpdate(false);
    }
  };

  if (!selectedRestaurant) return;

  return (
    <div className=" text-foreground mt-8">
      <Image
        alt="restaurant"
        src={selectedRestaurant.image}
        width={300}
        height={300}
        className=" rounded-md object-cover w-full h-36"
      />
      <div className=" mt-4">
        <h2 className="  font-bold text-xl">{selectedRestaurant.name}</h2>
      </div>
      <div className=" flex flex-col gap-2 w-full pt-3 pb-6">
        <div className="flex gap-2 justify-start items-center text-foreground/70">
          <div>
            <FlagIcon className="text-primary" size={16} />
          </div>
          <div>
            <span>{selectedRestaurant.country}</span>
          </div>
        </div>
        <div className="flex gap-2 justify-start items-center text-foreground/70">
          <div>
            <MapIcon className="text-primary" size={16} />
          </div>
          <div>
            <span>
              {selectedRestaurant.location.name} - {selectedRestaurant.address}
            </span>
          </div>
        </div>

        <div className="flex gap-2 justify-start items-center text-foreground/70">
          <div>
            <CookieIcon className="text-primary" size={16} />
          </div>
          <div>
            <span>{selectedRestaurant.type.name}</span>
          </div>
        </div>

        <div className="flex gap-2 justify-start items-center text-foreground/70">
          <div>
            <StarIcon className="text-primary" size={16} />
          </div>
          <div>
            <span>
              {selectedRestaurant.stars} estrellas -{" "}
              {selectedRestaurant.num_reviews} reseñas
            </span>
          </div>
        </div>
      </div>
      <Separator />
      <div className=" pt-6 w-full">
        <h2 className="font-semibold  text-foreground/80 ">
          Programar visita{" "}
        </h2>
        <div className=" flex flex-col gap-5  mt-4 w-full">
          <div>
            <Label htmlFor="" className="pb-2">
              Fecha de visita
            </Label>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  data-empty={!date}
                  className="data-[empty=true]:text-muted-foreground w-[280px] justify-start text-left font-normal"
                >
                  <CalendarIcon />
                  {date ? (
                    format(date, "PPP")
                  ) : (
                    <span>Seleccionar una fecha</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={date} onSelect={setDate} />
              </PopoverContent>
            </Popover>
          </div>
          <div className="grid w-full gap-2">
            <Label htmlFor="message-2">Mensaje</Label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Escribe un mensaje al restaurante"
            />
          </div>

          <div>
            <Button
              type="button"
              disabled={loadingUpdate}
              onClick={registerVisit}
            >
              {loadingUpdate ? (
                <Loader className=" animate-spin " />
              ) : (
                "Programar visita"
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
