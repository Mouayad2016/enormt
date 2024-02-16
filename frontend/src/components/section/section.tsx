import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";

type ServiceProps = {
	paddingTop?: boolean;
	sections?: any;
};

const Section: React.FC<ServiceProps> = ({ paddingTop, sections }) => {
	return (
		<section
			className={`feature-section   ${
				paddingTop ? "ptb-120" : "pt-60 pb-120"
			} `}
		>
			{sections.map((section: any, index: any) =>
				index % 2 !== 0 ? (
					<div key={section.index} className='section_one'>
						<div className='container container_one'>
							<div className='row align-items-lg-center justify-content-between'>
								<div className='col-lg-5 order-lg-1 mb-7 mb-lg-0'>
									<div className='mb-4'>
										<SectionTitle
											key={section.id}
											title={section.title}
											description={section.kortDes}
										/>
									</div>
									<ul className='list-unstyled d-flex flex-wrap list-two-col mt-5 text-center-mobile'>
										{section.nytta.map((e: any) => (
											<li key={e.index}>
												<span>
													<i
														className={`${e.icon} mb-4
`}
													></i>
												</span>
												<h3 className='h5'> {e.rubrik} </h3>
												<p> {e.underRubrik}</p>
											</li>
										))}
									</ul>
								</div>
								<div className='col-lg-6 order-lg-2 d-flex justify-content-xl-center align-items-sm-center'>
									<Image
										width={300}
										height={300}
										src={`/assets/img/enormt/services/${section.imge}`}
										alt={section.imge}
										className=''
										placeholder='blur'
										blurDataURL='data:image/jpeg;base64,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'
									/>
								</div>
							</div>
						</div>{" "}
					</div>
				) : (
					<div key={section.index} className='section_tow'>
						<div className='container'>
							<div className='row align-items-lg-center justify-content-between'>
								<div className='col-lg-5 order-lg-2 mb-7 mb-lg-0'>
									<div className='mb-4'>
										<SectionTitle
											title={section.title}
											description={section.kortDes}
										/>
									</div>
									<ul className='list-unstyled d-flex flex-wrap list-two-col mt-5 text-center-mobile'>
										{section.nytta.map((e: any) => (
											<li key={e.index}>
												<span className='d-block mb-4'>
													<i className={e.icon}></i>
												</span>
												<h3 className='h5'>{e.rubrik}</h3>
												<p>{e.underRubrik}</p>
											</li>
										))}
									</ul>
								</div>
								<div className='col-lg-6 order-lg-1 d-flex justify-content-xl-center '>
									<Image
										src={`/assets/img/enormt/services/${section.imge}`}
										alt=''
										width={300}
										height={300}
										placeholder='blur'
										className=''
										blurDataURL='data:image/jpeg;base64,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'
									/>
								</div>
							</div>
						</div>
					</div>
				)
			)}
		</section>
	);
};

export default Section;
