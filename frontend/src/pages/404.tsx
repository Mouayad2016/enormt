import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ChatBubbleComponent from '../components/assistent/ChatBubbleComponenet';

const NotFoundScreen = () => {
  return (
    <>
      <div className="App">
        <ChatBubbleComponent />
      </div>
      <section
        className="error-section ptb-120 bg-light-dark min-vh-100 w-100 d-flex flex-column justify-content-center"
        style={{
          background:
            "url('assets/img/page-header-bg.svg')no-repeat bottom right",
        }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-5 col-md-6">
              <div className="error-page-content-wrap">
                <h2 className="error-404 text-danger">404</h2>
                <h1 className="display-5 fw-bold text-body">
                  Sidan kunde inte hittas
                </h1>
                <p className="lead">
                  Tyvärr kunde vi inte hitta sidan du letar efter. Var vänlig
                  försök igen eller gå tillbaka till startsidan.
                </p>
                <Link href="/" className="btn btn-soft-primary mt-4">
                  Tillbaks hem
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-8 mt-5 d-none d-md-block d-lg-block">
              <div className="hero-img position-relative circle-shape-images">
                <ul className="position-absolute animate-element parallax-element circle-shape-list">
                  <li className="layer" data-depth="0.03">
                    <Image
                      src={`/assets/img/enormt/shape/circle(8).svg`}
                      alt="Ingen sida hittades"
                      className="circle-shape-item type-0 hero-1"
                      height={80}
                      width={200}
                    />
                  </li>
                  <li className="layer" data-depth="0.02">
                    <Image
                      src={`/assets/img/enormt/shape/circle(7).svg`}
                      alt="shape"
                      className="circle-shape-item type-1 hero-1"
                      height={80}
                      width={200}
                    />
                  </li>
                  <li className="layer" data-depth="0.04">
                    <Image
                      src={`/assets/img/enormt/shape/circle(6).svg`}
                      alt="shape"
                      className="circle-shape-item type-2 hero-1"
                      height={80}
                      width={200}
                    />
                  </li>
                  <li className="layer" data-depth="0.04">
                    <Image
                      src={`/assets/img/enormt/shape/circle(5).svg`}
                      alt="shape"
                      className="circle-shape-item type-3 hero-1"
                      height={80}
                      width={200}
                    />
                  </li>
                  <li className="layer" data-depth="0.03">
                    <Image
                      src={`/assets/img/enormt/shape/circle(6).svg`}
                      alt="shape"
                      className="circle-shape-item type-4 hero-1"
                      height={80}
                      width={200}
                    />
                  </li>
                  <li className="layer" data-depth="0.03">
                    <Image
                      src={`/assets/img/enormt/shape/circle(4).svg`}
                      alt="shape"
                      className="circle-shape-item type-5 hero-1"
                      height={80}
                      width={200}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFoundScreen;
