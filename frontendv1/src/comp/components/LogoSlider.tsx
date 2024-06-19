import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";

const slides = [
	"/logos/klarna.svg",
	"/logos/dhl.svg",
	"/logos/nordea.svg",
	"/logos/paybal.svg",
	"/logos/swish.svg",
	// "/logos/trustly.svg",
	// "/logos/transportstyrelsen.svg",
	// "/logos/microsoft.svg",
];

const LogoSlider = () => {
	const duplicatedSlides = [...slides, ...slides];
	const { locale } = useRouter();
	const isRTL = locale === "ar";
	return (
		<div>
			<div className='relative w-full overflow-hidden z-30'>
				<div className={`absolute inset-0 z-20 `}></div>
				<motion.div
					className='flex'
					animate={{
						x: isRTL ? ["0%", "100%"] : ["-100%", "0%"],
						transition: {
							ease: "linear",
							duration: 15,
							repeat: Infinity,
						},
					}}
				>
					{duplicatedSlides.map((slide, index) => (
						<div
							key={index}
							className='flex-shrink-0 opacity-50'
							style={{ width: `${100 / slides.length}%` }}
						>
							<div className='flex items-center justify-center h-full  px-4'>
								<Image
									alt='Swedish companies logos'
									className='h-22 w-22 object-contain'
									src={slide}
									height={120}
									width={120}
								></Image>
							</div>
						</div>
					))}
				</motion.div>
			</div>
		</div>
	);
};

export default LogoSlider;
