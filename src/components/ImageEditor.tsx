import React from 'react'
import Image from "@/components/Image";
import NextImage from 'next/image'

const OriginalIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={className}>
    <path d="M3 7.5C3 6.119 4.119 5 5.5 5h13C19.881 5 21 6.119 21 7.5v9c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 19 3 17.881 3 16.5v-9zM5.5 7c-.276 0-.5.224-.5.5v9c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-9c0-.276-.224-.5-.5-.5h-13z"/>
  </svg>
);

const WideIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={className}>
    <path d="M3 9.5C3 8.119 4.119 7 5.5 7h13C19.881 7 21 8.119 21 9.5v5c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 17 3 15.881 3 14.5v-5zM5.5 9c-.276 0-.5.224-.5.5v5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-5c0-.276-.224-.5-.5-.5h-13z"/>
  </svg>
);

const SquareIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={className}>
    <path d="M3 6.5C3 5.119 4.119 4 5.5 4h13C19.881 4 21 5.119 21 6.5v11c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 20 3 18.881 3 17.5v-11zM5.5 6c-.276 0-.5.224-.5.5v11c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-11c0-.276-.224-.5-.5-.5h-13z"/>
  </svg>
);

const BackIcon = ({ className, onClick }: { className?: string, onClick?: () => void }) => (
  <svg width="32" height="32" viewBox="0 0 24 24" className={className} onClick={onClick}>
    <path fill="currentColor" d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z" />
  </svg>
);

const ImageEditor = ({onClose, previewURL, settings, onSettingsChange}:{
  onClose: () => void;
  previewURL: string;
  settings: {
    type: "original" | "wide" | "square";
    sensitive: boolean;
  };
  onSettingsChange: React.Dispatch<
  React.SetStateAction<{
    type: "original" | "wide" | "square";
    sensitive: boolean;
  }>
  >;
}) => {
  const handleChangeSensitive = () => {
    onSettingsChange(prev => ({ ...prev, sensitive: !prev.sensitive }));
  };
  const handleChangeType = (type: "original" | "wide" | "square") => {
    onSettingsChange(prev => ({ ...prev, type }));
  };
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black/75 z-10 flex items-center justify-center">
      <div className="bg-black rounded-xl p-12 flex flex-col gap-4">
        {/* TOP */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            {/* <svg onClick={onClose} className="cursor-pointer" width="32" height="32" viewBox="0 0 24 24">
              <path fill="white"
                d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"
              />
            </svg> */}
            <NextImage src="/icons/back.svg" alt="back" width={32} height={32} className="cursor-pointer" onClick={onClose} />
            <h1 className="font-bold text-xl">Media Settings</h1>
          </div>
          <button onClick={onClose} className="bg-white text-black font-bold py-2 px-4 rounded-full">Save</button>
        </div>
        {/* IMAGE CONTAINER */}
        <div className="w-[600px] h-[600px] flex items-center justify-center">
          <NextImage src={previewURL} alt="" width={600} height={600} 
            className={`w-full ${
              settings.type === "original" 
                ? "h-full object-cover" 
                : settings.type === "square" 
                ? "aspect-square object-cover" 
                : "aspect-video object-cover"
            }`}
          />
        </div>
        {/* SETTINGS */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleChangeType("original")}>
              <OriginalIcon className={`w-5 h-5 ${settings.type === "original" ? "text-iconBlue fill-current" : "text-iconGray fill-current"}`} />
              <span>Original</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleChangeType("wide")}>
              <WideIcon className={`w-5 h-5 ${settings.type === "wide" ? "text-iconBlue fill-current" : "text-iconGray fill-current"}`} />
              <span>Wide</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleChangeType("square")}>
              <SquareIcon className={`w-5 h-5 ${settings.type === "square" ? "text-iconBlue fill-current" : "text-iconGray fill-current"}`} />
              <span>Square</span>
            </div>
          </div>
          <div className={`
            ${settings.sensitive ? "bg-red-500" : "bg-white"}
            py-1
            px-4
            rounded-full
            cursor-pointer
            text-black
          `}
            onClick={handleChangeSensitive}
          >Sensitive</div>
        </div>
       
      </div>
    </div>
  )
}

export default ImageEditor
