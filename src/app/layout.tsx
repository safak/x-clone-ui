import LeftBare from "./comonents/LeftBare";
import RightBar from "./comonents/RightBar";
import "./globals.css";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<div className="max-w-screen-md lg:max-w-screen-lg mx-auto  xl:max-w-screen-xl xxl:max-w-screen-xxl flex justify-between ">
					<div className="px-2 xsm:px-4 xxl:px-8">
						<LeftBare />
					</div>

					<div className="flex-1 lg:min-w-[600px] border-x-[1px]  border-borderGray">
						{children}
					</div>
					<div className=" hidden lg:flex md:ml-8 ml-4 flex-1 ">
						<RightBar />
					</div>
				</div>
			</body>
		</html>
	);
}
