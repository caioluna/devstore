import {FeaturedLink} from "@/components/FeaturedLink";

export default async function SearchPage() {
  return (
    <div className='flex flex-col gap-4'>
      <p className='text-sm'>
        Resultados para: <span className='font-semibold'>moleton</span>
      </p>

      <div className='grid grid-cols-3 gap-6'>
        <FeaturedLink
          key={1}
          href={'/product/moletom-never-stop-learning'}
          imageUrl={'/moletom-never-stop-learning.png'}
          label={'Moletom Never Stop Learning'}
          price={129}
          size={460}
        />
        <FeaturedLink
          key={1}
          href={'/product/moletom-never-stop-learning'}
          imageUrl={'/moletom-never-stop-learning.png'}
          label={'Moletom Never Stop Learning'}
          price={129}
          size={460}
        />
        <FeaturedLink
          key={1}
          href={'/product/moletom-never-stop-learning'}
          imageUrl={'/moletom-never-stop-learning.png'}
          label={'Moletom Never Stop Learning'}
          price={129}
          size={460}
        />
      </div>
    </div>
  )
}
