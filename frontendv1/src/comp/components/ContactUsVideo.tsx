import Image from "next/image";
import CenterLayout from "../components/CenterLayout";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const ContatUsVideo = ({ title, desc }: any) => {
	const { t } = useTranslation("common");
	const { locale } = useRouter();
	const isRTL = locale === "ar";
	return (
		<div className='mb-16'>
			<CenterLayout>
				<div className='flex justify-center text-md lg:text-lg xl:text-xl pb-20 pt-20'>
					<div className='lg:w-[900px] xl:w-[1200px] md:h-[250px] xl:h-[250px] bg-thistle bg-opacity-50 rounded-3xl flex'>
						<div className='h-full w-full glass-effect rounded-3xl'>
							<div className='flex h-full w-full '>
								<div className='z-20 px-8 py-4 flex flex-col justify-around text-white font-archivo text-md lg:text-lg xl:text-xl bg-black  rounded-3xl bg-opacity-30'>
									<p className='font-bold font-mono text-lg lg:text-xl xl:text-2xl'>
										{title}
									</p>
									<p className='mt-2 font-bold'>{desc}</p>
									<button className='py-2 mt-4 max-w-[150px] rounded-full font-caveat  glass-effect'>
										{t("contact_btn")}
									</button>
								</div>

								<div className='absolute flex items-center justify-start w-full h-full '>
									<video
										autoPlay
										loop
										muted
										className='object-cover w-full h-full rounded-3xl shadow-xl border-4 '
									>
										<source src='/videos/UltraSphere.mp4' type='video/mp4' />
									</video>
								</div>
							</div>
						</div>
					</div>
				</div>
			</CenterLayout>
		</div>
	);
};

export default ContatUsVideo;
