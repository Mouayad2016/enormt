import React from "react";
import db from "../../data/db/blogsData";
import Link from "next/link";
import Image from "next/image";
const BlogGrid = () => {
	return (
		<>
			<section className='masonary-blog-section ptb-120'>
				<div className='container'>
					<div className='row'>
						<>
							{db.map((e, index) => (
								<>
									<div className='col-lg-6 col-lg-12' key={index}>
										<div className='single-article feature-article rounded-custom my-3'>
											<Link href={`/blog/${e.title}`} className='article-img'>
												<img // Lazy load causes problems with large content painting thats why i use html img tag insted
													src={`/assets/img/enormt/webinare/${e.coverImg}`}
													alt="Cover image for Enormt Blog webinar - 'From Idea to Reality: Succeeding with Your First Mobile & Web App'"
													className='img-fluid'
													width={400}
													height={400}
												/>
											</Link>
											<div className='article-content p-4'>
												<div className='article-category mb-4 d-block'>
													<Link
														href={`/nyheter/${e.title}`}
														className='d-inline-block text-dark badge bg-primary-soft me-2'
													>
														{e.type}
													</Link>
													<Link
														href={`/nyheter/${e.title}`}
														className='d-inline-block text-light badge bg-success-light'
													>
														Startup
													</Link>
												</div>

												<Link href={`/blog/${e.title}`}>
													<h2 className='h5 article-title limit-2-line-text'>
														{e.title}
													</h2>
												</Link>
												<p className='limit-2-line-text'>{e.desc}</p>

												<div className='d-flex align-items-center pt-4'>
													<div className='avatar'>
														<Link href={e.authorLinkedInLink}>
															<Image
																src={`/assets/img/enormt/about/team/${e.img}`}
																alt='Mouayad Mouayad authur picture'
																width={50}
																height={50}
																className='rounded-circle me-3'
															/>{" "}
														</Link>
													</div>
													<Link href={e.authorLinkedInLink}>
														<div className='avatar-info'>
															<h6 className='mb-0 avatar-name'>{e.author}</h6>
															<span className='small fw-medium text-muted'>
																{e.date}
															</span>
														</div>
													</Link>
												</div>
											</div>
										</div>
									</div>
								</>
							))}
						</>
					</div>
				</div>
			</section>
		</>
	);
};

export default BlogGrid;
