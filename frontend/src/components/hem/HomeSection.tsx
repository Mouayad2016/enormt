import React, { useState } from "react";

function HomeSection() {

  return (
    <div className="home-section " data-aos="fade-up" id="prices" data-aos-duration="30000">
    <h2 className="mb-md-5 text-dark justify-content-center text-center">
	  Våra fasta priser 
    </h2>

	<p className="res-fs-5 text-dark home-section-paragraph text-center">Nedan hittar du våra fasta priser för följande tjänster <span className="text-accent fw-bold "> Hemsidor </span>,<span className="text-accent fw-bold"> UI/UX </span>,<span className="text-accent fw-bold"> IT-suppor</span>. För tjänster där priset inte anges, vänligen kontakta oss. Anledningen till att vi inte har fasta priser för vissa tjänster är att de inte passar in i en fördefinierad modell. 
	som till exempel<span className="text-omaina-green fw-bold"> Webbappar </span>, <span className="text-omaina-green fw-bold"> Mobilappar </span> och <span className="text-omaina-green fw-bold"> IT-system</span>.</p>
  </div>
  );
}
export default HomeSection;
