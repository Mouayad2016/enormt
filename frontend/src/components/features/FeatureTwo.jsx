import React from "react";
import SectionTitle from "../section/SectionTitle";
import db from "../../data/db/data";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FeatureTwo = ({ cardDark }) => {
	return (
		<>
			<section
				className={`feature-section ptb-100 ${
					cardDark ? "bg-dark" : "bg-light"
				}`}
			>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-lg-6 col-md-10'>
							<SectionTitle
								subtitle='Tjänster'
								title='Främja Tillväxt & Framgång'
								description='Hos oss kan ni räkna med en partner som är lojal, engagerad och alltid tillgänglig. För oss är ni det allra viktigaste'
								centerAlign
							/>
						</div>
					</div>
					<div className='row'>
						<div className='col-12'>
							<div className='feature-grid'>
								{db.map((e, index) => (
									<Link
										key={index}
										href={`/service/${e.tjänst_sida.rubrik}`}
										className='text-decoration-none mt-3'
									>
										<div
											className={`feature-card shadow-sm rounded-custom p-5 ${
												cardDark
													? "bg-custom-light promo-border-hover border border-2 border-light text-white"
													: "bg-white "
											}`}
										>
											<div className={`mb-32 `}>
												<FontAwesomeIcon
													icon={e.tjänst_sida.iconName}
													size='2x'
													className={`${e.tjänst_sida.liClsssName}`}
												/>
											</div>
											<div className='feature-content'>
												<h3 className='h5'> {e.tjänst_sida.rubrik} </h3>
												<p className='mb-0'>{e.tjänst_sida.des}</p>
											</div>
											<div className='mt-3'>
												<span className='me-3 '> Läs mer</span>
												<FontAwesomeIcon icon='fa-arrow-right' />
											</div>
										</div>
									</Link>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default FeatureTwo;
