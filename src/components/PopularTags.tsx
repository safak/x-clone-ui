import Link from 'next/link'
import Image from './Image'

function PopularTags() {
  return (
    <div className='flex flex-col gap-4 rounded-2xl border-[1px] border-borderGray p-4'>
      <h1 className='text-xl font-bold text-textGrayLight'>
        {"What's"} Happening
      </h1>
      {/* Trend Event */}
      <div className='flex gap-4'>
        <div className='relative h-20 w-20 overflow-hidden rounded-xl'>
          <Image
            path='general/post.jpeg'
            alt='event'
            w={120}
            h={120}
            tr={true}
          />
        </div>
        <div className='flex-1'>
          <h2 className='font-bold text-textGrayLight'>
            Mountains are awesome
          </h2>
          <span className='text-sm'>Says everyone!</span>
        </div>
      </div>

      {/* Topics */}
      <div className=''>
        <div className='flex items-center justify-between'>
          <span className='text-sm text-textGray'>Technology • Trending</span>
          <Image path='icons/infoMore.svg' alt='info' w={16} h={16} />
        </div>
        <h2 className='font-bold text-textGrayLight'>OpenAI</h2>
        <span className='text-sm text-textGray'>20k posts</span>
      </div>
      {/* Topics */}
      <div className=''>
        <div className='flex items-center justify-between'>
          <span className='text-sm text-textGray'>Technology • Trending</span>
          <Image path='icons/infoMore.svg' alt='info' w={16} h={16} />
        </div>
        <h2 className='font-bold text-textGrayLight'>OpenAI</h2>
        <span className='text-sm text-textGray'>20k posts</span>
      </div>
      {/* Topics */}
      <div className=''>
        <div className='flex items-center justify-between'>
          <span className='text-sm text-textGray'>Technology • Trending</span>
          <Image path='icons/infoMore.svg' alt='info' w={16} h={16} />
        </div>
        <h2 className='font-bold text-textGrayLight'>OpenAI</h2>
        <span className='text-sm text-textGray'>20k posts</span>
      </div>
      {/* Topics */}
      <div className=''>
        <div className='flex items-center justify-between'>
          <span className='text-sm text-textGray'>Technology • Trending</span>
          <Image path='icons/infoMore.svg' alt='info' w={16} h={16} />
        </div>
        <h2 className='font-bold text-textGrayLight'>OpenAI</h2>
        <span className='text-sm text-textGray'>20k posts</span>
      </div>
      <Link href='/' className='text-iconBlue'>
        Show more
      </Link>
    </div>
  )
}

export default PopularTags
