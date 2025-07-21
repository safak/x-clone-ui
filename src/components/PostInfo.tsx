import Image from './Image'

const PostInfo = () => {
  return (
    <div className='relative h-4 w-4 cursor-pointer'>
      <Image path='icons/infoMore.svg' alt='more info' w={16} h={16} />
    </div>
  )
}

export default PostInfo
