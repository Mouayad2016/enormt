import { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import "../app/globals.css"; // Verify the path to global styles
import { useEffect } from "react";
import { useRouter } from "next/router";

import type { Metadata } from "next";

// export const metadata: Metadata = {
// 	title: "Create Next App",
// 	description: "Generated by create next app",
// };

function MyApp({ Component, pageProps }: AppProps) {
	const { locale } = useRouter();

	useEffect(() => {
		document.documentElement.lang = locale;
		document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
	}, [locale]);
	return (
		<>
			<Component {...pageProps} />
		</>
	);
}

export default appWithTranslation(MyApp);
