"use client";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Heart, Loader2 } from "lucide-react";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button
          className="flex gap-3 justify-between px-2"
          size={"lg"}
          disabled
        >
          <p className="text-xs  ">please wait</p>
          <Loader2 className="animate-spin h-4 w-4 mr-2" />
        </Button>
      ) : (
        <Button size={"lg"} type="submit">
          Next
        </Button>
      )}
    </>
  );
};

export default SubmitButton;

export function AddToFavoriteButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <div>
          <Button
            variant={"outline"}
            size={"icon"}
            disabled
            className="bg-primary-foreground"
          >
            <Loader2 className="h-4 w-4 animate-spin text-primary " />
          </Button>
        </div>
      ) : (
        <Button
          variant={"outline"}
          size={"icon"}
          className="bg-primary-foreground"
          type="submit"
        >
          <Heart className="w-4 h-4" />
        </Button>
      )}
    </>
  );
}

export function RemoveFromFavourite() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <div>
          <Button
            variant={"outline"}
            size={"icon"}
            disabled
            className="bg-primary-foreground"
          >
            <Loader2 className="h-4 w-4 animate-spin text-primary " />
          </Button>
        </div>
      ) : (
        <Button
          variant={"outline"}
          size={"icon"}
          className="bg-primary-foreground"
          type="submit"
        >
          <Heart className="w-4 h-4 text-primary" fill="#E21C49" />
        </Button>
      )}
    </>
  );
}

export function ReservationSubmitButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <div>
          <Button
            disabled
            className="w-full"
          >
            <Loader2 className="h-4 w-4 animate-spin text-primary mr-2 " />{" "}
            please wait ...
          </Button>
        </div>
      ) : (
        <Button className="w-full" type="submit">
          Make a Reservation
        </Button>
      )}
    </>
  );
}
