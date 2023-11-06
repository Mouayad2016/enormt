import '../../public/assets/css/main.css';
import '../../public/assets/css/chatBotLoader.css';
import '../../public/assets/css/ChatBubbleComponent.css';
import '../../public/assets/css/component.css';
import '../../public/assets/css/custom.css';
import '../../public/assets/css/HomeNine.css';
import '../../public/assets/css/mainEnormt.css';
import '../../public/assets/css/design_card.css';
import '../../public/assets/css/designCard.css';
import '../../public/assets/css/hemsidorFastaPriser.css';
import '../../public/assets/css/service.css';
import '../../public/assets/css/support_card.css';
import '../../public/assets/css/cryptoCustomer.css';
import '../../public/assets/css/team.css';
import '../../public/assets/css/navbar.css';
import '../../public/assets/css/ContactBox.css';
import '../../public/assets/css/section.css';
import { Analytics } from '@vercel/analytics/react';

import 'aos/dist/aos.css'; // You can also use <link> in your document's <head> section
import AOS from 'aos';

import type { AppProps } from 'next/app';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    AOS.init({
      // Settings that you can configure
      offset: 200, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
    });
  }, []);
  return (
    <>
      <Analytics />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
