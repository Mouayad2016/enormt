import React from "react";

const PageHeader = ({ title, desc }) => {
	return (
		<>
			{
				<section className='gradient-backgroud position-relative overflow-hidden ptb-60'>
					<div className='container pt-5'>
						<div className={`row`}>
							<div className='col-lg-8 col-md-12'>
								<h1 className='display-5 fw-bold text-dark pt-50 text-center-mobile'>
									{title}
								</h1>
								<p className='text-dark res-fs-5 text-center-mobile pt-20 '>
									{desc}
								</p>
							</div>
						</div>
					</div>
				</section>
			}
		</>
	);
};

export default PageHeader;
