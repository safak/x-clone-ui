import Link from 'next/link'
import Image from './Image'

const Recommendations = () => {
  return (
    <div className='flex flex-col gap-4 rounded-2xl border-[1px] border-borderGray p-4'>
      {/* User Card */}
      <div className='flex items-center justify-between'>
        {/* Image and User info */}
        <div className='flex items-center gap-2'>
          <div className='relative h-10 w-10 overflow-hidden rounded-full'>
            <Image
              path='general/avatar.png'
              alt='sepzi'
              w={100}
              h={100}
              tr={true}
            />
          </div>

          <div className=''>
            <h1 className='font-bold'>Nikola Sepic</h1>
            <span className='text-sm text-textGray'>@sepzi</span>
          </div>
        </div>
        {/* Button */}
        <button className='rounded-full bg-white px-4 py-1 font-semibold text-black'>
          Follow
        </button>
      </div>

      <div className='flex items-center justify-between'>
        {/* Image and User info */}
        <div className='flex items-center gap-2'>
          <div className='relative h-10 w-10 overflow-hidden rounded-full'>
            <Image
              path='general/avatar.png'
              alt='sepzi'
              w={100}
              h={100}
              tr={true}
            />
          </div>

          <div className=''>
            <h1 className='font-bold'>Nikola Sepic</h1>
            <span className='text-sm text-textGray'>@sepzi</span>
          </div>
        </div>
        {/* Button */}
        <button className='rounded-full bg-white px-4 py-1 font-semibold text-black'>
          Follow
        </button>
      </div>

      <div className='flex items-center justify-between'>
        {/* Image and User info */}
        <div className='flex items-center gap-2'>
          <div className='relative h-10 w-10 overflow-hidden rounded-full'>
            <Image
              path='general/avatar.png'
              alt='sepzi'
              w={100}
              h={100}
              tr={true}
            />
          </div>

          <div className=''>
            <h1 className='font-bold'>Nikola Sepic</h1>
            <span className='text-sm text-textGray'>@sepzi</span>
          </div>
        </div>
        {/* Button */}
        <button className='rounded-full bg-white px-4 py-1 font-semibold text-black'>
          Follow
        </button>
      </div>
      <Link href='/' className='text-iconBlue'>
        Show more
      </Link>
    </div>
  )
}

export default Recommendations
