
import DevOPs from './assets/devops.svg'; // Import the SVG as a component
import OpenAI from './assets/openai.svg'; // Import the SVG as a component
import Google from './assets/google.svg'; // Import the SVG as a component
import Link from "next/link";
import { useRouter } from 'next/router';
import Image from "next/image";


type ServiceProps = {
  className?: string;
  title?: string;
  desc?: string;
  link?: string;
  fastPrice?: boolean;
  seo?: boolean;
  responsive ?: boolean;
  allDevices?: boolean;
  custom?: boolean;
  ladingpage?: boolean;
  unikDesign?: boolean;
  anpassningabr?: boolean;
  garanti?: boolean;
  support?: boolean;
  organisk_trafik?: boolean;
  nyckelord?:boolean;
  SEO_rapporter?:boolean;
   Konkurrentanalys?:boolean;
  seo_service?:boolean;
  Optimerat_innehåll?:boolean; 
  grafikDesign?:boolean;
  SEM_marknadsföring?:boolean;
  IT_konsultation?:boolean;




};
const Service: React.FC<ServiceProps> = ({ className,title,desc ,link, responsive, fastPrice,seo, garanti,support,anpassningabr,unikDesign, allDevices,ladingpage,organisk_trafik, nyckelord,
  SEO_rapporter,
  Konkurrentanalys,
  seo_service,
  Optimerat_innehåll, grafikDesign,SEM_marknadsföring,IT_konsultation}) => {
    const router = useRouter();
    const handleNavigation = () => {
      router.push('/contact'); // or whatever your desired URL is
    };
  return (

    // <a href="/contact" >

<div className="parent m-sm-3" onClick={handleNavigation}>
        <div className="card_service">
            <div className="logo">
                <span className="circle circle1"></span>
                <span className="circle circle2"></span>
                <span className="circle circle3"></span>
                <span className="circle circle4"></span>
                <span className="circle circle5">
                    <img src="/assets/img/enormt/logo/logo-round-wight.png" alt="Description"/>
                     
                </span>

            </div>
            <div className="glass"></div>
            <div className="content">
              <div className="content-service-div"><p className="title">{title}</p>
                <p className="text">{desc}

        </p>  </div>
                {responsive ? <>
          <br />
            <span className="text-light"> <span className="text-omaina-green me-sm-3">🗸 </span> Responsiv.</span>
        </> : ""} 
        {fastPrice ? <>
          <br />
            <span className="text-light"> <span className="text-omaina-green me-sm-3">🗸 </span> Fasta priser.</span>
        </> : ""}
        {seo ? <>
          <br />
            <span className="text-light"> <span className="text-omaina-green me-sm-3">🗸 </span> Sökmotoroptimering.</span>
        </> : ""}
        {garanti ? <>
          <br />
            <span className="text-light"> <span className="text-omaina-green me-sm-3">🗸 </span> 12 Mån garanti.</span>
        </> : ""}
        {support ? <>
          <br />
            <span className="text-light"> <span className="text-omaina-green me-sm-3">🗸 </span> 6 Mån IT-support.</span>
        </> : ""}
        {anpassningabr ? <>
          <br />
            <span className="text-light"> <span className="text-omaina-green me-sm-3">🗸 </span> Anpassningsbar.</span>
        </> : ""}
        {unikDesign ? <>
          <br />
            <span className="text-light"> <span className="text-omaina-green me-sm-3">🗸 </span> Unik design.</span>
        </> : ""}
        {allDevices ? <>
          <br />
            <span className="text-light"> <span className="text-omaina-green me-sm-3">🗸 </span> Både IOS och Android.</span>
        </> : ""}
        {ladingpage ? <>
          <br />
            <span className="text-light"> <span className="text-omaina-green me-sm-3">🗸 </span> Landing page.</span>
        </> : ""}
      
        {organisk_trafik ? <>
          <br />
            <span className="text-light"> <span className="text-omaina-green me-sm-3">🗸 </span> Ökad organisk trafik.</span>
        </> : ""}
        {nyckelord ? <>
          <br />
            <span className="text-light"> <span className="text-omaina-green me-sm-3">🗸 </span> Rätt nyckelord för din bransch.</span>
        </> : ""}
        {SEO_rapporter ? <>
          <br />
            <span className="text-light"> <span className="text-omaina-green me-sm-3">🗸 </span> Regelbundna SEO-rapporter.</span>
        </> : ""}
        {Konkurrentanalys ? <>
          <br />
            <span className="text-light"> <span className="text-omaina-green me-sm-3">🗸 </span> Konkurrentanalys.</span>
        </> : ""}
        {Optimerat_innehåll ? <>
          <br />
            <span className="text-light"> <span className="text-omaina-green me-sm-3">🗸 </span> Optimerat innehåll för engagemang.</span>
        </> : ""}
        {seo_service ? <>
          <br />
            <span className="text-light"> 
            <span className="text-omaina-green me-sm-3">🗸 </span> Toppa listan på sökmotorer.   < br />        
            <span className="text-omaina-green me-sm-3">🗸 </span> Uppföljning och uppdateringar.
            </span>
        </> : ""}
        {grafikDesign ? <>
          <br />
            <span className="text-white"> 
            <span className="text-omaina-green me-sm-3">🗸 </span> UX & UI.  <br />
            <span className="text-omaina-green me-sm-3">🗸 </span> Responsiv design.  <br />
            </span>
        </> : ""}
          {SEM_marknadsföring ? <>
          <br />
            <span className="text-light"> 
            <span className="text-omaina-green me-sm-3">🗸 </span> Riktade annonser mot rätt folk.<br />
            <span className="text-omaina-green me-sm-3">🗸 </span> Syns på toppen i sökresultat.<br />
</span>
        </> : ""}
        {IT_konsultation ? <>
          <br />
            <span className="text-light"> 
            <span className="text-omaina-green me-sm-3">🗸 </span> 500 kr i timmen<br />
            <span className="text-omaina-green me-sm-3">🗸 </span> Välj blan 50 konsulter.<br />
            <span className="text-omaina-green me-sm-3">🗸 </span> Nytta garanti. <br />

</span>
        </> : ""}
                
            </div>
            
            <div className="bottom">
                
                <div className="social-buttons-container">
                <a href="http://example.com/link-for-google" className="social-button .social-button1">
                    <Google className="svg"/>
                          </a>
                <a  href="http://example.com/link-for-google" className="social-button .social-button2">
                      <OpenAI className="svg"/>

         
                      </a>
                <a href="http://example.com/link-for-google" className="social-button .social-button3">
                <DevOPs className="svg"/>
                </a>
                </div>
                <div className="view-more">
                {/* <Link href={`/contact`} > */}
                    <button className="view-more-button text-info">Kontakta oss</button>  
                    {/* </Link> */}
                    <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
                  
              </div>
            </div>
        </div>
       
    </div>  
 

  );
}
export default Service;
