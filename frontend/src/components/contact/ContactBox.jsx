import React from 'react';
import { PopupModal } from 'react-calendly';
import { useState } from 'react';
import { useEffect, useRef } from 'react';
import SectionTitle from '../section/SectionTitle';

import Link from 'next/link';

const ContactBox = () => {
  return (
    <>
      <section className="contact-promo ptb-120" id="contact-promo">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10">
              <SectionTitle
                subtitle="Kontakta oss"
                title="Börja din resa med Enormt"
                description="Din partner för IT-lösningar. Kontakta oss idag och låt oss tillsammans skapa ditt nästa IT-system"
                centerAlign
              />
            </div>
          </div>
          <div
            className="row justify-content-center"
            data-aos="fade-left"
            data-aos-duration="30000"
          >
            <div className="col-lg-4 col-md-6 mb-4 mt-4 mt-lg-0">
              <div className="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100">
                <span className="fad fa-comment-alt-lines fa-3x text-primary"></span>
                <div className="contact-promo-info mb-4">
                  <h5 className="text-body">Boka möte direkt</h5>
                  <p className="res-fs-5">
                    Boka en tid med en av våra experter. Vi är redo att utforska
                    din idé och sätta igång med din nästa IT-innovation.
                  </p>
                </div>
                <BookMeetingButton />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mt-4 mt-lg-0">
              <div className="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100">
                <span className="fad fa-phone fa-3x text-primary"></span>
                <div className="contact-promo-info mb-4">
                  <h5 className="text-body">Prata med vårt team</h5>
                  <p className="res-fs-5">
                    Oavsett om du har specifika frågor eller bara vill diskutera
                    en idé, är vi här för att lyssna. Kontakta oss för personlig
                    service och rådgivning.
                  </p>
                </div>

                <PhoneCallPopUp />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mt-4 mt-lg-0">
              <div className="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100">
                <span className="fad fa-envelope fa-3x text-primary"></span>
                <div className="contact-promo-info mb-4">
                  <h5 className="text-body">Fråga oss</h5>
                  <p className="res-fs-5">
                    Vill du veta mer om hur vi kan hjälpa dig? Skicka dina
                    frågor till oss, så svarar vi med det du behöver veta.
                  </p>
                </div>
                <a href="#contact-us-form" className="btn btn-link mt-auto">
                  Till formuläret
                </a>
              </div>
            </div>
            <div className="col-lg-12 col-md-6 mb-4 mt-4 mt-lg-0">
              <div className="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100">
                <span className="fad fa-envelope fa-3x text-primary"></span>
                <div className="contact-promo-info mb-4">
                  <h5 className="text-body">Starta ditt projekt</h5>
                  <p className="res-fs-5">
                    Ta första steget mot en mer effektiv och konkurrenskraftig
                    verksamhet. Dela din idé med oss, så inleder vi processen
                    omgående.
                  </p>
                </div>
                <Link href="/demo" className="btn btn-link mt-auto">
                  Börja här
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactBox;

function BookMeetingButton(props) {
  const [isOpen, setIsOpen] = useState(false);
  const rootElemRef = useRef(null); // Using ref to store the root element
  useEffect(() => {
    if (typeof window !== 'undefined') {
      rootElemRef.current = document.getElementById('__next');
    }
  }, []);

  return (
    <div className="btn btn-link mt-auto">
      <button class="boka_meeting_buton" onClick={() => setIsOpen(true)}>
        Boka ett möte
      </button>
      {
        <PopupModal
          url={process.env.NEXT_PUBLIC_CALENDLY_LINK}
          pageSettings={props.pageSettings}
          utm={props.utm}
          prefill={props.prefill}
          onModalClose={() => setIsOpen(false)}
          open={isOpen}
          rootElement={rootElemRef.current}
        />
      }
    </div>
  );
}

function PhoneCallPopUp() {
  const [showPopup, setShowPopup] = useState(false);

  // function to handle click event and show the popup
  const handleClick = (event) => {
    event.preventDefault(); // prevent the default behavior of the link
    setShowPopup(true);
  };

  // function to handle close event and hide the popup
  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      <Link href="#" onClick={handleClick} className="btn btn-link mt-auto">
        Visa telefonnummer
      </Link>
      {showPopup && (
        <div className="popup-container">
          <div className="popup">
            <p className="text-dark fs-5">
              Vår kundtjänst är tillgänglig <br></br>Mån-Fri från 09:00 till
              17:00
            </p>
            <p className="text-dark">
              Ring oss på <a href="tel:+46733524957"> 073 - 352 49 57</a>{' '}
            </p>
            <div className="pop_botton_div">
              <button
                className="popbtn btn btn-soft-primary"
                onClick={handleClose}
              >
                Stäng
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
