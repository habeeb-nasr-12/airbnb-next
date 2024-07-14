import { File } from "lucide-react";
import React from "react";
interface props {
  title: string;
  desc: string;
}
const Noitem = ({ title, desc }: props) => {
  return (
    <div className=" mx-auto px-2 flex min-h-[400px] flex-col items-center justify-center rounded-md border border-dashed text-center animate-in fade-in-50 mt-10">
      <div className="h-20 flex w-20 items-center justify-center rounded-full bg-primary/10">
        <File className="h-10 w-10 text-primary " />
      </div>
      <h2 className="font-semibold text-xl mt-5 ">{title}</h2> 
      <p className="mt-2 text-muted-foreground text-sm  text-center">{desc}</p>
    </div>
  );
};

export default Noitem;
