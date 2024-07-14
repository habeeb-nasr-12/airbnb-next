"use client";
import { createLocation } from "@/app/actions";
import { useCountries } from "@/app/lib/getCountries";
import BottomBar from "@/components/BottomBar/BottomBar";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import dynamic from "next/dynamic";
import { useState } from "react";

const AdreessRoute = ({ params }: { params: { id: String } }) => {
  const { getAllCountries } = useCountries();
  const [location, setLoaction] = useState<string>();

  const LazyMap = dynamic(() => import("@/components/Map/Map"), {
    ssr: false,
    loading: () => <Skeleton className=" h-[50vh] w-full " />,
  });

  return (
    <>
      <div className="w-3/5 mx-auto ">
        <h2 className="text-3xl font-semibold tracking-tighter  transition-colors   mb-10   ">
          where is your home located ?
        </h2>
      </div>
      <form action={createLocation}>
        <input type="hidden" value={params.id as string } name="homeId" />
        <input type="hidden" value={location} name="country" />
        <div className="w-3/5 mx-auto mb-36">
          <div className="mb-5">
            <Select
              required
              onValueChange={(value: string) => setLoaction(value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a country " />
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Countries </SelectLabel>
                    {getAllCountries().map((item: any) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label} / {item.region}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </SelectTrigger>
            </Select>
          </div>

          <LazyMap location={location  as string} />
        </div>
        <BottomBar />
      </form>
    </>
  );
};

export default AdreessRoute;
