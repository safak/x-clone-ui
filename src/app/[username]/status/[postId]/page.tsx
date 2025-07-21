import Comments from '@/components/Comments'
import Image from '@/components/Image'
import Post from '@/components/Post'
import Link from 'next/link'

const StatusPage = () => {
  return (
    <div className=''>
      <div className='sticky top-0 z-10 flex items-center gap-8 bg-[#00000084] p-4 backdrop-blur-md'>
        <Link href='/'>
          <Image path='icons/back.svg' alt='back' w={24} h={24} />
        </Link>
        <h1 className='text-lg font-bold'>Post</h1>
      </div>
      <Post type="status"/>
      <Comments />
    </div>
  )
}

export default StatusPage
