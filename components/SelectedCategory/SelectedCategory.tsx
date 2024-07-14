"use client";

import { categoryItems } from "@/app/lib/CategoryItems";
import { Card, CardHeader } from "../ui/card";
import Image from "next/image";
import { useState } from "react";

const SelectedCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-8 mt-10 w-3/5 mx-auto mb-36">
      <input
        type="hidden"
        name="categoryName"
        value={selectedCategory as string}
      />
      {categoryItems.map(({ name, id, imageUrl, title }) => (
        <div key={id} className="cursor-pointer">
          <Card
            className={ ` flex  justify-center  ${ selectedCategory === name && 'border-primary'} ` }
            onClick={() => setSelectedCategory(name)}
          >
            <CardHeader className="x">
              <Image
                className="w-8 h-8"
                src={imageUrl}
                alt={name}
                height={32}
                width={32}
              />
              <h3 className="font-meduim ">{title}</h3>
            </CardHeader>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default SelectedCategory;
