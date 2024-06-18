import { RiFlutterFill } from "react-icons/ri";
import { TbBrandReactNative, TbSql, TbSeo } from "react-icons/tb";
import RtlLogoSlider from "../comp/components/RtlLogoSlider";
import LtrLogoSlider from "../comp/components/LtrLogoSlider";
import {
	FaApple,
	FaNodeJs,
	FaJava,
	FaSwift,
	FaAws,
	FaVectorSquare,
	FaSketch,
	FaGitlab,
	FaDocker,
	FaNpm,
	FaYarn,
	FaAngular,
	FaVuejs,
	FaGithub,
} from "react-icons/fa";
import { DiAndroid, DiMongodb } from "react-icons/di";
import {
	SiAdobexd,
	SiApachecordova,
	SiXamarin,
	SiKotlin,
	SiTypescript,
	SiVisualstudiocode,
	SiRedux,
	SiBabel,
	SiWebpack,
	SiMariadb,
	SiAzureartifacts,
	SiGooglecloud,
} from "react-icons/si";
import { IoLogoIonic, IoMdGitBranch, IoLogoBitbucket } from "react-icons/io";

import { AiFillOpenAI } from "react-icons/ai";
import { FaGoogle } from "react-icons/fa";
import { FaSlack } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { IoLogoElectron, IoLogoFirebase } from "react-icons/io5";
import { TiVendorMicrosoft } from "react-icons/ti";

function sliderLogos(size) {
	const contentSmall = [
		<RtlLogoSlider
			slides={[
				{ icon: <TbBrandReactNative size={size} color='black' /> },
				{ icon: <RiFlutterFill size={size} color='black' /> },
				{ icon: <FaApple size={size} color='black' /> },
				{ icon: <DiAndroid size={size} color='black' /> },
				{ icon: <TbBrandReactNative size={size} color='black' /> },
				{ icon: <RiFlutterFill size={size} color='black' /> },
				{ icon: <FaApple size={size} color='black' /> },
				{ icon: <DiAndroid size={size} color='black' /> },
			]}
		/>,
		<LtrLogoSlider
			slides={[
				{ icon: <FaAngular size={size} color='white' /> },
				{ icon: <SiXamarin size={size} color='white' /> },
				{ icon: <IoLogoIonic size={size} color='white' /> },
				{ icon: <FaVuejs size={size} color='white' /> },
				{ icon: <SiBabel size={size} color='white' /> },
				{ icon: <FaAngular size={size} color='white' /> },
				{ icon: <SiXamarin size={size} color='white' /> },
				{ icon: <IoLogoIonic size={size} color='white' /> },
			]}
		/>,
		<RtlLogoSlider
			slides={[
				{ icon: <SiApachecordova size={size} color='black' /> },
				{ icon: <FaSwift size={size} color='black' /> },
				{ icon: <SiKotlin size={size} color='black' /> },
				{ icon: <IoLogoFirebase size={size} color='black' /> },
				{ icon: <SiApachecordova size={size} color='black' /> },
				{ icon: <FaSwift size={size} color='black' /> },
				{ icon: <SiKotlin size={size} color='black' /> },
				{ icon: <IoLogoFirebase size={size} color='black' /> },
			]}
		/>,
		<LtrLogoSlider
			slides={[
				{ icon: <SiWebpack size={size} color='white' /> },
				{ icon: <IoLogoElectron size={size} color='white' /> },
				{ icon: <FaNpm size={size} color='white' /> },
				{ icon: <FaYarn size={size} color='white' /> },
				{ icon: <SiWebpack size={size} color='white' /> },
				{ icon: <IoLogoElectron size={size} color='white' /> },
				{ icon: <FaNpm size={size} color='white' /> },
			]}
		/>,
		<RtlLogoSlider
			slides={[
				{ icon: <TbBrandReactNative size={size} color='black' /> },
				{ icon: <RiFlutterFill size={size} color='black' /> },
				{ icon: <FaApple size={size} color='black' /> },
				{ icon: <DiAndroid size={size} color='black' /> },
				{ icon: <TbBrandReactNative size={size} color='black' /> },
				{ icon: <RiFlutterFill size={size} color='black' /> },
				{ icon: <FaApple size={size} color='black' /> },
				{ icon: <DiAndroid size={size} color='black' /> },
			]}
		/>,
		<LtrLogoSlider
			slides={[
				{ icon: <TbSql size={size} color='white' /> },
				{ icon: <DiMongodb size={size} color='white' /> },
				{ icon: <FaVectorSquare size={size} color='white' /> },
				{ icon: <SiMariadb size={size} color='white' /> },
				{ icon: <TbSql size={size} color='white' /> },
				{ icon: <DiMongodb size={size} color='white' /> },
				{ icon: <FaVectorSquare size={size} color='white' /> },
				{ icon: <SiMariadb size={size} color='white' /> },
			]}
		/>,
		<RtlLogoSlider
			slides={[
				{ icon: <SiXamarin size={size} color='black' /> },
				{ icon: <IoLogoIonic size={size} color='black' /> },
				{ icon: <FaJava size={size} color='black' /> },
				{ icon: <FaNodeJs size={size} color='black' /> },
				{ icon: <SiXamarin size={size} color='black' /> },
				{ icon: <IoLogoIonic size={size} color='black' /> },
				{ icon: <FaJava size={size} color='black' /> },
				{ icon: <FaNodeJs size={size} color='black' /> },
			]}
		/>,
		<LtrLogoSlider
			slides={[
				{ icon: <AiFillOpenAI size={size} color='white' /> },
				{ icon: <FaGoogle size={size} color='white' /> },
				{ icon: <TbSeo size={size} color='white' /> },
				{ icon: <SiAzureartifacts size={size} color='white' /> },
				{ icon: <AiFillOpenAI size={size} color='white' /> },
				{ icon: <FaGoogle size={size} color='white' /> },
				{ icon: <TbSeo size={size} color='white' /> },
				{ icon: <SiAzureartifacts size={size} color='white' /> },
			]}
		/>,
		<RtlLogoSlider
			slides={[
				{ icon: <SiGooglecloud size={size} color='black' /> },
				{ icon: <FaSlack size={size} color='black' /> },
				{ icon: <FaWordpress size={size} color='black' /> },
				{ icon: <SiTypescript size={size} color='black' /> },
				{ icon: <SiGooglecloud size={size} color='black' /> },
				{ icon: <FaSlack size={size} color='black' /> },
				{ icon: <FaWordpress size={size} color='black' /> },
				{ icon: <SiTypescript size={size} color='black' /> },
			]}
		/>,
		<LtrLogoSlider
			slides={[
				{ icon: <SiGooglecloud size={size} color='white' /> },
				{ icon: <FaSlack size={size} color='white' /> },
				{ icon: <FaWordpress size={size} color='white' /> },
				{ icon: <SiAdobexd size={size} color='white' /> },
				{ icon: <SiGooglecloud size={size} color='white' /> },
				{ icon: <FaSlack size={size} color='white' /> },
				{ icon: <FaWordpress size={size} color='white' /> },
				{ icon: <SiAdobexd size={size} color='white' /> },
			]}
		/>,
		<RtlLogoSlider
			slides={[
				{ icon: <FaGithub size={size} color='black' /> },
				{ icon: <TiVendorMicrosoft size={size} color='black' /> },
				{ icon: <FaAws size={size} color='black' /> },
				{ icon: <SiVisualstudiocode size={size} color='black' /> },
				{ icon: <FaGithub size={size} color='black' /> },
				{ icon: <TiVendorMicrosoft size={size} color='black' /> },
				{ icon: <FaAws size={size} color='black' /> },
				{ icon: <SiVisualstudiocode size={size} color='black' /> },
			]}
		/>,
		<LtrLogoSlider
			slides={[
				{ icon: <FaSketch size={size} color='white' /> },
				{ icon: <IoMdGitBranch size={size} color='white' /> },
				{ icon: <FaAws size={size} color='white' /> },
				{ icon: <SiVisualstudiocode size={size} color='white' /> },
				{ icon: <FaSketch size={size} color='white' /> },
				{ icon: <IoMdGitBranch size={size} color='white' /> },
				{ icon: <FaAws size={size} color='white' /> },
				{ icon: <SiVisualstudiocode size={size} color='white' /> },
			]}
		/>,
		<RtlLogoSlider
			slides={[
				{ icon: <IoLogoBitbucket size={size} color='black' /> },
				{ icon: <FaGitlab size={size} color='black' /> },
				{ icon: <FaDocker size={size} color='black' /> },
				{ icon: <SiRedux size={size} color='black' /> },
				{ icon: <IoLogoBitbucket size={size} color='black' /> },
				{ icon: <FaGitlab size={size} color='black' /> },
				{ icon: <FaDocker size={size} color='black' /> },
				{ icon: <SiRedux size={size} color='black' /> },
			]}
		/>,
	];

	const contentMedium = [
		<RtlLogoSlider
			slides={[
				{ icon: <TbBrandReactNative size={size} color='black' /> },
				{ icon: <RiFlutterFill size={size} color='black' /> },
				{ icon: <FaApple size={size} color='black' /> },
				{ icon: <DiAndroid size={size} color='black' /> },
				{ icon: <TbBrandReactNative size={size} color='black' /> },
				{ icon: <RiFlutterFill size={size} color='black' /> },
				{ icon: <FaApple size={size} color='black' /> },
				{ icon: <DiAndroid size={size} color='black' /> },
			]}
		/>,
		<LtrLogoSlider
			slides={[
				{ icon: <FaAngular size={size} color='white' /> },
				{ icon: <SiXamarin size={size} color='white' /> },
				{ icon: <IoLogoIonic size={size} color='white' /> },
				{ icon: <FaVuejs size={size} color='white' /> },
				{ icon: <SiBabel size={size} color='white' /> },
				{ icon: <FaAngular size={size} color='white' /> },
				{ icon: <SiXamarin size={size} color='white' /> },
				{ icon: <IoLogoIonic size={size} color='white' /> },
			]}
		/>,
		<RtlLogoSlider
			slides={[
				{ icon: <SiApachecordova size={size} color='black' /> },
				{ icon: <FaSwift size={size} color='black' /> },
				{ icon: <SiKotlin size={size} color='black' /> },
				{ icon: <IoLogoFirebase size={size} color='black' /> },
				{ icon: <SiApachecordova size={size} color='black' /> },
				{ icon: <FaSwift size={size} color='black' /> },
				{ icon: <SiKotlin size={size} color='black' /> },
				{ icon: <IoLogoFirebase size={size} color='black' /> },
			]}
		/>,
		<LtrLogoSlider
			slides={[
				{ icon: <SiWebpack size={size} color='white' /> },
				{ icon: <IoLogoElectron size={size} color='white' /> },
				{ icon: <FaNpm size={size} color='white' /> },
				{ icon: <FaYarn size={size} color='white' /> },
				{ icon: <SiWebpack size={size} color='white' /> },
				{ icon: <IoLogoElectron size={size} color='white' /> },
				{ icon: <FaNpm size={size} color='white' /> },
				{ icon: <FaYarn size={size} color='white' /> },
			]}
		/>,
		<RtlLogoSlider
			slides={[
				{ icon: <TbBrandReactNative size={size} color='black' /> },
				{ icon: <RiFlutterFill size={size} color='black' /> },
				{ icon: <FaApple size={size} color='black' /> },
				{ icon: <DiAndroid size={size} color='black' /> },
				{ icon: <TbBrandReactNative size={size} color='black' /> },
				{ icon: <RiFlutterFill size={size} color='black' /> },
				{ icon: <FaApple size={size} color='black' /> },
				{ icon: <DiAndroid size={size} color='black' /> },
			]}
		/>,
		<LtrLogoSlider
			slides={[
				{ icon: <TbSql size={size} color='white' /> },
				{ icon: <DiMongodb size={size} color='white' /> },
				{ icon: <FaVectorSquare size={size} color='white' /> },
				{ icon: <SiMariadb size={size} color='white' /> },
				{ icon: <TbSql size={size} color='white' /> },
				{ icon: <DiMongodb size={size} color='white' /> },
				{ icon: <FaVectorSquare size={size} color='white' /> },
				{ icon: <SiMariadb size={size} color='white' /> },
			]}
		/>,
		<RtlLogoSlider
			slides={[
				{ icon: <SiXamarin size={size} color='black' /> },
				{ icon: <IoLogoIonic size={size} color='black' /> },
				{ icon: <FaJava size={size} color='black' /> },
				{ icon: <FaNodeJs size={size} color='black' /> },
				{ icon: <SiXamarin size={size} color='black' /> },
				{ icon: <IoLogoIonic size={size} color='black' /> },
				{ icon: <FaJava size={size} color='black' /> },
				{ icon: <FaNodeJs size={size} color='black' /> },
			]}
		/>,
		<LtrLogoSlider
			slides={[
				{ icon: <AiFillOpenAI size={size} color='white' /> },
				{ icon: <FaGoogle size={size} color='white' /> },
				{ icon: <TbSeo size={size} color='white' /> },
				{ icon: <SiAzureartifacts size={size} color='white' /> },
				{ icon: <AiFillOpenAI size={size} color='white' /> },
				{ icon: <FaGoogle size={size} color='white' /> },
				{ icon: <TbSeo size={size} color='white' /> },
				{ icon: <SiAzureartifacts size={size} color='white' /> },
			]}
		/>,
		<RtlLogoSlider
			slides={[
				{ icon: <SiGooglecloud size={size} color='black' /> },
				{ icon: <FaSlack size={size} color='black' /> },
				{ icon: <FaWordpress size={size} color='black' /> },
				{ icon: <SiTypescript size={size} color='black' /> },

				{ icon: <SiGooglecloud size={size} color='black' /> },
				{ icon: <FaSlack size={size} color='black' /> },
				{ icon: <FaWordpress size={size} color='black' /> },
				{ icon: <SiTypescript size={size} color='black' /> },
			]}
		/>,
		<LtrLogoSlider
			slides={[
				{ icon: <SiGooglecloud size={size} color='white' /> },
				{ icon: <FaSlack size={size} color='white' /> },
				{ icon: <FaWordpress size={size} color='white' /> },
				{ icon: <SiAdobexd size={size} color='white' /> },
				{ icon: <SiGooglecloud size={size} color='white' /> },
				{ icon: <FaSlack size={size} color='white' /> },
				{ icon: <FaWordpress size={size} color='white' /> },
				{ icon: <SiAdobexd size={size} color='white' /> },
			]}
		/>,
		<RtlLogoSlider
			slides={[
				{ icon: <FaGithub size={size} color='black' /> },
				{ icon: <TiVendorMicrosoft size={size} color='black' /> },
				{ icon: <FaAws size={size} color='black' /> },
				{ icon: <SiVisualstudiocode size={size} color='black' /> },
				{ icon: <FaGithub size={size} color='black' /> },
				{ icon: <TiVendorMicrosoft size={size} color='black' /> },
				{ icon: <FaAws size={size} color='black' /> },
				{ icon: <SiVisualstudiocode size={size} color='black' /> },
			]}
		/>,
		<LtrLogoSlider
			slides={[
				{ icon: <FaSketch size={size} color='white' /> },
				{ icon: <IoMdGitBranch size={size} color='white' /> },
				{ icon: <FaAws size={size} color='white' /> },
				{ icon: <SiVisualstudiocode size={size} color='white' /> },
				{ icon: <FaSketch size={size} color='white' /> },
				{ icon: <IoMdGitBranch size={size} color='white' /> },
				{ icon: <FaAws size={size} color='white' /> },
				{ icon: <SiVisualstudiocode size={size} color='white' /> },
			]}
		/>,
		<RtlLogoSlider
			slides={[
				{ icon: <IoLogoBitbucket size={size} color='black' /> },
				{ icon: <FaGitlab size={size} color='black' /> },
				{ icon: <FaDocker size={size} color='black' /> },
				{ icon: <SiRedux size={size} color='black' /> },
				{ icon: <IoLogoBitbucket size={size} color='black' /> },
				{ icon: <FaGitlab size={size} color='black' /> },
				{ icon: <FaDocker size={size} color='black' /> },
				{ icon: <SiRedux size={size} color='black' /> },
			]}
		/>,
		<LtrLogoSlider
			slides={[
				{ icon: <FaAngular size={size} color='white' /> },
				{ icon: <SiXamarin size={size} color='white' /> },
				{ icon: <IoLogoIonic size={size} color='white' /> },
				{ icon: <FaVuejs size={size} color='white' /> },
				{ icon: <SiBabel size={size} color='white' /> },
				{ icon: <FaAngular size={size} color='white' /> },
				{ icon: <SiXamarin size={size} color='white' /> },
				{ icon: <IoLogoIonic size={size} color='white' /> },
			]}
		/>,
	];

	return { contentSmall, contentMedium };
}

export { sliderLogos };
