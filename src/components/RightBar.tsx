import Link from 'next/link'
import PopularTags from './PopularTags'
import Recommendations from './Recommendations'
import Search from './Search'

const RightBar = () => {
  return (
    <div className='sticky top-0 flex h-max flex-col gap-4 pt-4'>
      <Search />
      <PopularTags />
      <Recommendations />
      <div className='flex flex-wrap gap-x-4 text-sm text-textGray'>
        <Link href='/'>Terms of Service</Link>
        <Link href='/'>Privacy Policy</Link>
        <Link href='/'>Cookie Policy</Link>
        <Link href='/'>Accessibility</Link>
        <Link href='/'>Ads Info</Link>
        <span>© 2025 Sepzi</span>
      </div>
    </div>
  )
}

export default RightBar
