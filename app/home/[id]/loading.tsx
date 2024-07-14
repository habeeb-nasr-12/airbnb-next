import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <div className="w-[75%] mx-auto mt-10">
      <Skeleton className="h-4 w-1/3" />
      <Skeleton className="w-full h-[550px] mt-5" />

      <div className="flex ga-x-24 justify-between mt-8">
        <div className="w-3/2">
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-4 w-1/3 mt-3" />
        </div>
        <div className="w-1/3">
          <Skeleton className="w-full h-72" />
        </div>
      </div>
    </div>
  );
};

export default loading;
