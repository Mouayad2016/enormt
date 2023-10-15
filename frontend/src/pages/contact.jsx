import PageHeader from "../components/header/PageHeader";
import PageMeta from "../components/meta/PageMeta";
import ContactBox from "../components/contact/ContactBox";
import ContactFormTwo from "../components/contact/ContactFormTwo";
import FooterOne from "../components/footer/FooterOne";
import Navbar from "../components/header/Navbar";
import Layout from "../components/layout/Layout";
import { useEffect } from 'react';
import { useRouter } from 'next/router';


const Contact = () => {
  const router = useRouter();
  useEffect(() => {
    // Function to scroll to the target element by its id
    const scrollToTarget = () => {
      const targetId = 'contact-promo'; // Replace with the id of your target element

      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Scroll to the target element when the component mounts
    scrollToTarget();
  }, []); 
  
  return (
  
    <Layout>
      <PageMeta keywords=""  title="Kontakta oss"  description="Funderar du på att investera i en hemsida, mobilapputveckling, ett IT-system eller behöver IT-konsultation? Vi är Nordens bästa utvecklare. Kontakta oss idag!." ></PageMeta>
      <Navbar />

      <PageHeader
      blogtags={null}
      integration={null}
      title="Kontakta oss"
      desc="Vi på Enormt är redo att vägleda dig och ditt företag i IT-världen. Kontakta oss för att veta mer hur vi kan hjälpa dig ta steget mot ditt nästa IT resa. Du når oss via mejl, telefon & formulär eller boka möte direkt genom mötesbokaren."/>
      <ContactBox />
       <ContactFormTwo />
      <FooterOne footerGradient/>
    </Layout>
    
  );
};

export default Contact;