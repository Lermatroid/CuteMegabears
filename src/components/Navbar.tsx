import { type FunctionComponent } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: FunctionComponent = () => {
	return (
		<div className="font-inter fixed z-50 h-[4.5rem] w-full bg-gray-500 p-1 text-xl text-white drop-shadow-lg">
			<div className="xs:px-1 mx-auto flex h-full w-full max-w-[100vw] justify-between px-0.5 sm:px-6 md:px-16 lg:pr-32">
				<Link href="/">
					<div className="mx-1 flex h-full cursor-pointer items-center sm:mx-2">
						<Image
							alt="ACM-UTSA Logo"
							src="/img/logo.png"
							className="aspect-square grayscale"
							width={40}
							height={40}
						/>
					</div>
				</Link>
				<div className="font-inter flex grow items-center justify-end text-base">
					<div className="flex items-center gap-2 sm:gap-3">
						<Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Home</Link>
						<Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Team</Link>
						<Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
							Calender
						</Link>
						<Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
							Sub Orgs
						</Link>
						<Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
							Sponsorship
						</Link>
						<Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
							Donate
						</Link>
						<Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
							Resources
						</Link>
						<Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
							Membership Portal
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
