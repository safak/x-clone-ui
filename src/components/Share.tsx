'use client'

import { shareAction } from '@/actions'
import NextImage from 'next/image'
import { useState } from 'react'
import Image from './Image'
import ImageEditor from './ImageEditor'

const Share = () => {
  const [media, setMedia] = useState<File | null>(null)
  const [isEditorOpen, setIsEditorOpen] = useState(false)
  const [settings, setSettings] = useState<{
    type: 'original' | 'wide' | 'square'
    sensitive: boolean
  }>({
    type: 'original',
    sensitive: false,
  })

  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMedia(e.target.files[0])
    }
  }

  const previewURL = media ? URL.createObjectURL(media) : null

  return (
    <form
      className='flex gap-4 p-4'
      action={(formData) => shareAction(formData, settings)}
    >
      <div className='relative h-10 w-10 overflow-hidden rounded-full'>
        {/* Avatar */}
        <Image path='general/avatar.png' alt='avatar' w={100} h={100} tr />
      </div>

      {/* Others */}
      <div className='flex flex-1 flex-col gap-4'>
        <input
          type='text'
          name='desc'
          placeholder='What is happening?!'
          className='bg-transparent text-xl outline-none placeholder:text-textGray'
        />
        {/* Preview Image */}
        {media?.type.includes('image') && previewURL && (
          <div className='relative overflow-hidden rounded-xl'>
            <NextImage
              src={previewURL}
              alt=''
              width={600}
              height={600}
              className={`w-full ${settings.type === 'original' ? 'h-full object-contain' : settings.type === 'square' ? 'aspect-square object-cover' : 'aspect-video object-cover'}`}
            />
            <div
              className='absolute left-2 top-2 cursor-pointer rounded-full bg-black bg-opacity-50 px-4 py-1 text-sm font-bold text-white'
              onClick={() => setIsEditorOpen(true)}
            >
              Edit
            </div>
            <div
              className='absolute right-2 top-2 flex h-8 w-8 cursor-pointer items-center justify-center text-wrap rounded-full bg-black bg-opacity-50 text-sm font-bold'
              onClick={() => setMedia(null)}
            >
              X
            </div>
          </div>
        )}
        {media?.type.includes('video') && previewURL && (
          <div className='relative'>
            <video src={previewURL} controls></video>
            <div
              className='absolute right-2 top-2 flex h-8 w-8 cursor-pointer items-center justify-center text-wrap rounded-full bg-black bg-opacity-50 text-sm font-bold'
              onClick={() => setMedia(null)}
            >
              X
            </div>
          </div>
        )}

        {isEditorOpen && previewURL && (
          <ImageEditor
            onClose={() => setIsEditorOpen(false)}
            previewURL={previewURL}
            settings={settings}
            setSettings={setSettings}
          />
        )}

        <div className='flex flex-wrap items-center justify-between gap-4'>
          <div className='flex flex-wrap gap-4'>
            <input
              type='file'
              name='file'
              onChange={handleMediaChange}
              className='hidden'
              id='file'
              accept='image/*,video/*'
            />
            <label htmlFor='file'>
              <Image
                path='icons/image.svg'
                alt=''
                w={20}
                h={20}
                className='cursor-pointer'
              />
            </label>
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

          <button className='rounded-full bg-white px-4 py-2 font-bold text-black'>
            Post
          </button>
        </div>
      </div>
    </form>
  )
}

export default Share
