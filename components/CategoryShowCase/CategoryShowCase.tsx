import { categoryItems } from "@/app/lib/CategoryItems";
import Image from "next/image";

const CategoryShowCase = ({ categoryName }: { categoryName: string }) => {
  const category = categoryItems.find((item) => item.name === categoryName);
  return (
    <div className="flex item-center">
      <Image
        src={category?.imageUrl as string}
        alt="category Image"
        width={44}
        height={44}
      />

      <div className="flex flex-col ml-4 ">
        <p className="font-medium ">{category?.title}</p>
        <p className="text-sm text-muted-foreground">{category?.description}</p>
      </div>
    </div>
  );
};

export default CategoryShowCase;
