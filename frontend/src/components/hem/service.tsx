import DevOPs from "./assets/devops.svg"; // Import the SVG as a component
import OpenAI from "./assets/openai.svg"; // Import the SVG as a component
import Google from "./assets/google.svg"; // Import the SVG as a component
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ServiceProps = {
	className?: string;
	title: string;
	desc?: string;
	link: string;
	linkLable: string;
	fastPrice?: boolean;
	seo?: boolean;
	responsive?: boolean;
	allDevices?: boolean;
	auto?: boolean;
	ladingpage?: boolean;
	unikDesign?: boolean;
	anpassningabr?: boolean;
	garanti?: boolean;
	support?: boolean;
	organisk_trafik?: boolean;
	nyckelord?: boolean;
	SEO_rapporter?: boolean;
	Konkurrentanalys?: boolean;
	seo_service?: boolean;
	Optimerat_innehåll?: boolean;
	grafikDesign?: boolean;
	SEM_marknadsföring?: boolean;
	IT_konsultation?: boolean;
	security?: boolean;
};
const Service: React.FC<ServiceProps> = ({
	className,
	title,
	desc,
	link,
	linkLable,
	responsive,
	fastPrice,
	seo,
	garanti,
	support,
	anpassningabr,
	unikDesign,
	allDevices,
	ladingpage,
	organisk_trafik,
	nyckelord,
	SEO_rapporter,
	Konkurrentanalys,
	seo_service,
	Optimerat_innehåll,
	grafikDesign,
	SEM_marknadsföring,
	IT_konsultation,
	security,
	auto,
}) => {
	const router = useRouter();
	const handleNavigation = () => {
		router.push("/contact"); // or whatever your desired URL is
	};
	const titleParts = title.split("|");

	return (
		// <a href="/contact" >

		<div className='parent m-sm-3'>
			<div className='card_service'>
				<div className='logo'>
					<span className='circle circle1'></span>
					<span className='circle circle2'></span>
					<span className='circle circle3'></span>
					<span className='circle circle4'></span>
					<span className='circle circle5'>
						<Image
							blurDataURL='data:image/jpeg;base64,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'
							placeholder='blur'
							src='/assets/img/enormt/logo/logo-round-wight.png'
							alt='Description'
							height={50}
							width={50}
						/>
					</span>
				</div>
				<div className='glass'></div>
				<div className='content'>
					<div className='content-service-div'>
						<p className='title'>
							{titleParts.map((part, index) => (
								<React.Fragment key={index}>
									{part}
									{index !== titleParts.length - 1 && <br />}
								</React.Fragment>
							))}
						</p>
						<p className='text'>{desc}</p>
					</div>
					{responsive ? (
						<>
							<br />
							<span className='text-light'>
								<span className='service-green me-sm-3'>
									<FontAwesomeIcon
										className='fw-size-fixer'
										icon={"check"}
									></FontAwesomeIcon>
								</span>
								Responsiv
							</span>
						</>
					) : (
						""
					)}
					{fastPrice ? (
						<>
							<br />
							<span className='text-light'>
								<span className='service-green me-sm-3'>
									<FontAwesomeIcon
										className='fw-size-fixer'
										icon={"check"}
									></FontAwesomeIcon>
								</span>
								Fasta priser
							</span>
						</>
					) : (
						""
					)}

					{seo ? (
						<>
							<br />
							<span className='text-light'>
								<span className='service-green me-sm-3'>
									<FontAwesomeIcon
										className='fw-size-fixer'
										icon={"check"}
									></FontAwesomeIcon>
								</span>
								Sökmotoroptimering
							</span>
						</>
					) : (
						""
					)}
					{garanti ? (
						<>
							<br />
							<span className='text-light'>
								<span className='service-green me-sm-3'>
									<FontAwesomeIcon
										className='fw-size-fixer'
										icon={"check"}
									></FontAwesomeIcon>
								</span>
								12 Mån garanti
							</span>
						</>
					) : (
						""
					)}
					{auto ? (
						<>
							<br />
							<span className='text-light'>
								<span className='service-green me-sm-3'>
									<FontAwesomeIcon
										className='fw-size-fixer'
										icon={"check"}
									></FontAwesomeIcon>
								</span>
								Automatisering
							</span>
						</>
					) : (
						""
					)}
					{support ? (
						<>
							<br />
							<span className='text-light'>
								<span className='service-green me-sm-3'>
									<FontAwesomeIcon
										className='fw-size-fixer'
										icon={"check"}
									></FontAwesomeIcon>
								</span>
								6 Mån IT-support
							</span>
						</>
					) : (
						""
					)}
					{anpassningabr ? (
						<>
							<br />
							<span className='text-light'>
								<span className='service-green me-sm-3'>
									<FontAwesomeIcon
										className='fw-size-fixer'
										icon={"check"}
									></FontAwesomeIcon>
								</span>
								Anpassningsbar
							</span>
						</>
					) : (
						""
					)}
					{unikDesign ? (
						<>
							<br />
							<span className='text-light'>
								<span className='service-green me-sm-3'>
									<FontAwesomeIcon
										className='fw-size-fixer'
										icon={"check"}
									></FontAwesomeIcon>
								</span>
								Unik design
							</span>
						</>
					) : (
						""
					)}
					{allDevices ? (
						<>
							<br />
							<span className='text-light'>
								<span className='service-green me-sm-3'>
									<FontAwesomeIcon
										className='fw-size-fixer'
										icon={"check"}
									></FontAwesomeIcon>
								</span>
								Både IOS och Android
							</span>
						</>
					) : (
						""
					)}
					{ladingpage ? (
						<>
							<br />
							<span className='text-light'>
								<span className='service-green me-sm-3'>
									<FontAwesomeIcon
										className='fw-size-fixer'
										icon={"check"}
									></FontAwesomeIcon>
								</span>
								Landing page
							</span>
						</>
					) : (
						""
					)}

					{organisk_trafik ? (
						<>
							<br />
							<span className='text-light'>
								<span className='service-green me-sm-3'>
									<FontAwesomeIcon
										className='fw-size-fixer'
										icon={"check"}
									></FontAwesomeIcon>
								</span>
								Ökad organisk trafik
							</span>
						</>
					) : (
						""
					)}
					{nyckelord ? (
						<>
							<br />
							<span className='text-light'>
								<span className='service-green me-sm-3'>
									<FontAwesomeIcon
										className='fw-size-fixer'
										icon={"check"}
									></FontAwesomeIcon>
								</span>
								Rätt nyckelord för din bransch
							</span>
						</>
					) : (
						""
					)}
					{SEO_rapporter ? (
						<>
							<br />
							<span className='text-light'>
								<span className='service-green me-sm-3'>
									<FontAwesomeIcon
										className='fw-size-fixer'
										icon={"check"}
									></FontAwesomeIcon>
								</span>
								Regelbundna SEO-rapporter
							</span>
						</>
					) : (
						""
					)}
					{Konkurrentanalys ? (
						<>
							<br />
							<span className='text-light'>
								<span className='service-green me-sm-3'>
									<FontAwesomeIcon
										className='fw-size-fixer'
										icon={"check"}
									></FontAwesomeIcon>
								</span>
								Konkurrentanalys
							</span>
						</>
					) : (
						""
					)}
					{Optimerat_innehåll ? (
						<>
							<br />
							<span className='text-light'>
								<span className='service-green me-sm-3'>
									<FontAwesomeIcon
										className='fw-size-fixer'
										icon={"check"}
									></FontAwesomeIcon>
								</span>
								Optimerat innehåll för engagemang
							</span>
						</>
					) : (
						""
					)}
					{seo_service ? (
						<>
							<br />
							<span className='text-light'>
								<span className='service-green me-sm-3'>
									<FontAwesomeIcon
										className='fw-size-fixer'
										icon={"check"}
									></FontAwesomeIcon>
								</span>
								Toppa listan på sökmotorer
								<br />
								<span className='service-green me-sm-3'>
									<FontAwesomeIcon
										className='fw-size-fixer'
										icon={"check"}
									></FontAwesomeIcon>
								</span>
								Uppföljning och uppdateringar
							</span>
						</>
					) : (
						""
					)}
					{grafikDesign ? (
						<>
							<br />
							<span className='text-white'>
								<span className='service-green me-sm-3'>
									<FontAwesomeIcon
										className='fw-size-fixer'
										icon={"check"}
									></FontAwesomeIcon>
								</span>
								UX & UI <br />
								<span className='service-green me-sm-3'>
									<FontAwesomeIcon
										className='fw-size-fixer'
										icon={"check"}
									></FontAwesomeIcon>
								</span>
								Responsiv design <br />
							</span>
						</>
					) : (
						""
					)}
					{SEM_marknadsföring ? (
						<>
							<br />
							<span className='text-light'>
								<span className='service-green me-sm-3'>
									<FontAwesomeIcon
										className='fw-size-fixer'
										icon={"check"}
									></FontAwesomeIcon>
								</span>
								Riktade annonser mot rätt folk
								<br />
								<span className='service-green me-sm-3'>
									<FontAwesomeIcon
										className='fw-size-fixer'
										icon={"check"}
									></FontAwesomeIcon>
								</span>
								Syns på toppen i sökresultat
								<br />
							</span>
						</>
					) : (
						""
					)}
					{IT_konsultation ? (
						<>
							<br />
							<span className='text-light'>
								<span className='service-green me-sm-3'>
									<FontAwesomeIcon
										className='fw-size-fixer'
										icon={"check"}
									></FontAwesomeIcon>
								</span>
								Välj bland 50 konsulter
								<br />
								<span className='service-green me-sm-3'>
									<FontAwesomeIcon
										className='fw-size-fixer'
										icon={"check"}
									></FontAwesomeIcon>
								</span>
								Nytta garanti <br />
							</span>
						</>
					) : (
						""
					)}
				</div>

				<div className='bottom'>
					<div className='social-buttons-container'>
						<div className='social-button .social-button1'>
							<Google className='svg' />
						</div>
						<div className='social-button .social-button2'>
							<OpenAI className='svg' />
						</div>
						<div className='social-button .social-button3'>
							<DevOPs className='svg' />
						</div>
					</div>
					<div className='view-more'>
						<Link prefetch={false} href={link}>
							<button className='view-more-button service-link'>
								{linkLable}
							</button>
						</Link>
						<svg
							className='svg'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							stroke-linecap='round'
							stroke-linejoin='round'
						>
							<path d='m6 9 6 6 6-6'></path>
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Service;
