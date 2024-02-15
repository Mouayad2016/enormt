import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic"; // Import dynamic for lazy loading
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const OffCanvasMenu = dynamic(() => import("./OffCanvasMenu"), {
	loading: () => <p>Loading...</p>,
});
const NavBarButton = dynamic(() => import("../button/navBarButton"), {
	loading: () => <p>Loading...</p>,
});

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const [scroll, setScroll] = useState(0);
	const [headerTop, setHeaderTop] = useState(0);
	const router = useRouter();

	const toggleOffCanvas = () => {
		setIsOpen(!isOpen);
	};
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
			<header
				className={`main-header
        } w-100 position-absolute `}
			>
				<nav
					className={`navbar navbar-expand-xl z-10 ${"navbar-light"} sticky-header ${
						scroll > headerTop ? "affix" : ""
					}`}
				>
					<div className='container d-flex align-items-center justify-content-lg-between position-relative'>
						<div className='logo'>
							<Link
								prefetch={false}
								href='/'
								className='navbar-brand d-flex align-items-center mb-md-0 text-decoration-none'
							>
								<Image
									src={`assets/img/enormt/Artboard_1_dark.svg`}
									alt='logo'
									height={80}
									width={200}
									className='img-fluid logo-white '
								/>
								<Image
									src={`/assets/img/enormt/logo/enormt-logo-color.png`}
									alt='logo'
									height={80}
									width={200}
									className='img-fluid logo-color logo'
								/>
							</Link>
						</div>
						<button
							className='navbar-toggler position-absolute right-0 border-0'
							type='button'
							aria-label='Toggle navigation'
							style={{ cursor: "pointer" }}
							onClick={toggleOffCanvas}
						>
							<span className='navbar-toggler-icon' style={{ color: "#fff" }} />
						</button>
						<div className='collapse navbar-collapse justify-content-center'>
							<ul className='nav col-12 col-md-auto justify-content-center main-menu'>
								<li>
									<Link href='/' className='nav-link' prefetch={false}>
										Hem
									</Link>
								</li>
								<li>
									<Link href='/about' className='nav-link' prefetch={false}>
										Om oss
									</Link>
								</li>
								<li>
									<Link href='/services' className='nav-link' prefetch={false}>
										Tjänster
									</Link>
								</li>
								<li>
									<Link href='/contact' className='nav-link' prefetch={false}>
										Kontakta oss
									</Link>
								</li>

								<li>
									<Link
										href='#prices'
										className='nav-link'
										prefetch={false}
										onClick={(e) => scrollToSection(e, "prices")}
									>
										Priser
									</Link>
								</li>

								<li>
									<Link href='/blogs' className='nav-link' prefetch={false}>
										Bloggar
									</Link>
								</li>
							</ul>
						</div>
						<div className='action-btns text-end me-5 me-lg-0 d-none d-md-block d-lg-block'>
							<Link
								href='/demo'
								className='display-none-max-with-1200'
								prefetch={false}
							>
								<NavBarButton></NavBarButton>
							</Link>
						</div>
						<OffCanvasMenu isOpen={isOpen} toggleOffCanvas={toggleOffCanvas} />
					</div>
				</nav>
			</header>
		</>
	);
};

export default Navbar;
