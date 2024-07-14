"use client";
import { Minus, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

const Counter = ({name }: {name:string}) => {
  let [amount, setAmount] = useState(0);
  const handleMinus = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  };
  return (
    <div className="flex items-center gap-x-4">
      <input type="hidden" name={name}  value={amount}  />
      <Button
        onClick={handleMinus}
        variant={"outline"}
        size={"icon"}
        type="button"
      >
        <Minus className="h-4 w-4 text-primary" />
      </Button>
      <p className="font-mdeuim ">{amount}</p>
      <Button
        onClick={() => {
          setAmount(amount + 1);
        }}
        variant={"outline"}
        size={"icon"}
        type="button"
      >
        <Plus className="h-4 w-4 text-primary" />
      </Button>
    </div>
  );
};

export default Counter;
