import ImageKit from "imagekit";

export const imagekitServer = new ImageKit({
    publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
    urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
  });
  

export interface FileDetailsResponse {
  filePath: string;
  fileType: string;
  url: string;
  width: number;
  height: number;
  customMetadata?: {
    sensitive?: boolean;
  };
}

export const getFileDetails = async (
  fileId: string
): Promise<FileDetailsResponse | null> => {
  try {
    return await new Promise((resolve, reject) => {
      imagekitServer.getFileDetails(
        fileId,
        (error: unknown, result: unknown) => {
          if (error) reject(error);
          else resolve(result as FileDetailsResponse);
        }
      );
    });
  } catch (err) {
    console.warn("Failed to fetch media:", err);
    return null;
  }
};
