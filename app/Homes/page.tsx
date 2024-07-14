import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "../lib/db";
import { redirect } from "next/navigation";
import Noitem from "@/components/Noitem";
import ListingCard from "@/components/ListingCard/ListingCard";
import { unstable_noStore as noStore } from "next/cache";
async function getData(userId: string) {
  noStore();
  const data = await prisma.home.findMany({
    where: {
      userId,
      addedCategory: true,
      addedDescription: true,
      addedLoaction: true,
    },
    select: {
      id: true,
      country: true,
      description: true,
      price: true,
      photo: true,

      Favorite: {
        where: {
          userId: userId,
        },
      },
    },
    orderBy: {
      createdAT: "desc",
    },
  });
  return data;
}

const page = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) return redirect("/");
  const data = await getData(user?.id as string);

  return (
    <section className="container px-5 lg:px-10 mt-10">
      <h2 className="text-3xl font-semibold tracking-tighter">Your homes</h2>
      {data.length === 0 ? (
        <Noitem
          title="You dont have any home listed"
          desc="Please list a home on airbnb so that you can use it right here !"
        />
      ) : (
        <>
          <div className="grid lg:grid-cols-4 md:grid-cols-3  sm:grid-cols-2 grid-cols-1 gap-8 mt-8">
            {data.map((item) => (
              <ListingCard
                pathName={"/Homes"}
                FavouriteId={item.Favorite[0]?.id}
                IsInFavouriteList={item.Favorite.length > 0 ? true : false}
                location={item.country as string}
                key={item.id}
                photo={item.photo as string}
                userId={user.id}
                homeId={item.id}
                price={item.price as number}
                description={item.description as string}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default page;
