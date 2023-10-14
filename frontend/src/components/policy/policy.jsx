import React from "react";
import SectionTitle from "../section/SectionTitle";

const PolicyBody = ({ dark, bgWhite }) => {
  const swiperOption = {
    slidesPerView: 2,
    mousewheel: true,
    spaceBetween: 30,
    slidesPerGroup: 2,
    loop: true,
    navigation: {
      nextEl: ".swiper-nav-control .swiper-button-next",
      prevEl: ".swiper-nav-control .swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      1142: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  };
  return (
    <>
      <section
        className={`testimonial-section ${
          dark ? "bg-dark" : "bg-light"
        } ptb-120 ${bgWhite ? "bg-white" : ""}`}
        data-aos="fade-up" data-aos-duration="30000"

      >
        <div className="container">
          <div className="row justify-content-center align-content-center">
            <div className="col-md-10 col-lg-6 pt-60">
              {dark ? (
                <SectionTitle
                  subtitle=""
                  title="Policy"
                  description="Välkommen till vår IT-tjänst. Genom att använda vår tjänst godkänner du att följa dessa användarvillkor. Om du inte accepterar dessa villkor ska du inte använda vår tjänst."
                  darkBg
                  centerAlign
                />
              ) : (
                <SectionTitle
                  subtitle=""
                  title="Policy"
                  description="Välkommen till vår IT-tjänst. Genom att använda vår tjänst godkänner du att följa dessa användarvillkor. Om du inte accepterar dessa villkor ska du inte använda vår tjänst."
                  centerAlign
                />
              )}
            </div>
          </div>
          <div className="row">
            <section className="section_one">
              <div className="container container_one">
                <div className="row justify-content-center align-content-center">
                  <div className="col-lg-6 order-lg-1 mb-7 mb-lg-0">
                    <div className="mb-4">
                      <h4 className="text-dark">Tillgänglighet av tjänsten</h4>
                      <p>
                        Vi strävar efter att göra vår tjänst tillgänglig dygnet
                        runt och garanterar en upptid på minst 99%. Om det
                        uppstår driftstörningar kommer vi att arbeta aktivt för
                        att åtgärda problemet inom en rimlig tidsram.
                      </p>
                      <h4 className="text-dark">Användning av tjänsten</h4>
                      <p>
                        Du får inte använda vår tjänst på ett sätt som bryter
                        mot några tillämpliga lagar eller regler eller som kan
                        hota säkerheten för vårt IT-system eller våra appar. Du
                        får inte heller använda vår tjänst för att skada våra
                        användare eller tredje part.
                      </p>
                      <h4 className="text-dark">Äganderätt</h4>
                      <p>
                        Allt innehåll och material på vår tjänst, inklusive men
                        inte begränsat till text, bilder, grafik, logotyper,
                        varumärken och programvara, är skyddat enligt
                        upphovsrätts- och varumärkeslagar och tillhör oss eller
                        våra licensgivare. Du får inte använda något av detta
                        material utan vårt samtycke.
                      </p>
                      <h4 className="text-dark">Ansvarsbegränsning</h4>
                      <p>
                        Vi tar inget ansvar för skador som uppstår på grund av
                        användningen av vår tjänst eller från innehållet på vår
                        tjänst. Vi tar inte heller ansvar för eventuella
                        förluster eller skador på grund av virus eller andra
                        skadliga komponenter.
                      </p>
                      <h4 className="text-dark">Ändringar i villkoren</h4>
                      <p>
                        Vi kan ändra dessa användarvillkor när som helst utan
                        förvarning. Det är ditt ansvar att regelbundet
                        kontrollera dessa villkor för eventuella ändringar.
                      </p>
                      <h4 className="text-dark">
                        Insamling av personuppgifter
                      </h4>
                      <p>
                        Vi samlar in personuppgifter som du tillhandahåller till
                        oss när du registrerar dig för våra tjänster eller
                        genomför transaktioner med oss. Personuppgifterna kan
                        inkludera ditt namn, din e-postadress, din postadress,
                        ditt organisationsnummer och namn samt din
                        betalningsinformation. Vi behandlar dina personuppgifter
                        med högsta sekretess och följer tillämpliga
                        dataskyddslagar.
                      </p>
                      <h4 className="text-dark">
                        Användning av personuppgifter
                      </h4>
                      <p>
                        Vi använder personuppgifterna för att tillhandahålla
                        våra tjänster, för att fakturera dig för våra tjänster
                        och för att kommunicera med dig om din användning av
                        tjänsterna. Vi kan också använda personuppgifterna för
                        att förbättra våra tjänster och för att uppfylla
                        tillämpliga lagkrav, såsom bokföringskrav och
                        skattekrav. Vi behandlar dina personuppgifter med högsta
                        sekretess och följer tillämpliga dataskyddslagar.
                      </p>
                      <h4 className="text-dark">Delning av personuppgifter</h4>
                      <p>
                        Vi delar inte personuppgifter med tredje part utan ditt
                        samtycke, förutom i fall där det krävs enligt lag eller
                        för att tillhandahålla våra tjänster.
                      </p>
                      <h4 className="text-dark">Skydd av personuppgifter</h4>
                      <p>
                        Vi tar lämpliga tekniska och organisatoriska åtgärder
                        för att skydda dina personuppgifter mot obehörig
                        åtkomst, oavsiktlig eller olaglig förstörelse, förlust,
                        ändring, obehörig avslöjande eller tillgång eller någon
                        annan form av olaglig bearbetning.
                      </p>
                      <h4 className="text-dark">
                        Rättigheter till dina personuppgifter
                      </h4>
                      <p>
                        Du har rätt att få tillgång till, rätta, begränsa eller
                        radera dina personuppgifter. Du har också rätt att
                        invända mot bearbetningen av dina personuppgifter och
                        att få dina personuppgifter överförda till en annan
                        organisation för att göra det måste du komma i kontakt
                        med oss.
                      </p>
                      <h4 className="text-dark">
                        Ändringar i integritetspolicyn
                      </h4>
                      <p>
                        Vi kan ändra denna integritetspolicy när som helst. Vi
                        kommer att informera dig om eventuella väsentliga
                        ändringar i vår integritetspolicy. Du ansvarar för att
                        läsa och förstå vår integritetspolicy och eventuella
                        uppdateringar.
                      </p>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default PolicyBody;
