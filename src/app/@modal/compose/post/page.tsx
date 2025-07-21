'use client'

import Image from '@/components/Image'
import { useRouter } from 'next/navigation'

const PostModal = () => {
  const router = useRouter()

  const closeModal = () => {
    router.back()
  }

  return (
    <div className='absolute left-0 top-0 z-20 flex h-screen w-screen justify-center bg-[#293139a6]'>
      <div className='mt-12 h-max w-[600px] rounded-xl bg-black px-8 py-4'>
        {/* Top */}
        <div className='flex items-center justify-between'>
          <div className='cursor-pointer' onClick={closeModal}>
            X
          </div>
          <div className='font-bold text-iconBlue'>Drafts</div>
        </div>
        {/* Center */}
        <div className='flex gap-4 py-8'>
          <div className='relative h-10 w-10 overflow-hidden rounded-full'>
            <Image
              path='general/avatar.png'
              alt='Sepzi'
              w={100}
              h={100}
              tr={true}
            />
          </div>
          <input
            className='flex-1 bg-transparent text-lg outline-none'
            type='text'
            placeholder='What is happening?!'
          />
        </div>
        {/* Bottom */}
        <div className='flex flex-wrap items-center justify-between gap-4 border-t border-borderGray pt-4'>
          <div className='flex flex-wrap gap-4'>
            <Image
              path='icons/image.svg'
              alt=''
              w={20}
              h={20}
              className='cursor-pointer'
            />
            <Image
              path='icons/gif.svg'
              alt=''
              w={20}
              h={20}
              className='cursor-pointer'
            />
            <Image
              path='icons/poll.svg'
              alt=''
              w={20}
              h={20}
              className='cursor-pointer'
            />
            <Image
              path='icons/emoji.svg'
              alt=''
              w={20}
              h={20}
              className='cursor-pointer'
            />
            <Image
              path='icons/schedule.svg'
              alt=''
              w={20}
              h={20}
              className='cursor-pointer'
            />
            <Image
              path='icons/location.svg'
              alt=''
              w={20}
              h={20}
              className='cursor-pointer'
            />
          </div>
          <button className='rounded-full bg-white px-5 py-2 font-bold text-black'>
            Post
          </button>
        </div>
      </div>
    </div>
  )
}

export default PostModal
