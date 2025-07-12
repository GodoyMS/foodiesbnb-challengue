import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import FoddiesLoginForm from "./FoddiesLoginForm";
import RestaurantLoginForm from "./RestaurantLoginForm";
export function LoginForm({ className }: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Iniciar sesión</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Ingresa a tu cuenta para continuar
        </p>
      </div>
      <Tabs defaultValue="foddies">
        <TabsList className=" w-full">
          <TabsTrigger className="px-6" value="foddies">Foddies</TabsTrigger>
          <TabsTrigger className="px-6" value="restaurant">Soy restaurante</TabsTrigger>
        </TabsList>
        <TabsContent value="foddies">
          <FoddiesLoginForm />
        </TabsContent>
        <TabsContent value="restaurant">
          <RestaurantLoginForm />
        </TabsContent>
      </Tabs>
    </div>
  );
}
