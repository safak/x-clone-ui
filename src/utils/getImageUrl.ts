// utils/getImageUrl.ts
export const getImageUrl = (path: string, options?: { w?: number; h?: number }) => {
    const base = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT;
    const transforms = [];
  
    if (options?.w) transforms.push(`w-${options.w}`);
    if (options?.h) transforms.push(`h-${options.h}`);
  
    const transformString = transforms.length ? `tr:${transforms.join(',')}` : '';
    return `${base}/${transformString}/${path}`;
  };
  