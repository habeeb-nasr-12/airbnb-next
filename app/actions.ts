"use server";

import { redirect } from "next/navigation";
import prisma from "./lib/db";
import { supabase } from "./lib/supabase";
import { revalidatePath } from "next/cache";

export async function createAirbnbHome({ userId }: { userId: string }) {
  const data = await prisma.home.findFirst({
    where: {
      userId: userId,
    },
    orderBy: {
      createdAT: "desc",
    },
  });

  if (data === null) {
    const data = await prisma.home.create({
      data: {
        userId: userId,
      },
    });

    return redirect(`/create/${data.id}/Structure`);
  } else if (
    !data.addedCategory &&
    !data.addedDescription &&
    !data.addedLoaction
  ) {
    redirect(`/create/${data.id}/Structure`);
  } else if (data.addedCategory && !data.addedDescription) {
    redirect(`/create/${data.id}/description`);
  } else if (
    data.addedCategory &&
    data.addedDescription &&
    !data.addedLoaction
  ) {
    redirect(`/create/${data.id}/address`);
  } else if (
    data.addedCategory &&
    data.addedDescription &&
    data.addedLoaction
  ) {
    const data = await prisma.home.create({
      data: {
        userId: userId,
      },
    });
  }

  return redirect(`/create/${data.id}/Structure`);
}

export async function createCategoryPage(formData: FormData) {
  let categoryName = formData.get("categoryName") as string;
  const homeId = formData.get("homeId") as string;
  const data = await prisma.home.update({
    where: {
      id: homeId,
    },
    data: {
      categoryName: categoryName,
      addedCategory: true,
    },
  });

  return redirect(`/create/${homeId}/description`);
}

export async function CreateDescription(formData: FormData) {
  let title = formData.get("title") as string;
  let description = formData.get("Descrpition") as string;
  let price = formData.get("Price");
  let image = formData.get("Image") as File;
  let guestNumbers = formData.get("Guests") as string;
  let RoomNumbers = formData.get("Rooms") as string;
  let bathroomsNumbers = formData.get("bathrooms") as string;
  const homeId = formData.get("homeId") as string;

  const { data: imageData } = await supabase.storage
    .from("images")
    .upload(`${image.name}-${new Date()}`, image, {
      cacheControl: "2592000 ",
      contentType: "image/png",
    });
  const data = await prisma.home.update({
    where: {
      id: homeId,
    },
    data: {
      title: title,
      description,
      price: Number(price),
      photo: imageData?.path,
      guests: guestNumbers,
      bathrooms: bathroomsNumbers,
      bedrooms: RoomNumbers,
      addedDescription: true,
    },
  });
  return redirect(`/create/${homeId}/address`);
}
export async function createLocation(formData: FormData) {
  const homeId = formData.get("homeId") as string;
  const country = formData.get("country") as string;

  const data = await prisma.home.update({
    where: {
      id: homeId,
    },
    data: {
      addedLoaction: true,
      country,
    },
  });

  return redirect("/");
}

export async function addToFavourite(FormData: FormData) {
  const homeId = FormData.get("homeId") as string;
  const userId = FormData.get("userId") as string;
  const pathName = FormData.get("pathName") as string;
  const data = await prisma.favorite.create({
    data: {
      homeId: homeId,
      userId: userId,
    },
  });

  revalidatePath(pathName);
}

export async function removeFromFavourite(FormData: FormData) {
  const FavouriteId = FormData.get("FavouriteId") as string;
  const userId = FormData.get("userId") as string;
  const pathName = FormData.get("pathName") as string;

  const data = await prisma.favorite.delete({
    where: {
      userId: userId,
      id: FavouriteId,
    },
  });

  revalidatePath(pathName);
}

export async function CreateReservation(FormData: FormData) {
  const userId = FormData.get("userId") as string;
  const homeId = FormData.get("homeId") as string;
  const startDate = FormData.get("startDate") as string;
  const endDate = FormData.get("endDate") as string;

  const data = await prisma.reservation.create({
    data: {
      userId: userId,
      startDate: startDate,
      endDate: endDate,
      homeId,
    },
  });

  return redirect("/");
}
