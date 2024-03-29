import Link from "next/link";
import CustomButtonExample from "./boka_möte";
import HomeAnimation from "./homeAnimation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const HeroNine = () => {
	return (
		<section className='gradient-backgroud hero-nine-bg ptb-120'>
			<div className='container'>
				<div className='row align-items-center'>
					<div className='col-lg-6 col-md-10'>
						<div className='hero-content-wrap mt-5 mt-lg-0 mt-xl-0'>
							<h1 className='fw-bold display-5 text-dark pt-5 text-center-mobile'>
								Vi Tar Ditt Företag Till Nästa Nivå
							</h1>
							<p className='text-dark res-fs-5 text-center-mobile'>
								Vi stöttar våra klienter genom den digitala transformationen och
								erbjuder högkvalitativa, skräddarsydda lösningar. Med{" "}
								<span className='text-info fw-bolder'>
									<FontAwesomeIcon
										className='fw-size-fixer'
										icon='fa-check'
										size='1x'
									></FontAwesomeIcon>{" "}
									12 månaders garanti
								</span>
								<span> och </span>
								<span className='text-info fw-bolder'>
									<FontAwesomeIcon
										className='fw-size-fixer'
										icon='fa-check'
										size='1x'
									></FontAwesomeIcon>{" "}
									6 månaders IT-support{" "}
								</span>
								är vår ambition att leverera innovativa och säkra lösningar för
								en mer hållbar framtid.
							</p>
							<div className='action-btn mt-5 align-items-center d-block d-sm-flex d-lg-flex d-md-flex text-center-mobile'>
								<CustomButtonExample className={"btn me-3 btn-soft-primary"} />

								<Link
									href='/contact'
									data-scroll-to='.contact-promo'
									className={"btn me-3 btn-soft-primary"}
								>
									Kontakta oss
								</Link>
							</div>
						</div>
					</div>
					<div className='col-lg-6'>
						<div
							className='hero-img position-relative mt-5 mt-lg-0'
							id='hero-div'
						>
							<HomeAnimation></HomeAnimation>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroNine;
