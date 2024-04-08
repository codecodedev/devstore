import { Skeleton } from '@/components/skeleton'

export default function HomeLoading() {
  return (
    <div className="grid h-[calc(100vh-56px-64px-20px)] grid-cols-9 grid-rows-6 gap-6">
      <Skeleton className="col-span-6 row-span-6 h-full relative">
        <Skeleton className="absolute bottom-28 right-28 h-12 flex items-center gap-2 w-[280px] rounded-full p-1 pl-5" />
      </Skeleton>

      <Skeleton className="col-span-3 row-span-3 h-full relative">
        <Skeleton className="absolute bottom-10 right-10 h-12 flex items-center gap-2 w-[280px] rounded-full p-1 pl-5" />
      </Skeleton>
      <Skeleton className="col-span-3 row-span-3 h-full relative">
        <Skeleton className="absolute bottom-10 right-10 h-12 flex items-center gap-2 w-[280px] rounded-full p-1 pl-5" />
      </Skeleton>
    </div>
  )
}
