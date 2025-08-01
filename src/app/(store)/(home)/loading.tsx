import {Skeleton} from "@/components/Skeleton";

export default function HomeLoading() {
  return (
    <div className="grid h-full grid-cols-9 grid-rows-6 gap-6">
      <Skeleton className='col-span-6 row-span-6 h-[690px]'/>
      <Skeleton className='col-span-3 row-span-3'/>
      <Skeleton className='col-span-3 row-span-3'/>
    </div>
  );
}
