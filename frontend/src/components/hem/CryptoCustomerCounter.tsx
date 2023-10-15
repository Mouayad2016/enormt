import React from "react";
import ServiceProps from "./service"

const CryptoCustomerCounter = () => {
  return (
    <section className="crypto-customer-counter bg-dark-black ptb-60 home-service-background" data-aos="fade-up" data-aos-duration="30000" id="services">
      
      <div className="container">
         <div className="counter-content section-title mb-30">
         <h2 className="mb-md-5 text-dark justify-content-cente text-center" >  Växande utbud av IT-lösningar </h2>
              <h2 className="mb-4 text-dark res-fs-5 text-center-mobile" > Alla våra lösningar kommer med <span className="text-info">12 mån garanti</span> och <span className="text-info">6 månader IT-suppor</span> 
                </h2>
                <p className="res-fs-5 text-center-mobile">We specialize in crafting top-tier digital solutions tailored to your unique needs. Utilizing the latest technologies and innovative strategies, we design products and services that not only meet today’s demands but also set you up for success in the future.</p>
                </div>
        <div className="justify-content-center"> 
        <div className="grid-container justify-content-center ">
        <ServiceProps title="Hemsidor" desc={'Företags hemsidor som representerar era tjänster.'} responsive= {true} seo={true} fastPrice={true}/>
        <ServiceProps title="Webbappar" desc="Anpassade webbapplikationer för alla plattformar." responsive={true}  seo={true} unikDesign={true}/>
        <ServiceProps title="Mobilappar" desc="Utveckling av mobilappar för både Android och iOS." responsive={true}  unikDesign={true} allDevices={true} />
        <ServiceProps title="IT-system" desc="Helhetslösningar för att effektivisera er verksamhet." seo={true} anpassningabr={true} unikDesign={true} />
        <ServiceProps title="Grafisk design" desc="Skapa unika och tilltalande designlösningar."fastPrice={true} grafikDesign={true}/>
        <ServiceProps title="IT-konsultation" desc="Rådgivning för att maximera din IT-potential." IT_konsultation={true} />

          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptoCustomerCounter;
