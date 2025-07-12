import { foddiesMenu } from "@/lib/constants/menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const FoddiesMenu = () => {
  const router = useRouter();
  return (
    <div className=" inline-flex gap-2 items-center justify-start flex-wrap md:bg-white rounded-full p-2">
        {foddiesMenu.map((e) => (
          <Link
            className={cn(
              router.pathname === e.link
                ? " bg-primary  text-white"
                : "  text-foreground",
              "px-3 py-2 text-xs md:text-lg rounded-full"
            )}
            href={e.link}
            key={e.id}
          >
            <div className=" font-semibold">{e.title}</div>
          </Link>
        ))}
      </div>
  );
};

export default FoddiesMenu;
