import "../../public/assets/css/main.css";
import "../../public/assets/css/chatBotLoader.css";
import "../../public/assets/css/ChatBubbleComponent.css";
import "../../public/assets/css/component.css";
import "../../public/assets/css/custom.css";
import "../../public/assets/css/HomeNine.css";
import "../../public/assets/css/mainEnormt.css";
import "../../public/assets/css/design_card.css";
import "../../public/assets/css/designCard.css";
import "../../public/assets/css/hemsidorFastaPriser.css";
import "../../public/assets/css/service.css";
import "../../public/assets/css/support_card.css";
import "../../public/assets/css/cryptoCustomer.css";
import "../../public/assets/css/team.css";
import "../../public/assets/css/navbar.css";
import "../../public/assets/css/ContactBox.css";
import "../../public/assets/css/section.css";
import "../../public/assets/css/fw-style.css";

// import "@fortawesome/fontawesome-svg-core/styles.css";

// import { config } from "@fortawesome/fontawesome-svg-core";
// config.autoAddCss = false;

import "../../fa-library";
// Bug fixes for fontawsome with SSR
// This ensures that the icon CSS is loaded immediately before attempting to render icons

// Prevent fontawesome from dynamically adding its css since we did it manually above

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import type { AppProps } from "next/app";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Analytics />
			<SpeedInsights />
			<Component {...pageProps} />;
		</>
	);
}

export default MyApp;
