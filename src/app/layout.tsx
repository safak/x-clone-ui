import LeftBar from "@/components/left-bar";
import "./globals.css";
import RightBar from "@/components/right-bar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl mx-auto flex justify-between">
          <div className="px-2 xsm:px-4 xxl:pr-8 xxl:pl-0">
            <LeftBar />
          </div>
          <div className="flex-1 lg:min-w-[600px] border-x-[1px] border-borderGray">
            {children}
          </div>
          <div className="hidden lg:flex ml-4 md:ml-8 flex-1">
            <RightBar />
          </div>
        </div>
      </body>
    </html>
  );
}
