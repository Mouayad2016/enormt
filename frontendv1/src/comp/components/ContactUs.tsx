import Image from "next/image";
import CenterLayout from "../components/CenterLayout";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Link from "next/link";

const ContatUs = ({ title, desc, video }: any) => {
	const { t } = useTranslation("common");
	const { locale } = useRouter();
	const isRTL = locale === "ar";
	return (
		<div className='mb-16'>
			<CenterLayout>
				<div className='flex justify-center text-md lg:text-lg xl:text-xl pb-20 pt-20'>
					<div className='lg:w-[900px] xl:w-[1200px] md:h-[250px] xl:h-[250px] bg-thistle bg-opacity-50 rounded-3xl flex'>
						<div className='h-full w-full glass-effect rounded-3xl'>
							<div className='flex flex-col md:flex-row h-full w-full '>
								<div className='z-20 px-8 py-4 flex flex-col justify-around text-black font-archivo text-md lg:text-lg xl:text-xl'>
									<p className='font-bold font-mono text-lg lg:text-xl xl:text-2xl'>
										{title}
									</p>
									<p className='mt-2'>{desc}</p>
									<Link
										href={"/contact"}
										className='py-2 mt-4 max-w-[150px] rounded-full font-caveat text-black glass-effect text-center'
									>
										{t("contact_btn")}
									</Link>
								</div>
								{video == true ? (
									<video
										autoPlay
										loop
										muted
										className={`w-full h-[150px] md:w-1/3 md:h-full object-cover rounded-b-3xl ${
											isRTL
												? "md:rounded-br-none md:rounded-l-3xl"
												: "md:rounded-bl-none md:rounded-r-3xl"
										}   object-center`}
									>
										<source src='/videos/UltraSphere.mp4' type='video/mp4' />
									</video>
								) : (
									<Image
										className={`w-full h-[150px] md:w-1/3 md:h-full object-cover rounded-b-3xl ${
											isRTL
												? "md:rounded-br-none md:rounded-l-3xl"
												: "md:rounded-bl-none md:rounded-r-3xl"
										}   object-center`}
										src={"/images/general/contact_us_1.png"}
										width={1000}
										height={1000}
										alt={"asdas"}
									/>
								)}
							</div>
						</div>
					</div>
				</div>
			</CenterLayout>
		</div>
	);
};

export default ContatUs;
