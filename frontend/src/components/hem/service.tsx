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
							src='/assets/img/enormt/logo/logo-round-wight.png'
							alt='Description'
							height={80}
							width={200}
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
						<a className='social-button .social-button1'>
							<Google className='svg' />
						</a>
						<a className='social-button .social-button2'>
							<OpenAI className='svg' />
						</a>
						<a className='social-button .social-button3'>
							<DevOPs className='svg' />
						</a>
					</div>
					<div className='view-more'>
						<Link href={link}>
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
