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
				<div className='flex flex-col lg:flex-row justify-between items-start lg:items-center p-8 lg:px-8 bg-thistle lg:h-[200px] '>
					<div className='flex min-w-[300px]'>
						<Image
							className='w-[90px] h-[90px] lg:w-[130px] lg:h-[130px] rounded-lg object-cover mr-4'
							src='/team/mouayad_mouayad.png'
							height={300}
							width={300}
						></Image>
						<div className=' flex flex-col justify-center '>
							<p className='md:text-xl font-bold'>{t("people.mouayad.name")}</p>
							<p>{t("people.mouayad.title")}</p>
						</div>
					</div>
					<div className='flex flex-col w-full py-6 lg:py-0 lg:w-3/6'>
						<p>{t("people.mouayad.bio")}</p>
					</div>
					<div className='flex flex-col justify-center'>
						<button className='w-36 h-[50px] rounded-2xl text-white glass-effect'>
							{t("contact.book_meeting.btn_label")}
						</button>
					</div>
				</div>
			</div>
		</CenterLayout>
	);
}

export default BookMeeting;
