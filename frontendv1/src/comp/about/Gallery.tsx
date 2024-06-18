import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Image from "next/image";
import CenterLayout from "../components/CenterLayout";

function ImagesGallery() {
	const { t } = useTranslation("common");
	const { locale } = useRouter();
	const isRTL = locale === "ar";
	return (
		<CenterLayout>
			<div className='h-full flex flex-col justify-between bg-white pb-12'>
				<div className='flex flex-col lg:flex-row  lg:pt-16  justify-around items-center'>
					<div
						className={`flex-col p-4 text-black w-full text-md lg:text-lg xl:text-xl lg:w-1/2  ${
							isRTL ? "lg:ml-6 font-notokufi" : "lg:mr-6"
						} pb-4`}
					>
						<p
							className={`text-xl md:text-2xl lg:text-3xl xl:text-4xl ${
								isRTL ? "font-notokufi" : "font-mono"
							} font-bold`}
						>
							{t("about_us.passion.title")}
						</p>
						<p className='pt-4'>{t("about_us.passion.description_one")}</p>

						<p className='pt-4'>{t("about_us.passion.description_two")}</p>
					</div>
					<div className='flex items-center justify-end  w-full lg:w-1/2 h-[400px] mt-4 lg:mt-0 lg:h-[600px]'>
						<video
							autoPlay
							loop
							muted
							className='border-4 border-thistle w-full h-full object-cover rounded-xl shadow-xl'
						>
							<source src='/videos/sveasoft_ab.mp4' type='video/mp4' />
						</video>
					</div>
				</div>
				<div className='h-[25px] md:h-[100px]'></div>

				<div className='flex flex-col-reverse lg:flex-row w-full  justify-around items-center'>
					<div className='flex items-center justify-start h-[400px] w-full mt-4 lg:mt-0  lg:w-1/2 lg:h-[300px]'>
						<video
							autoPlay
							loop
							muted
							className='object-cover w-full h-full rounded-xl shadow-xl border-4 border-black'
						>
							<source src='/videos/UltraSphere.mp4' type='video/mp4' />
						</video>
					</div>
					<div
						className={`flex-col p-2  w-full text-black lg:w-1/2 ${
							isRTL ? "lg:mr-6" : "lg:ml-12"
						} pb-4`}
					>
						<p
							className={`text-xl md:text-2xl lg:text-3xl xl:text-4xl ${
								isRTL ? "font-notokufi" : "font-mono"
							} font-bold`}
						>
							{t("about_us.constant_learning.title")}
						</p>
						<p className='text-black pt-4'>
							{t("about_us.constant_learning.description_one")}
						</p>

						<p className='text-black pt-4'>
							{t("about_us.constant_learning.description_two")}
						</p>
					</div>
				</div>
				<div className='h-[25px] md:h-[100px]'></div>

				<div className='flex flex-col lg:flex-row w-full  justify-around items-center'>
					<div
						className={`flex-col text-black w-full lg:w-1/2 ${
							isRTL ? "lg:ml-12" : "lg:mr-12"
						} pb-4`}
					>
						<p
							className={`text-xl md:text-2xl lg:text-3xl xl:text-4xl ${
								isRTL ? "font-notokufi" : "font-mono"
							} font-bold`}
						>
							{t("about_us.your_success_is_ours.title")}
						</p>
						<p className='text-black pt-4'>
							{t("about_us.your_success_is_ours.description_one")}
						</p>
						<p className='text-black pt-4'>
							{t("about_us.your_success_is_ours.description_two")}
						</p>
					</div>
					<div className='flex items-center justify-end w-full lg:w-1/2 mt-4'>
						<Image
							alt='About SveaSoft AB'
							className='relative rounded-lg object-cover  w-full h-full  shadow-lg '
							width={800}
							height={800}
							src='/images/about/sveasoft_ab_about_3.jpg'
						></Image>
					</div>
				</div>
			</div>
		</CenterLayout>
	);
}

export default ImagesGallery;
