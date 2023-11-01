import React, { useState } from 'react';

function HomeSection() {
  return (
    <div
      className="home-section "
      data-aos="fade-right"
      id="prices"
      data-aos-duration="30000"
    >
      <h2 className="mb-md-5 text-dark justify-content-center text-center">
        Anpassade plattformar
      </h2>

      <p className="res-fs-5 text-dark home-section-paragraph text-center">
        Vi levererar skräddarsydda plattformar till nordiska startup och
        företag. Vi har många års erfarenhet av att utveckla både{' '}
        <span className="text-omaina-green fw-bold"> webb </span>och
        <span className="text-omaina-green fw-bold"> mobila </span>lösningar. Vi
        strävar efter att skapa användarvänliga, innovativa och pålitliga
        digitala upplevelser.
      </p>
    </div>
  );
}
export default HomeSection;
