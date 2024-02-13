import React from "react";
import SectionTitle from "../section/SectionTitle";

const PolicyBody = ({ dark, bgWhite }) => {
	const swiperOption = {
		slidesPerView: 2,
		mousewheel: true,
		spaceBetween: 30,
		slidesPerGroup: 2,
		loop: true,
		navigation: {
			nextEl: ".swiper-nav-control .swiper-button-next",
			prevEl: ".swiper-nav-control .swiper-button-prev",
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			640: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			1024: {
				slidesPerView: 2,
				spaceBetween: 25,
			},
			1142: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
		},
	};
	return (
		<>
			<section
				className={`testimonial-section ${
					dark ? "bg-dark" : "bg-light"
				} ptb-120 ${bgWhite ? "bg-white" : ""}`}
			>
				<div className='container'>
					<div className='row justify-content-center align-content-center'>
						<div className='col-md-10 col-lg-6 pt-60'>
							{dark ? (
								<SectionTitle
									subtitle=''
									title='Policy'
									description='Välkommen till vår IT-tjänst. Genom att använda vår tjänst godkänner du att följa dessa användarvillkor. Om du inte accepterar dessa villkor ska du inte använda vår tjänst.'
									darkBg
									centerAlign
								/>
							) : (
								<SectionTitle
									subtitle=''
									title='Policy'
									description='Välkommen till vår IT-tjänst. Genom att använda vår tjänst godkänner du att följa dessa användarvillkor. Om du inte accepterar dessa villkor ska du inte använda vår tjänst.'
									centerAlign
								/>
							)}
						</div>
					</div>
					<div className='row'>
						<section className='section_one'>
							<div className='container container_one'>
								<div className='row justify-content-center align-content-center'>
									<div className='col-lg-6 order-lg-1 mb-7 mb-lg-0'>
										<div className='mb-4'>
											<h4 className='text-dark'>Service Tillgänglighet</h4>
											<p>
												Vårt mål är att tillhandahålla vår tjänst 24/7 med en
												garanterad drifttid på minst 99%. Skulle det uppstå
												några driftstörningar, förbinder vi oss att snabbt
												åtgärda dessa inom en acceptabel tidsperiod.
											</p>
											<h4 className='text-dark'>Användarvillkor</h4>
											<p>
												Du får inte nyttja vår tjänst på ett sätt som strider
												mot lagar och förordningar eller som kan äventyra
												säkerheten i vårt IT-system eller våra applikationer.
												Användningen får inte heller leda till skada för andra
												användare eller tredje part.
											</p>
											<h4 className='text-dark'>Äganderättsfrågor</h4>
											<p>
												Allt material och innehåll på vår tjänst, såsom texter,
												bilder, grafik, logotyper, varumärken och mjukvara, är
												skyddat enligt upphovsrättsliga och varumärkesrättsliga
												lagar och ägs antingen av oss eller våra licensgivare.
												Du måste ha vårt tillstånd för att använda något av
												dessa material.
											</p>
											<h4 className='text-dark'>Begränsning av Ansvar</h4>
											<p>
												Vi frånsäger oss allt ansvar för direkta eller indirekta
												skador som kan uppstå från användningen av vår tjänst
												eller dess innehåll. Detta inkluderar även eventuella
												förluster eller skador orsakade av virus eller andra
												skadliga kodstycken.
											</p>
											<h4 className='text-dark'>
												Ändringar av Användarvillkor
											</h4>
											<p>
												Vi förbehåller oss rätten att när som helst ändra dessa
												användarvillkor utan förhandsmeddelande. Det ligger i
												ditt ansvar att regelbundet granska dessa villkor för
												att hålla dig uppdaterad om eventuella förändringar.
											</p>
											<h4 className='text-dark'>
												Insamling av Personuppgifter
											</h4>
											<p>
												Vi insamlar personliga uppgifter som du tillhandahåller
												när du registrerar dig för våra tjänster eller när du
												genomför transaktioner med oss. Dessa kan inkludera ditt
												namn, e-postadress, adress, organisationsnummer och
												betalningsinformation. Vi hanterar dina uppgifter med
												strikt sekretess och följer gällande dataskyddslagar.
											</p>
											<h4 className='text-dark'>
												Användning av Personuppgifter
											</h4>
											<p>
												Vi använder dina personuppgifter för att tillhandahålla
												och fakturera för våra tjänster samt för att kommunicera
												med dig. Uppgifterna används även för att förbättra våra
												tjänster och för att uppfylla lagkrav som bokföring och
												skatteregler. Dina uppgifter behandlas med hög
												sekretess.
											</p>
											<h4 className='text-dark'>Delning av Personuppgifter</h4>
											<p>
												Dina personuppgifter delas inte med tredje part utan
												ditt uttryckliga samtycke, såvida det inte är nödvändigt
												enligt lag eller för utförandet av våra tjänster.
											</p>
											<h4 className='text-dark'>Skydd av Personuppgifter</h4>
											<p>
												Vi vidtar säkerhetsåtgärder för att skydda dina
												personuppgifter från obehörig tillgång, oavsiktlig eller
												olaglig förstörelse, förlust, ändring eller otillåtet
												avslöjande.
											</p>
											<h4 className='text-dark'>Dina Rättigheter</h4>
											<p>
												Du har rätt att begära tillgång till, korrigera,
												begränsa eller radera dina personuppgifter. Du har också
												rätt att motsätta dig behandlingen av dina
												personuppgifter och att begära överföring av dessa till
												en annan part. Kontakta oss för att utöva dessa
												rättigheter.
											</p>
											<h4 className='text-dark'>
												Ändringar i Integritetspolicyn
											</h4>
											<p>
												Vi kan när som helst göra ändringar i denna
												integritetspolicy. Vid väsentliga ändringar kommer vi
												att informera dig. Det är viktigt att du läser och
												förstår vår policy samt håller dig uppdaterad om
												eventuella ändringar.
											</p>
										</div>
									</div>
								</div>
							</div>{" "}
						</section>
					</div>
				</div>
			</section>
		</>
	);
};

export default PolicyBody;
