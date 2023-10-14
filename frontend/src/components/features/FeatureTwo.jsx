import React from "react";
import SectionTitle from "../section/SectionTitle";
import db from "../../data/db/data";
import { useEffect, useRef } from "react";
import { useRouter } from 'next/router';
import Link from "next/link";

const FeatureTwo = ({ cardDark }) => {
  const targetRef = useRef(null);
  const router = useRouter();

  function handleScrollToTarget() {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  useEffect(() => {
    if (router.pathname === "/services") {
      handleScrollToTarget();
    }
  }, [router.pathname]);
  return (
    <>
      <section 
        ref={targetRef}
        className={`feature-section ptb-100 ${
          cardDark ? "bg-dark" : "bg-light"
        }`}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10">
              {cardDark ? (
                <SectionTitle
                  subtitle="Tjänster"
                  title="Lösningar från topprankade IT-partners"
                  description="Arbetar för att kunna leverera den högsta kvalitén till de bästa priserna."
                  centerAlign
                  dark
                />
              ) : (
                <SectionTitle
                  subtitle="Tjänster"
                  title="Lösningar från topprankade IT-partners"
                  description="Arbetar för att kunna leverera den högsta kvalitén till de bästa priserna."
                  centerAlign
                />
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="feature-grid">
                <div
                  className={`shadow-sm highlight-card rounded-custom p-5 ${
                    cardDark
                      ? "bg-custom-light promo-border-hover border border-2 border-light text-white"
                      : "bg-white"
                  }`}
                  data-aos="fade-up"
                  data-aos-delay="50"
                >
                  <div
                    className="
                    icon-box
                    d-inline-block
                    rounded-circle
                    bg-primary-soft
                    mb-32
                  "
                  >
                    <i className="far fa-handshake-alt icon-sm text-primary"></i>{" "}
                  </div>
                  <div className="feature-content">
                    <h3 className="h5">Generellt</h3>
                    <p>
                      Våra leverantörer skapar lösningar som är både tekniskt
                      kraftfulla och användarvänliga. Vi drivs av att
                      tillgängliggöra moderna tekniska lösningar till en allt
                      bredare målgrupp.
                    </p>
                    {/* <p>
                      Professionally architect unique process improvements via
                      optimal.
                    </p> */}
                    <h6 className="mt-4">I alla våra tjänster kan du få...</h6>
                    <ul className="list-unstyled mb-0">
                      <li className="py-1">
                        <i
                          className={`fad fa-check-circle me-2 ${
                            cardDark ? "text-warning" : "text-primary"
                          }`}
                        ></i>
                        Analys av behov och krav
                      </li>
                      <li className="py-1">
                        <i
                          className={`fad fa-check-circle me-2 ${
                            cardDark ? "text-warning" : "text-primary"
                          }`}
                        ></i>
                        Utveckling på flera språk
                      </li>
                      <li className="py-1">
                        <i
                          className={`fad fa-check-circle me-2 ${
                            cardDark ? "text-warning" : "text-primary"
                          }`}
                        ></i>
                        Skräddarsydda lösningar
                      </li>
                      <li className="py-1">
                        <i
                          className={`fad fa-check-circle me-2 ${
                            cardDark ? "text-warning" : "text-primary"
                          }`}
                        ></i>
                        Responsiv design
                      </li>
                      <li className="py-1">
                        <i
                          className={`fad fa-check-circle me-2 ${
                            cardDark ? "text-warning" : "text-primary"
                          }`}
                        ></i>
                        Integration av tredjeparts-API:er
                      </li>
                      <li className="py-1">
                        <i
                          className={`fad fa-check-circle me-2 ${
                            cardDark ? "text-warning" : "text-primary"
                          }`}
                        ></i>
                        SEO-optimering
                      </li>
                      <li className="py-1">
                        <i
                          className={`fad fa-check-circle me-2 ${
                            cardDark ? "text-warning" : "text-primary"
                          }`}
                        ></i>
                        Prestandaoptimering
                      </li>
                      <li className="py-1">
                        <i
                          className={`fad fa-check-circle me-2 ${
                            cardDark ? "text-warning" : "text-primary"
                          }`}
                        ></i>
                        Molntjänster och databashantering
                      </li>
                    </ul>
                  </div>
                 
                </div>
               
                {db.map((e,index) => (
                  <div key= {index}
                    className={`feature-card shadow-sm rounded-custom p-5 ${
                      cardDark
                        ? "bg-custom-light promo-border-hover border border-2 border-light text-white"
                        : "bg-white"
                    }`}
                    data-aos="fade-up"
                    data-aos-delay="50"
                  >
                    <div
                      className={` icon-box d-inline-block rounded-circle ${e.tjänst_sida.liCirkelBackGround} mb-32 `}
                    >
                      <i
                        className={e.tjänst_sida.liClsssName}
                        style={{ color: "red" }}
                        // style="color: blue;"
                      ></i>
                    </div>
                    <div className="feature-content">
                      <h3 className="h5"> {e.tjänst_sida.rubrik} </h3>
                      <p className="mb-0">{e.tjänst_sida.des}</p>
                    </div>
                    <Link
                     href= {`/IT-tjänst/${e.tjänst_sida.rubrik}`}
                      className="link-with-icon text-decoration-none mt-3"
                    >
                      Läs mer
                      <i className="far fa-arrow-right"></i>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureTwo;
