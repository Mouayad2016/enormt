import React from 'react';
import PageMeta from '../components/meta/PageMeta';
import ContactsForm from '../components/contact/ContactsForm';
import ReviewTwo from '../components/tabs/ReviewTabTwo';
import Navbar from '../components/header/Navbar';
import Layout from '../components/layout/Layout';
import FooterOne from '../components/footer/FooterOne';

const RequestDemo = () => {
  return (
    <Layout>
      <PageMeta
        title="Beställ din IT-lösning från Enormt | Kom igång och få ett offert"
        description="Vill du komma igång med din nya IT-lösning? Fyll i formuläret nedan och begär en offert från oss. Vi är redo att hjälpa dig skapa din framtid."
        keywords="IT-lösningar, begäran om offert, kontakta oss, Enormt, digital transformation"
      />

      <Navbar posAbsolute />
      <section
        className="sign-up-in-section gradient-backgroud ptb-120"
        style={{
          background: `url(${process.env.PUBLIC_URL}/assets/img/page-header-bg.svg')no-repeat bottom right`,
        }}
      >
        <div
          className="container"
          data-aos="fade-right"
          data-aos-duration="30000"
        >
          <div className="row align-items-top justify-content-between">
            <ContactsForm />
            <ReviewTwo reqPage />
          </div>
        </div>
      </section>
      <FooterOne footerGradient />
    </Layout>
  );
};

export default RequestDemo;
