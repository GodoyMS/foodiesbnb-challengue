import { IRestaurant } from "@/interfaces/Restaurant.interface";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star, MapPin } from "lucide-react";

interface Props{
   data: IRestaurant;
   onClick:()=>void
}
const RestaurantCard = ({ data,onClick }:Props) => {
  return (
    <Card className="w-full pt-0  overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
      <div className=" w-full">
        <Image
          src={data.image || "/placeholder.svg"}
          alt={data.name}
        width={500}
        height={500}
          className="rounded-t-lg object-cover"
        />
      </div>
      <CardHeader className="p-4">
        <CardTitle className="text-xl font-bold">{data.name}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          {data.address}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0 grid gap-2">
        <div className="flex items-center gap-1 text-sm text-yellow-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(data.stars)
                  ? "fill-current text-yellow-500"
                  : "text-gray-300"
              }`}
            />
          ))}
          <span className="ml-1 text-muted-foreground">
            {data.num_reviews}
          </span>
        </div>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span>{data.location.name}</span>
        </div>
      </CardContent>
      <CardFooter className=" pt-0">
        <Button type="button" onClick={onClick} className="w-full">Programar visita</Button>
      </CardFooter>
    </Card>
  );
};

export default RestaurantCard;
