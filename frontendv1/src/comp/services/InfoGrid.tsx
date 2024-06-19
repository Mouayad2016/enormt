import Link from "next/link";
import CenterLayout from "../components/CenterLayout";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Image from "next/image";

function InfoGrid({ title, info }: any) {
	const { t } = useTranslation("common");
	const { locale } = useRouter();
	const isRTL = locale === "ar";

	return (
		<div className='flex flex-col justify-between pb-12 pt-6  bg-white text-black'>
			<CenterLayout>
				<div className='relative flex flex-col items-start justify-center md:justify-start mt-4 mb-8 md:mt-8 lg:mt-16 md:mb-8 '>
					<div className='max-w-2xl lg:max-w-3xl'>
						<h1
							className={` lg:text-6xl md:text-4xl text-3xl font-bold ${
								isRTL ? "font-notokufi" : "font-archivo"
							}`}
						>
							{title}
						</h1>
					</div>
				</div>

				<div
					className={`flex flex-wrap ${isRTL ? " font-notokufi" : "font-mono"}`}
				>
					{info.map(([title, desc], i) => (
						<div
							key={i}
							className={`w-full ${
								isRTL ? "md:pl-8" : "md:pr-8"
							}  flex flex-col justify-between`}
						>
							<p className='py-8 font-bold text-lg xl:text-xl'>{title}</p>
							<p className='text-md xl:text-lg'>{desc}</p>
							<div className='w-full border-[0.1px] border-black my-12'></div>
						</div>
					))}
				</div>
			</CenterLayout>
		</div>
	);
}

export default InfoGrid;
