import Link from "next/link";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OffCanvasMenu = ({ isOpen, toggleOffCanvas }) => {
	const showClass = isOpen ? "show" : "";

	const [scroll, setScroll] = useState(0);
	const [headerTop, setHeaderTop] = useState(0);
	const router = useRouter();

	useEffect(() => {
		const stickyheader = document.querySelector(".main-header");
		setHeaderTop(stickyheader.offsetTop);
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	function scrollToSection(event, sectionId) {
		event.preventDefault();

		const targetSection = document.getElementById(sectionId);

		if (router.pathname === "/") {
			if (targetSection) {
				targetSection.scrollIntoView({
					behavior: "smooth",
				});
			}
		} else {
			// Navigate to the homepage and then to the section
			router.push("/").then(() => {
				const target = document.getElementById(sectionId);
				if (target) {
					target.scrollIntoView({
						behavior: "smooth",
					});
				}
			});
		}
	}

	const handleScroll = () => {
		setScroll(window.scrollY);
	};

	return (
		<>
			<div className={`offcanvas offcanvas-end ${showClass}`} tabIndex={-1}>
				<div className='offcanvas-header d-flex align-items-center mt-4'>
					<Link
						prefetch={false}
						href='/'
						className={`d-flex align-items-center mb-md-0 text-decoration-none `}
					>
						<Image
							src={`/assets/img/enormt/logo/enormt-logo-color.png`}
							alt='logo'
							width={150}
							height={80}
							className='ps-2'
						/>
					</Link>
					<button
						type='button'
						className='close-btn text-danger'
						onClick={toggleOffCanvas}
					>
						<FontAwesomeIcon icon='fa-close'></FontAwesomeIcon>
					</button>
				</div>
				<div className='offcanvas-body'>
					<ul className='nav col-12 col-md-auto justify-content-center main-menu'>
						<li>
							<Link prefetch={false} href='/' className='nav-link'>
								Hem
							</Link>
						</li>
						<li>
							<Link prefetch={false} href='/about' className='nav-link'>
								Om oss
							</Link>
						</li>
						<li>
							<Link
								prefetch={false}
								href='/services'
								className='nav-link'
								// onClick={(e) => scrollToSection(e, "services")}
							>
								Tjänster
							</Link>
						</li>
						<li>
							<Link prefetch={false} href='/contact' className='nav-link'>
								Kontakta oss
							</Link>
						</li>
						<li>
							<Link
								prefetch={false}
								href='#prices'
								className='nav-link'
								onClick={(e) => scrollToSection(e, "prices")}
							>
								Priser
							</Link>
						</li>

						<li>
							<Link prefetch={false} href='/blogs' className='nav-link'>
								Bloggar
							</Link>
						</li>
						<li>
							<Link prefetch={false} href='/demo' className='nav-link'>
								Kom igång
							</Link>
						</li>
					</ul>
					<div className='action-btns mt-4 ps-3'></div>
				</div>
			</div>
		</>
	);
};

export default OffCanvasMenu;
