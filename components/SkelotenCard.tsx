import { Skeleton } from "./ui/skeleton";

const SkelotenCard = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-72 w-full rounded-lg " />
      <div className="flex flex-col space-y-2">
        <Skeleton className="h-4 w-full " />
        <Skeleton className="h-4 w-3/4  " />
        <Skeleton className="h-4 w-1/4 " />
      </div>
    </div>
  );
};

export default SkelotenCard;
