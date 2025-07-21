import Feed from '@/components/Feed'
import Image from '@/components/Image'
import Link from 'next/link'

const UserPage = () => {
  return (
    <div className=''>
      {/* Profile Title */}
      <div className='sticky top-0 z-10 flex items-center gap-8 bg-[#00000084] p-4 backdrop-blur-md'>
        <Link href='/'>
          <Image path='icons/back.svg' alt='back' w={24} h={24} />
        </Link>
        <h1 className='text-lg font-bold'>Sepzi</h1>
      </div>
      {/* Info */}
      <div className=''>
        {/* Cover and Avatar */}
        <div className='relative w-full'>
          {/* Cover */}
          <div className='relative aspect-[3/1] w-full'>
            <Image
              path='general/cover.jpg'
              alt='cover'
              w={600}
              h={200}
              tr={true}
            />
          </div>
          {/* Avatar */}
          <div className='absolute left-4 aspect-square w-1/5 -translate-y-1/2 overflow-hidden rounded-full border-4 border-black bg-gray-300'>
            <Image
              path='general/avatar.png'
              alt='cover'
              w={100}
              h={100}
              tr={true}
            />
          </div>
        </div>
        <div className='flex w-full items-center justify-end gap-2 p-2'>
          <div className='flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border-[1px] border-gray-500'>
            <Image path='icons/more.svg' alt='more' w={20} h={20} />
          </div>
          <div className='flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border-[1px] border-gray-500'>
            <Image path='icons/explore.svg' alt='more' w={20} h={20} />
          </div>
          <div className='flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border-[1px] border-gray-500'>
            <Image path='icons/message.svg' alt='more' w={20} h={20} />
          </div>
          <button className='rounded-full bg-white px-4 py-2 font-bold text-black'>
            Follow
          </button>
        </div>

        {/* User Info */}
        <div className='flex flex-col gap-2 p-4'>
          {/* Username Handle */}
          <div className=''>
            <h1 className='text-2xl font-bold'>Sepzi</h1>
            <span className='text-sm text-textGray'>@sepzi</span>
          </div>
          <p>Nikola Sepic Web Developer</p>
          {/* Job Loc Date */}
          <div className='flex gap-4 text-[15px] text-textGray'>
            <div className='flex items-center gap-2'>
              <Image
                path='icons/userLocation.svg'
                alt='location'
                w={20}
                h={20}
              />
              <span>Belgrade, Serbia</span>
            </div>
            <div className='flex items-center gap-2'>
              <Image path='icons/date.svg' alt='location' w={20} h={20} />
              <span>Joined Feb 1999</span>
            </div>
          </div>
          {/* Followings and Followers */}
          <div className='flex gap-4'>
            <div className='flex items-center gap-2'>
              <span className='font-bold'>100</span>
              <span className='text-[15px] text-textGray'>Followers</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='font-bold'>32</span>
              <span className='text-[15px] text-textGray'>Following</span>
            </div>
          </div>
        </div>
      </div>
      {/* Feed */}
      <Feed />
    </div>
  )
}

export default UserPage
