import React from "react";

import Image from "next/image";
const BlogDetails = (item) => {
	const _item = item.item;

	let rubrik = "";
	let dec = "";

	if (item) {
		rubrik = _item.page?.title || "";
		dec = _item.page?.desc || "";
	}
	return (
		<>
			<section className='blog-details ptb-120'>
				<div className='container'>
					<div className='row justify-content-between'>
						<div className=''>
							{/* <RegitserSmall/> */}
							<div className='blog-details-wrap text-center-mobile'>
								<p className='res-fs-5'>{_item.page?.desc}</p>
								<div className='blog-details-info mt-5'>
									<h3 className='h5'>{_item.page?.listTile1}</h3>
									<div className='text-start-mobile paddin_mobile justify-content-mobile-center'>
										<ul className='list-unstyled'>
											{_item.page?.topicKeyFocuse.map((e, index) => {
												return <li key={index}>{e}</li>;
											})}
										</ul>
									</div>
									<blockquote className='bg-white custom-shadow p-5 mt-5 rounded-custom border-4 border-primary border-top'>
										<p className='text-muted'>
											<i className='fas fa-quote-left me-2 text-primary'></i>{" "}
											{_item.page?.citat}
											<i className='fas fa-quote-right ms-2 text-primary'></i>
										</p>
									</blockquote>
								</div>
								<Image
									src={`/assets/img/enormt/webinare/${_item.page?.coverBild}`}
									className='img-fluid mt-4 rounded-custom'
									alt='Picture of a Minimal Viable Product concept illustration'
									width={500}
									height={500}
								/>
								<div className='job-details-info mt-5'>
									<h3 className='h5'>{_item.page?.listTitle2}</h3>
									<p>{_item.page?.whyThisTopicunderText}</p>
									<ul className='content-list list-unstyled'>
										{_item.page?.whyThisTopicList.map((e, index) => {
											return <li key={index}>{e}</li>;
										})}
									</ul>
								</div>
								<div className='blog-details-info mt-5 content-list'>
									<h3 className='h5'>{_item.page?.listTitle3}</h3>
									<p>{_item.page?.listTitle3text}</p>
									<ul className='list-unstyled'>
										{_item.page?.list3.map((e, index) => {
											return <li key={index}>{e}</li>;
										})}
									</ul>
								</div>{" "}
								<iframe
									width='1051'
									height='591'
									loading='lazy'
									src='https://www.youtube.com/embed/dxLMrXwtTzI'
									title='Så lyckas du med din första mobil- & webbapp'
									frameborder='0'
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
									allowfullscreen
								></iframe>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default BlogDetails;
