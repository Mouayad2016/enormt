import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import CenterLayout from "./components/CenterLayout";
import Image from "next/image";

function TextHeader({
	title,
	description,
	light_bg_opacity,
	shortHeight,
	isRelative,
}: any) {
	const { t } = useTranslation("common");
	const { locale } = useRouter();
	const isRTL = locale === "ar";
	return (
		<div
			className={`${
				isRelative ? "relative" : "absolute"
			}  top-0 left-0 w-full h-screen max-h-[1024px] ${
				shortHeight ? "sm:h-[800px] " : "sm:h-[800px]"
			} flex flex-col justify-center bg-black ${
				light_bg_opacity
					? "bg-opacity-0 text-zinc-600"
					: "bg-opacity-45 text-white"
			} z-10 `}
		>
			<div className='flex flex-col sm:justify-center justify-center'>
				<CenterLayout>
					<div className='relative z-30  flex flex-col items-start justify-center md:justify-start mt-20 mb-20'>
						<div className='max-w-4xl xl:max-w-6xl'>
							<h1
								className={` xl:text-7xl lg:text-6xl md:text-6xl sm:text-5xl text-4xl font-bold ${
									isRTL ? "font-notokufi" : "font-archivo"
								}`}
							>
								{title}
							</h1>
						</div>
						<div className='h-6'></div>
						<div className='lg:max-w-3xl md:max-w-2xl sm:max-w-xl'>
							<p className=' text-lg md:text-xl lg:text-2xl  font-bold '>
								{description}
							</p>
						</div>
						<div className='h-6'></div>
					</div>
				</CenterLayout>
			</div>
		</div>
	);
}

export default TextHeader;
