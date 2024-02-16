import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

class MyDocument extends Document {
	render() {
		return (
			<Html lang='sv'>
				<Head>
					{/* <title>Enormt - Ledande IT-leverantör i Solna, Sverige</title> */}

					<meta charSet='utf-8' />
					<link rel='icon' href='/assets/img/enormt/logo/favicon.ico' />
					<link
						rel='icon'
						type='image/png'
						sizes='32x32'
						href='/assets/img/enormt/logo/favicon-32x32.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='16x16'
						href='/assets/img/enormt/logo/favicon-16x16.png'
					/>
					<link
						rel='manifest'
						href='/assets/img/enormt/logo/site.webmanifest'
					/>
					<meta name='msapplication-TileColor' content='#aedcf2' />
					<meta name='theme-color' content='#FFFFFF' />
					<link
						rel='apple-touch-icon'
						sizes='180x180'
						href='%PUBLIC_URL%/assets/img/enormt/logo/apple-touch-icon.png'
					/>

					<meta
						name='viewport'
						content='width=device-width, initial-scale=1.0'
					/>
					<meta name='theme-color' content='#000000' />

					<meta property='og:image' content='/assets/img/enormt/meta/so.png' />
					<meta property='og:image:width' content='1200' />
					<meta property='og:image:height' content='630' />
					<meta property='og:title' content='enormt.se' />
					<meta
						property='og:description'
						content='Funderar du på att investera i en hemsida, mobilapputveckling, ett IT-system eller behöver IT-konsultation? Vi är Nordens bästa utvecklare. Kontakta oss idag!.'
					/>
					<meta property='og:url' content='https://www.enormt.se/' />

					<meta name='twitter:card' content='summary_large_image' />
					<meta property='twitter:domain' content='enormt.se' />
					<meta property='twitter:url' content='https://www.enormt.se/' />
					<meta name='twitter:title' content='enormt.se' />
					<meta
						name='twitter:description'
						content='Funderar du på att investera i en hemsida, mobilapputveckling, ett IT-system eller behöver IT-konsultation? Vi är Nordens bästa utvecklare. Kontakta oss idag!.'
					/>
					<meta name='twitter:image' content='/assets/img/enormt/meta/so.png' />

					{/* Google Tag Manager */}
					{/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-TCL9E8MFP9"></script> */}
					<script
						dangerouslySetInnerHTML={{
							__html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-TCL9E8MFP9');
              `,
						}}
					/>
				</Head>
				<body>
					<noscript>
						It looks like you have JavaScript disabled in your web browser. Our
						app requires JavaScript to function properly, so please enable it
						and reload the page. If you need help enabling JavaScript, please
						refer to your web browsers documentation or search online for
						instructions.
					</noscript>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
