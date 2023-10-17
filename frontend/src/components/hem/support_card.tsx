import React, { useState } from "react";
import Link from "next/link";

function SupportCard() {

  return (
    <section className="bg-main-pink hero-nine-bg ptb-60" >
      <div data-aos="fade-right" data-aos-duration="30000">
        <div className="container" >	
	<div className="counter-content section-title mb-30 lh-1">
    <h2 className="text-pink-dark fs-3 " >
    Professionell IT-Support	
    </h2>		</div>	
	<p className="fs-5 text-dark">Vi står vid din sida med expertis inom IT-support, redo att <span className="text-omaina-green fw-bold"> hantera </span> dina utmaningar och säkerställa en smidig teknisk drift. 
 
				</p>
				<p className="fs-6 text-dark">Behöver du specialanpassad support? Vårt team finns här för att ge en lösning som passar just dina behov.</p>
		
        </div>	

        <div className="support_card_container justify-content-center row-items">
        <div className="row-items-plan">
        <div className="pack-container">
          <div className="header">
              <p className="title">
              Grundläggande IT-supportpaket
    </p>
    <div className="price-container">
    8 999
      <span>SEK</span>
    </div>
  </div>
  <div>
    <ul className="lists">
      <li className="list">
        <span>
          <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
          </svg>
        </span>
        <p>
        Fjärrsupport (hjälp via telefon eller online)
        </p>
      </li>
      <li className="list">
        <span>
          <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
          </svg>
        </span>
        <p>
        Virus- och skadlig programvarukontroll        
        </p>
      </li>
      <li className="list">
        <span>
          <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
          </svg>
        </span>
        <p>
        Grundläggande systemoptimering (rensning av temporära filer, uppdateringar)        </p>
      </li>
      <li className="list">
        <span>
          <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
          </svg>
        </span>
        <p>
        Installationshjälp för grundläggande programvaror        </p>
      </li>
      <li className="list">
        <span>
          <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
          </svg>
        </span>
        <p>
        Månadlig systemstatusrapport        </p>
      </li>
      <li className="list">
        <span>
          <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
          </svg>
        </span>
        <p>
        Grundläggande webbplatssupport (t.ex. CMS-uppdateringar, enkel felsökning)
        </p>
      </li>
    </ul>
  </div>

  <div className="button-container">
  <Link className="card__cta cta" href="/contact">Kom igång</Link>

    {/* <button type="button">     
     Buy Now

   </button> */}
  </div>
  </div>
</div>

<div className="row-items-plan">
<div className="pack-container">
          <div className="header">
              <p className="title">
              Standard IT-supportpaket

</p>
    <div className="price-container">
    13 999
      <span>SEK</span>
    </div>
  </div>
  <div>
  <ul className="lists">
      <li className="list">
        <span>
          <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
          </svg>
        </span>
        <p>
        Fjärrsupport (hjälp via telefon eller online)
        </p>
      </li>
      <li className="list">
        <span>
          <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
          </svg>
        </span>
        <p>
        Virus- och skadlig programvarukontroll        
        </p>
      </li>
      <li className="list">
        <span>
          <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
          </svg>
        </span>
        <p>
        Grundläggande systemoptimering (rensning av temporära filer, uppdateringar)        </p>
      </li>
      <li className="list">
        <span>
          <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
          </svg>
        </span>
        <p>
        Installationshjälp för grundläggande programvaror        </p>
      </li>
      <li className="list">
        <span>
          <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
          </svg>
        </span>
        <p>
        Månadlig systemstatusrapport        </p>
      </li>
      <li className="list">
        <span>
          <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
          </svg>
        </span>
        <p>
        Avancerad webbplatssupport (prestandaoptimering, SSL-konfiguration, CDN-integration)
        </p>
      </li>
      <li className="list">
        <span>
          <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
          </svg>
        </span>
        <p>
        Nätverksövervakning och säkerhet
       </p>
      </li>
      <li className="list">
        <span>
          <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
          </svg>
        </span>
        <p>
        Dataskydd och backup-lösningar
       </p>
      </li>
      <li className="list">
        <span>
          <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
          </svg>
        </span>
        <p>
        Användarhantering och behörighetsinställningar
       </p>
      </li>
     
      <li className="list">
        <span>
          <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
          </svg>
        </span>
        <p>
        Prioriterad support med snabbare svarstider
       </p>
      </li>
      <li className="list">
        <span>
          <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
          </svg>
        </span>
        <p>
        5 timmar IT-konsultation per månad för att optimera företagets teknikinfrastruktur
       </p>
      </li>
      
    
    </ul>
    
  </div>
  <div className="button-container">
  <Link className="card__cta cta" href="/contact">Kom igång</Link>

  </div>
  </div>

</div>


  <div className="row-items-plan">
<div className="pack-container">
          <div className="header">
              <p className="title">
              Premium IT-supportpaket
    </p>
    <div className="price-container">
      17 999
      <span>SEK</span>
    </div>
  </div>
  <div>
  <ul className="lists">
      <li className="list">
        <span>
          <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
          </svg>
        </span>
        <p>
        Fjärrsupport (hjälp via telefon eller online)
        </p>
      </li>
      <li className="list">
        <span>
          <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
          </svg>
        </span>
        <p>
        Virus- och skadlig programvarukontroll        
        </p>
      </li>
      <li className="list">
        <span>
          <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
          </svg>
        </span>
        <p>
        Grundläggande systemoptimering (rensning av temporära filer, uppdateringar)        </p>
      </li>
      <li className="list">
        <span>
          <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
          </svg>
        </span>
        <p>
        Installationshjälp för grundläggande programvaror        </p>
      </li>
      <li className="list">
        <span>
          <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
          </svg>
        </span>
        <p>
        Månadlig systemstatusrapport        </p>
      </li>

      <li className="list">
        <span>
          <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
          </svg>
        </span>
        <p>
        Avancerad webbplatssupport (prestandaoptimering, SSL-konfiguration, CDN-integration)
        </p>
      </li>
      <li className="list">
        <span>
          <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
          </svg>
        </span>
        <p>
        Nätverksövervakning och säkerhet
       </p>
      </li>
      <li className="list">
        <span>
          <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
          </svg>
        </span>
        <p>
        Dataskydd och backup-lösningar
       </p>
      </li>
      <li className="list">
        <span>
          <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
          </svg>
        </span>
        <p>
        Användarhantering och behörighetsinställningar
       </p>
      </li>
     
      <li className="list">
        <span>
          <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
          </svg>
        </span>
        <p>
        Prioriterad support med snabbare svarstider
       </p>
      </li>
      <li className="list">
        <span>
          <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
          </svg>
        </span>
        <p>
        5 timmar IT-konsultation per månad för att optimera företagets teknikinfrastruktur
       </p>
      </li>
      <li className="list">
        <span>
          <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
          </svg>
        </span>
        <p>
        24/7-support
       </p>
      </li>
      <li className="list">
        <span>
          <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
          </svg>
        </span>
        <p>
        Skräddarsydd webbsupport (anpassad kodning, databasoptimering, e-handelslösningar)
        </p>
      </li>
      <li className="list">
        <span>
          <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
          </svg>
        </span>
        <p>
        Katastrofåterställning       </p>
      </li>
      <li className="list">
        <span>
          <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
          </svg>
        </span>
        <p>
        Molnbaserade lösningar och migrering
       </p>
      </li>
      <li className="list">
        <span>
          <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
          </svg>
        </span>
        <p>
        Reglerad säkerhetsrevision och överensstämmelse (t.ex. GDPR)
       </p>
      </li>
      <li className="list">
        <span>
          <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
          </svg>
        </span>
        <p>
        5 timmar IT-konsultation för företagets alla behov
       </p>
      </li>
    
    </ul>
  </div>
  <div className="button-container">
  <Link className="card__cta cta" href="/contact">Kom igång</Link>
  </div> 
  </div> 
  </div>
  </div>
  
 
</div>
  </section>
  );
}
export default SupportCard;
