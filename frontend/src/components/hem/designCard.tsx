import React, { useState } from "react";
import "./designCard.css"
import Link from "next/link";

function DesignCard() {

  return (
   
<section className="bg-main-black hero-nine-bg ptb-120 " >
    <div className="container" data-aos="fade-left" data-aos-duration="30000">	
	
	<div className="counter-content section-title mb-30">
    <h2 className="mb-4 text-light fs-2" >
    Användarcentrerade <span className="text-pink">UX/UI</span>-Designs
    </h2>
    <p className="fs-5 text-light">Vårt dedikerade UX/UI-team har djup kunskap inom branschledande verktyg och metoder såsom <span className="text-pink fw-bold">Figma</span>, <span className="text-pink fw-bold">Sketch</span>, <span className="text-pink fw-bold">Adobe XD</span> och <span className="text-pink fw-bold">prototyping</span>.</p>
<p className="fs-6 text-omaina-green">Om du är i behov av en särskild designmetodik eller tjänst som inte nämns här, eller önskar en mer anpassad lösning, tveka inte att kontakta oss för en personlig konsultation.</p>
				</div>	

<div className="row-items">
<div className="row-items-plan">
<div className="cards_inner">
  <div className="cards__card card">
    <p className="card__heading">Bas-UI/UX</p>
    <p className="card__price"> 9 990 <small >SEK</small></p>
    <ul className="card_bullets flow" role="list">
    <li className="fw-bold">En <datalist></datalist>designförslag </li>
    <li className="fw-bold">UI för webbsidor (max 3 sidor) <small>eller</small> UI för mobilapplikationer (max 5 skärmar)</li>
    <li className="fw-bold">Responsiv design anpassad för dator, mobil och surfplatta</li>
  <li className="fw-bold">Grundläggande interaktionsdesign</li>
  <li className="fw-bold">Optimerad för hastighet och prestanda</li>
  <li className="fw-bold">Leverans av designfiler i önskat format</li>
  <li className="fw-bold">Rådgivning om färgschema och typografi</li>
  <li className="fw-bold">Inkludera källfil</li>
    </ul>
    <Link className="card__cta cta" href="/demo">Kom igång</Link>
  </div>
  </div>
</div>
<div className="row-items-plan">
<div className="cards_inner">
  <div className="cards__card card">
    <p className="card__heading">Pro-UI/UX</p>
    <p className="card__price"> 14 999 <small >SEK</small></p>
    <ul className="card_bullets flow" role="list">
    <li className="fw-bold">Upp till 2 designförslag</li>
    <li className="fw-bold">UI för webbsidor (max 6 sidor) <small>eller</small> UI för mobilapplikationer (max 6 skärmar)</li>    <li className="fw-bold">Upp till 3 Anpassade Grafiska Element </li>
    <li className="fw-bold">Responsiv design anpassad för dator, mobil och surfplatta</li>
    <li className="fw-bold">Grundläggande interaktionsdesign</li>
    <li className="fw-bold">Optimerad för hastighet och prestanda</li>
    <li className="fw-bold">Leverans av designfiler i önskat format</li>
    <li className="fw-bold">Rådgivning om färgpalett och typografi</li>
    <li className="fw-bold">Grundläggande användartester</li>
    <li className="fw-bold">Användarflöden</li>
    <li className="fw-bold">Wireframes</li>
    <li className="fw-bold">Prototyp</li>
    <li className="fw-bold">Inkludera källfil</li>
    </ul>
    <Link className="card__cta cta" href="/demo">Kom igång</Link>
  </div>
  </div>
</div><div className="row-items-plan">
<div className="cards_inner">
  <div className="cards__card card">
    <p className="card__heading">Premium-UI/UX</p>
    <p className="card__price"> 19 999 <small >SEK</small></p>
    <ul className="card_bullets flow" role="list">
    <li className="fw-bold">Upp till 3 designförslag</li>
    <li className="fw-bold">UI för webbsidor (max 12 sidor) <small>eller</small> UI för mobilapplikationer (max 15 skärmar)</li>    

    <li className="fw-bold">Upp till 6 Anpassade Grafiska Element (t.ex. Bilder, Bakgrunder, osv)</li>
    <li className="fw-bold">Responsiv design anpassad för dator, mobil och surfplatta</li>
    <li className="fw-bold">Grundläggande interaktionsdesign</li>
    <li className="fw-bold">Kundsupport via e-post och telefon</li>
    <li className="fw-bold">Optimerad för hastighet och prestanda</li>
    <li className="fw-bold">Leverans av designfiler i önskat format</li>
    <li className="fw-bold">Rådgivning om färgpalett och typografi</li>
    <li className="fw-bold">Avancerade användartester</li>
    <li className="fw-bold">Användarresor och flödesscheman</li>
    <li className="fw-bold">Prototyper och wireframes</li>
    <li className="fw-bold">Användarflöden</li>
    <li className="fw-bold">Prototyp</li>
    <li className="fw-bold">Inkludera källfil</li>
    </ul>
    <Link className="card__cta cta" href="/demo">Kom igång</Link>
  </div>
  </div>
</div>

</div> 
</div>
  </section>
  );
}
export default DesignCard;
