import LeftBar from "@/components/LeftBar";
import "./globals.css";
import RightBar from "@/components/RightBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex justify-between max-w-screen-md xl:max-w-screen-xl xxl:max-w-screen-xxl lg:max-w-screen-lg mx-auto">
          <div className=" px-2 xsm:px-4 xxl:px-8">
            <LeftBar />
          </div>
          <div className="flex-1 md:min-w-[600px] border-x-[1px] border-borderGray">
            {children}
          </div>
          <div className="hidden ml-4 md:ml-8 lg:flex bg-yellow-300 flex-1">
            <RightBar />
          </div>
        </div>
      </body>
    </html>
  );
}
