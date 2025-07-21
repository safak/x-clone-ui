import Link from 'next/link'
import Image from './Image'

const menuList = [
  {
    id: 1,
    name: 'Homepage',
    link: '/',
    icon: 'home.svg',
  },
  {
    id: 2,
    name: 'Explore',
    link: '/',
    icon: 'explore.svg',
  },
  {
    id: 3,
    name: 'Notification',
    link: '/',
    icon: 'notification.svg',
  },
  {
    id: 4,
    name: 'Messages',
    link: '/',
    icon: 'message.svg',
  },
  {
    id: 5,
    name: 'Bookmarks',
    link: '/',
    icon: 'bookmark.svg',
  },
  {
    id: 6,
    name: 'Jobs',
    link: '/',
    icon: 'job.svg',
  },
  {
    id: 7,
    name: 'Communities',
    link: '/',
    icon: 'community.svg',
  },
  {
    id: 8,
    name: 'Premium',
    link: '/',
    icon: 'logo.svg',
  },
  {
    id: 9,
    name: 'Profile',
    link: '/',
    icon: 'profile.svg',
  },
  {
    id: 10,
    name: 'More',
    link: '/',
    icon: 'more.svg',
  },
]

const LeftBar = () => {
  return (
    <div className='sticky top-0 flex h-screen flex-col justify-between pb-8 pt-2'>
      {/* LOGO MENU BUTTON */}
      <div className='flex flex-col items-center gap-4 text-lg xxl:items-start'>
        {/* LOGO */}
        <Link href='/' className='rounded-full p-2 hover:bg-[#181818]'>
          <Image path='icons/logo.svg' alt='logo' w={24} h={24} />
        </Link>
        {/* Menu list */}
        <div className='flex flex-col gap-4'>
          {menuList.map((item) => (
            <Link
              href={item.link}
              className='flex items-center gap-4 rounded-full p-2 hover:bg-[#181818]'
              key={item.id}
            >
              <Image
                path={`icons/${item.icon}`}
                alt={item.name}
                w={24}
                h={24}
              />
              <span className='hidden xxl:inline'>{item.name}</span>
            </Link>
          ))}
        </div>
        {/* Button */}
        <Link
          href='/compose/post'
          className='flex h-12 w-12 items-center justify-center rounded-full bg-white text-black xxl:hidden'
        >
          <Image path='icons/post.svg' alt='New Post' w={24} h={24} />
        </Link>
        <Link
          href='/compose/post'
          className='hidden rounded-full bg-white px-20 py-2 font-bold text-black xxl:block'
        >
          Post
        </Link>
      </div>
      {/* USER */}
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <div className='relative h-10 w-10 overflow-hidden rounded-full'>
            <Image
              path='/general/avatar.png'
              alt='Profile Image'
              w={100}
              h={100}
              tr={true}
            />
          </div>
          <div className='hidden flex-col xxl:flex'>
            <span className='font-bold'>Nikola Sepic</span>
            <span className='text-sm text-textGray'>@sepzi</span>
          </div>
        </div>
        <div className='hidden cursor-pointer font-bold xxl:block'>...</div>
      </div>
    </div>
  )
}

export default LeftBar
