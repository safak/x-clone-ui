'use client'

import { IKVideo } from 'imagekitio-next'

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT

type VideoTypes = {
  path: string
  className?: string
}

const Video = ({ path, className }: VideoTypes) => {
  return (
    <IKVideo
      urlEndpoint={urlEndpoint}
      transformation={[
        { width: '1920', height: '1080', q: '90' },
        { raw: 'l-text, i-Sepzi,fs-100,co-white,l-end' },
      ]}
      controls
    />
  )
}

export default Video
