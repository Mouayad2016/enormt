
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

<div className="parent m-sm-3">
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
            <span className="text-light"> <span className="service-green me-sm-3"><i className="fas fa-check"></i> </span> Responsiv</span>
        </> : ""} 
        {fastPrice ? <>
          <br />
            <span className="text-light"> <span className="service-green me-sm-3"><i className="fas fa-check"></i> </span> Fasta priser</span>
        </> : ""}
        {seo ? <>
          <br />
            <span className="text-light"> <span className="service-green me-sm-3"><i className="fas fa-check"></i> </span> Sökmotoroptimering</span>
        </> : ""}
        {garanti ? <>
          <br />
            <span className="text-light"> <span className="service-green me-sm-3"><i className="fas fa-check"></i> </span> 12 Mån garanti</span>
        </> : ""}
        {support ? <>
          <br />
            <span className="text-light"> <span className="service-green me-sm-3"><i className="fas fa-check"></i> </span> 6 Mån IT-support</span>
        </> : ""}
        {anpassningabr ? <>
          <br />
            <span className="text-light"> <span className="service-green me-sm-3"><i className="fas fa-check"></i> </span> Anpassningsbar</span>
        </> : ""}
        {unikDesign ? <>
          <br />
            <span className="text-light"> <span className="service-green me-sm-3"><i className="fas fa-check"></i> </span> Unik design</span>
        </> : ""}
        {allDevices ? <>
          <br />
            <span className="text-light"> <span className="service-green me-sm-3"><i className="fas fa-check"></i> </span> Både IOS och Android</span>
        </> : ""}
        {ladingpage ? <>
          <br />
            <span className="text-light"> <span className="service-green me-sm-3"><i className="fas fa-check"></i> </span> Landing page</span>
        </> : ""}
      
        {organisk_trafik ? <>
          <br />
            <span className="text-light"> <span className="service-green me-sm-3"><i className="fas fa-check"></i> </span> Ökad organisk trafik</span>
        </> : ""}
        {nyckelord ? <>
          <br />
            <span className="text-light"> <span className="service-green me-sm-3"><i className="fas fa-check"></i> </span> Rätt nyckelord för din bransch</span>
        </> : ""}
        {SEO_rapporter ? <>
          <br />
            <span className="text-light"> <span className="service-green me-sm-3"><i className="fas fa-check"></i> </span> Regelbundna SEO-rapporter</span>
        </> : ""}
        {Konkurrentanalys ? <>
          <br />
            <span className="text-light"> <span className="service-green me-sm-3"><i className="fas fa-check"></i> </span> Konkurrentanalys</span>
        </> : ""}
        {Optimerat_innehåll ? <>
          <br />
            <span className="text-light"> <span className="service-green me-sm-3"><i className="fas fa-check"></i> </span> Optimerat innehåll för engagemang</span>
        </> : ""}
        {seo_service ? <>
          <br />
            <span className="text-light"> 
            <span className="service-green me-sm-3"><i className="fas fa-check"></i> </span> Toppa listan på sökmotorer< br />        
            <span className="service-green me-sm-3"><i className="fas fa-check"></i> </span> Uppföljning och uppdateringar
            </span>
        </> : ""}
        {grafikDesign ? <>
          <br />
            <span className="text-white"> 
            <span className="service-green me-sm-3"><i className="fas fa-check"></i> </span> UX & UI  <br />
            <span className="service-green me-sm-3"><i className="fas fa-check"></i> </span> Responsiv design  <br />
            </span>
        </> : ""}
          {SEM_marknadsföring ? <>
          <br />
            <span className="text-light"> 
            <span className="service-green me-sm-3"><i className="fas fa-check"></i> </span> Riktade annonser mot rätt folk<br />
            <span className="service-green me-sm-3"><i className="fas fa-check"></i> </span> Syns på toppen i sökresultat<br />
</span>
        </> : ""}
        {IT_konsultation ? <>
          <br />
            <span className="text-light"> 
            <span className="service-green me-sm-3"><i className="fas fa-check"></i> </span> Välj bland 50 konsulter<br />
            <span className="service-green me-sm-3"><i className="fas fa-check"></i> </span> Nytta garanti <br />

</span>
        </> : ""}
                
            </div>
            
            <div className="bottom">
                
                <div className="social-buttons-container">
                <a  className="social-button .social-button1">
                    <Google className="svg"/>
                          </a>
                <a   className="social-button .social-button2">
                      <OpenAI className="svg"/>

         
                      </a>
                <a className="social-button .social-button3">
                <DevOPs className="svg"/>
                </a>
                </div>
                <div className="view-more">
                <Link href={`/contact`} >
                    <button className="view-more-button service-link">Kontakta oss</button>  
                    </Link>
                    <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
                  
              </div>
            </div>
        </div>
       
    </div>  
 

  );
}
export default Service;
