import { useCountries } from "@/app/lib/getCountries";
import Image from "next/image";
import Link from "next/link";
import { AddToFavoriteButton, RemoveFromFavourite } from "../SubmitButton";
import { addToFavourite, removeFromFavourite } from "@/app/actions";

interface props {
  description: string;
  location: string;
  photo: string;
  price: number;
  userId: string | undefined;
  IsInFavouriteList: boolean;
  FavouriteId: string;
  homeId: String;
  pathName: String;
}

const ListingCard = ({
  description,
  location,
  photo,
  IsInFavouriteList,
  FavouriteId,
  price,
  userId,
  homeId,
  pathName,
}: props) => {
  const { getCountryByValue } = useCountries();
  const country = getCountryByValue(location);
  return (
    <div className="flex flex-col">
      <div className="relative h-72">
        <Image
          src={`https://rohyksdlruptnthzbbxs.supabase.co/storage/v1/object/public/images/${photo}`}
          className="rounded-lg h-full object-cover mb-4"
          alt={"Image of the house "}
          fill
        />
        {userId && (
          <>
            <div className="z-10 top-2 right-2 absolute">
              {IsInFavouriteList ? (
                <>
                  <form action={removeFromFavourite}>
                    <input
                      type="hidden"
                      name="FavouriteId"
                      value={FavouriteId as string}
                    />
                    <input
                      type="hidden"
                      name="userId"
                      value={userId as string}
                    />

                    <input
                      type="hidden"
                      name="pathName"
                      value={pathName as string}
                    />
                    <RemoveFromFavourite />
                  </form>
                </>
              ) : (
                <>
                  <form action={addToFavourite}>
                    <input
                      type="hidden"
                      name="homeId"
                      value={homeId as string}
                    />
                    <input
                      type="hidden"
                      name="userId"
                      value={userId as string}
                    />

                    <input
                      type="hidden"
                      name="pathName"
                      value={pathName as string}
                    />
                    <AddToFavoriteButton />
                  </form>
                </>
              )}
            </div>
          </>
        )}
      </div>
      <Link className="my-3" href={`home/${homeId}`}>
        <h3 className="  text-base font-meduim">
          {" "}
          {country?.label} / {country?.region}{" "}
        </h3>
        <p className="text-muted-foreground txt-sm line-clamp-2 ">
          {description}
        </p>
        <p className="pt-2 text-muted-foreground ">
          $ <span className="text-black "> {price}</span> Night
        </p>
      </Link>
    </div>
  );
};

export default ListingCard;
