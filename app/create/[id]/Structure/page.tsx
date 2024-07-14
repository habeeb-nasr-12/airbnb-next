import { createCategoryPage } from "@/app/actions";
import BottomBar from "@/components/BottomBar/BottomBar";
import SelectedCategory from "@/components/SelectedCategory/SelectedCategory";
import SubmitButton from "@/components/SubmitButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const structureRoute = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <div className="w-3/5 m-auto">
        <h2 className="text-3xl  font-semibold  tracking-tight transition-colors">
          {" "}
          which of these best describe for you{" "}
        </h2>
      </div>
      <form action={createCategoryPage}>
        <input type="hidden" name="homeId" value={params.id as string} />
        <SelectedCategory />
        <BottomBar/>
      </form>
    </>
  );
};

export default structureRoute;
