import React from "react";
import ServiceProps from "./service";

const CryptoCustomerCounter = () => {
	return (
		<section
			className='crypto-customer-counter bg-dark-black ptb-60 home-service-background'
			id='services'
		>
			<div className='container'>
				<div className='counter-content section-title mb-30'>
					<h2 className='mb-md-5 text-dark justify-content-cente text-center'>
						Växande utbud av IT-lösningar
					</h2>
					{/* <h2 className='mb-4 text-dark res-fs-5 text-center'>
						Alla våra lösningar kommer med
						<span className='text-info'> 12 mån garanti</span> och
						<span className='text-info'> 6 månader IT-suppor</span>
					</h2> */}
					<p className='res-fs-5 text-center'>
						Vi specialiserar oss på att skapa digitala lösningar av högsta
						klass, skräddarsydda för dina unika behov. Genom att använda den
						senaste teknologin och innovativa strategier, designar vi produkter
						och tjänster som inte bara uppfyller dagens krav, utan även
						förbereder dig för framtida framgångar.
					</p>
				</div>
				<div className='justify-content-center'>
					<div className='grid-container justify-content-center '>
						<ServiceProps
							title='Webbutveckling'
							desc='Anpassade webbapplikationer för alla plattformar.'
							responsive={true}
							link='service/Webbutveckling'
							linkLable='Läs mer'
							seo={true}
							unikDesign={true}
						/>
						<ServiceProps
							title='Mobilapp-|utveckling'
							desc='Utveckling av mobilappar för både Android och iOS.'
							responsive={true}
							link='service/Mobilappar'
							linkLable='Läs mer'
							unikDesign={true}
							allDevices={true}
						/>
						<ServiceProps
							title='IT-System'
							desc='Helhetslösningar för att effektivisera er verksamhet.'
							link='service/IT-system'
							linkLable='Läs mer'
							garanti={true}
							support={true}
							auto={true}
						/>
						<ServiceProps
							title='Grafisk design'
							desc='Skapa unika och tilltalande designlösningar.'
							link='contact'
							linkLable='Kontakta oss'
							fastPrice={true}
							grafikDesign={true}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CryptoCustomerCounter;
