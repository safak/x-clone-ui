import Image from "./Image"
import Post from "./Post"

const Comments = () => {
  return (
    <div className=''>
      <form className='flex items-center justify-between gap-4 p-4 '>
        <div className='relative w-10 h-10 rounded-full overflow-hidden'>
          <Image path="general/avatar.png" alt="Lama Dev" w={100} h={100} tr={true}/>
        </div>
        <input type="text" className="flex-1 bg-transparent outline-none p-2 text-xl" placeholder="Post your reply"/>
        <button className="py-2 px-4 font-bold bg-white text-black rounded-full">Reply</button>
      </form>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
}

export default Comments