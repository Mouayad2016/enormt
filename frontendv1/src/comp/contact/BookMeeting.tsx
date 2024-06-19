import CenterLayout from "@/comp/components/CenterLayout";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Image from "next/image";
function BookMeeting() {
	const { t } = useTranslation("common");
	const { locale } = useRouter();
	const isRTL = locale === "ar";
	return (
		<CenterLayout>
			<div className='text-white mb-12  '>
				<h1
					className={` lg:text-4xl md:text-2xl text-xl font-bold text-black ${
						isRTL ? "font-notokufi" : "font-archivo"
					}`}
				>
					{t("contact.book_meeting.title")}
				</h1>
				<div className='w-full h-[0.5px] bg-gray-700 my-8'></div>
				<div className='flex flex-col lg:flex-row justify-between items-start lg:items-center p-6 lg:px-8 bg-thistle lg:gap-5 '>
					<div className='flex min-w-[250px] gap-5 '>
						<Image
							className={`w-[90px] h-[90px] lg:w-[130px] lg:h-[130px] rounded-lg object-cover`}
							src='/team/mouayad_mouayad.png'
							height={300}
							width={300}
						></Image>
						<div className='flex flex-col justify-center '>
							<p className='text-xl text-wrap font-bold'>
								{t("people.mouayad.name")}
							</p>
							<p className='text-lg'>{t("people.mouayad.title")}</p>
						</div>
					</div>
					<div className='flex flex-col w-full py-6 lg:py-0 text-lg my-2'>
						<p>{t("people.mouayad.bio")}</p>
					</div>
					<div className='flex flex-col justify-center'>
						<button
							className={`w-36 h-[50px] rounded-2xl text-white glass-effect text-lg ${
								isRTL ? "font-notokufi" : "font-caveat"
							}`}
						>
							{t("contact.book_meeting.btn_label")}
						</button>
					</div>
				</div>
			</div>
		</CenterLayout>
	);
}

export default BookMeeting;
