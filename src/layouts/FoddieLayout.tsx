import UserFoodieMenu from "@/components/common/UserFoodieMenu";
import FoddiesMenu from "@/components/menu/FoddiesMenu";
import React, { ReactNode } from "react";

const FoddieLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" min-h-screen w-full bg-accent">
      <div className=" max-w-6xl px-4 mx-auto py-10 ">
        <div className=" flex justify-between gap-4 items-center">
          <div>
            <h1 className=" font-bold text-foreground text-4xl">
              Panel de Foddie
            </h1>
            <p className=" text-muted-foreground">
              Explora y conecta con restaurantes locales
            </p>
          </div>
          <UserFoodieMenu />
        </div>
        <div className=" pt-6">
          <FoddiesMenu />
        </div>
        <div className="pt-6">{children}</div>
      </div>
    </div>
  );
};

export default FoddieLayout;
