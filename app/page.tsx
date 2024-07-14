import MapFilter from "@/components/MapFilterItems/MapFilter";
import prisma from "./lib/db";
import ListingCard from "@/components/ListingCard/ListingCard";
import { Suspense } from "react";
import SkelotenCard from "@/components/SkelotenCard";
import Noitem from "@/components/Noitem";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { unstable_noStore as noStore } from "next/cache";
const getData = async ({
  searchParams,
  userId,
}: {
  userId: string | undefined;
  searchParams?: {
    filter?: string;
    country?: string;
    guest?: string;
    room?: string;
    bathroom?: string;
  };
}) => {
  noStore();
  const data = await prisma.home.findMany({
    where: {
      addedCategory: true,
      addedLoaction: true,
      addedDescription: true,
      categoryName: searchParams?.filter ?? undefined,
      country :searchParams?.country ?? undefined,
      guests :searchParams?.guest ?? undefined,
      bedrooms :searchParams?.room  ?? undefined,
      bathrooms :searchParams?.bathroom ?? undefined
    },
    select: {
      photo: true,
      id: true,
      country: true,
      price: true,
      description: true,
      Favorite: {
        where: {
          userId: userId ?? undefined,
        },
      },
    },
  });
  return data;
};

export default function Home({
  searchParams,
  params,
}: {
  searchParams?: {
    filter?: string;
    country?: string;
    guest?: string;
    room?: string;
    bathroom?: string;
  };
  params: { id: string };
}) {
  return (
    <div className="container mx-auto px-5 lg:px-10">
      <MapFilter />

      <Suspense fallback={<SkeletonLoading />} key={searchParams?.filter}>
        {" "}
        <ShowItems searchParams={searchParams} />{" "}
      </Suspense>
    </div>
  );
}

async function ShowItems({
  searchParams,
}: {
  searchParams?: {
    filter?: string;
    country?: string;
    guest?: string;
    room?: string;
    bathroom?: string;
  };
}) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const data = await getData({ searchParams: searchParams, userId: user?.id });

  return (
    <>
      {data.length === 0 ? (
        <Noitem
          title="sorry no listing for this category found ...."
          desc="please check other categories or create your listing!"
        />
      ) : (
        <div className="mt-10 grid gap-8 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
          {data.map(({ description, id, photo, price, country, Favorite }) => (
            <ListingCard
              pathName={"/"}
              homeId={id}
              FavouriteId={Favorite[0]?.id}
              IsInFavouriteList={Favorite.length > 0 ? true : false}
              userId={user?.id}
              key={id}
              location={country as string}
              price={price as number}
              description={description as string}
              photo={photo as string}
            />
          ))}
        </div>
      )}
    </>
  );
}

function SkeletonLoading() {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2    gap-8 mt-8 ">
      <SkelotenCard />
      <SkelotenCard />
      <SkelotenCard />
      <SkelotenCard />
      <SkelotenCard />
      <SkelotenCard />
      <SkelotenCard />
      <SkelotenCard />
      <SkelotenCard />
    </div>
  );
}
