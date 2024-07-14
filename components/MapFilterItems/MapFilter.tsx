"use client";
import { categoryItems } from "@/app/lib/CategoryItems";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const MapFilter = () => {
  const searchParamas = useSearchParams();
  const search = searchParamas.get("filter");
  console.log(search);
  const pathname = usePathname();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParamas);
      params.set(name, value);
      return params;
    },
    [searchParamas]
  );

  return (
    <div className="flex justify-center mx-auto gap-x-10 mt-5 w-full  overflow-x-scroll no-scrollbar ">
      {categoryItems.map(({ id, imageUrl, description, name, title }) => (
        <Link
          key={name as string}
          href={pathname + "?" + createQueryString("filter", name as string)}
          className={cn(
            search == name
              ? "border-b-2 border-black pb-2 flex-shrink-0"
              : "opacity-70 flex-shrink-0 ",
            "flex flex-col items-center gap-3"
          )}
        >
          <div className="relative  w-6 h-6">
            <Image src={imageUrl as string} alt="category image" width={24} height={24} />
          </div>
          <p className="text-xs font-medium">{title} </p>
        </Link>
      ))}
    </div>
  );
};

export default MapFilter;
