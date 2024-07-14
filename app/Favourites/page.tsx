import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "../lib/db";
import { redirect } from "next/navigation";
import Noitem from "@/components/Noitem";
import ListingCard from "@/components/ListingCard/ListingCard";
import { unstable_noStore as noStore } from "next/cache";
const getData = async (userId: string) => {
   noStore();
  const data = await prisma.favorite.findMany({
    where: {
      userId,
    },

    select: {
      Home: {
        select: {
          photo: true,
          id: true,
          Favorite: true,
          price: true,
          country: true,
          description: true,
        },
      },
    },
  });

  return data;
};

const page = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) return redirect("/");
  const data = await getData(user?.id as string);


  return (
    <section className="container mx-auto py-5 lg:px-10 mt-10">
      <h2 className="text-3xl font-semibold tracking-tighter ">
        Your Favourites
      </h2>
      {data.length == 0 ? (
        <Noitem title="Hey you dont have any favorites ...." desc="please add favourites to see them right here...!" />
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-8 mt-8">
          {data.map((item) => (
            <ListingCard
              key={item.Home?.id}
              description={item.Home?.description as string}
              location={item.Home?.country as string}
              pathName={"/Favourite"}
              homeId={item.Home?.id as string}
              photo={item.Home?.photo as string}
              price={item.Home?.price as number}
              userId={user.id}
              FavouriteId={item.Home?.Favorite[0].id as string}
              IsInFavouriteList={
                (item.Home?.Favorite.length as number) > 0 ? true : false
              }
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default page;
