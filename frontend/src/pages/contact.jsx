import PageHeader from "../components/header/PageHeader";
import PageMeta from "../components/meta/PageMeta";
import ContactBox from "../components/contact/ContactBox";
import ContactFormTwo from "../components/contact/ContactFormTwo";
import FooterOne from "../components/footer/FooterOne";
import Navbar from "../components/header/Navbar";
import Layout from "../components/layout/Layout";
import { useEffect } from "react";
import { useRouter } from "next/router";
import ChatBubbleComponent from "../components/assistent/ChatBubbleComponenet";

const Contact = () => {
	useEffect(() => {
		const scrollToTarget = () => {
			const targetId = "contact-promo";
			const targetElement = document.getElementById(targetId);
			if (targetElement) {
				targetElement.scrollIntoView({ behavior: "smooth" });
			}
		};
		scrollToTarget();
	}, []);

	return (
		<>
			<Layout>
				<PageMeta
					title='Kontakta Enormt - Din partner för IT-lösningar | Kontakta oss idag'
					description='Behöver du IT-vägledning? Kontakta oss idag för att starta din IT-resa. Boka ett möte för personlig rådgivning.'
					keywords='IT-vägledning, IT-resa, IT-lösningar, möten, rådgivning, Enormt, Solna, Sverige'
				></PageMeta>
				<Navbar />
				<PageHeader
					blogtags={null}
					integration={null}
					title='Kontakta oss'
					desc='Vi erbjuder vägledning inom IT. Vill du veta mer om hur vi kan assistera dig på din IT-resa? Kontakta oss via e-post, telefon eller vårt kontaktformulär. Du kan även boka ett direktmöte med oss genom vår mötesbokare.'
				/>
				<ContactBox />
				<ContactFormTwo />
				<FooterOne footerGradient />
			</Layout>
		</>
	);
};

export default Contact;
