const data = [
	{
		id: 1,
		tjänst_sida: {
			meta_title:
				"Skräddarsydda IT-system och lösningar för din verksamhet | Enormt",
			meta_dec:
				"Utforska våra skräddarsydda IT-system och hur de kan transformera din verksamhet. Vi kombinerar hårdvara, mjukvara och nätverk för att förbättra dina arbetsprocesser och höja produktiviteten.",
			meta_keywords:
				"Skräddarsydda IT-system, verksamhetsförbättring, produktivitet, hårdvara, mjukvara, nätverk, Enormt",
			liCirkelBackGround: "bg-dark",
			liClsssName: "fal icon-sm text-warning",
			iconName: "gear",
			rubrik: "it-system",
			underRubrik:
				"Utforska våra IT-system och hur de kan transformera din verksamhet. Genom att kombinera hårdvara, mjukvara och nätverk skapar vi skräddarsydda lösningar som stödjer och förbättrar dina arbetsprocesser. Våra leverantörer utvecklar system som hjälper dig höja din produktivitet.",
			des: "Våra IT-system kombinerar avancerad teknologi och skräddarsydd mjukvara för att effektivisera dina affärsprocesser. Designade för säkerhet, skalbarhet och användarvänlighet, optimerar de produktivitet och kommunikation inom ditt företag.",
			sections: [
				{
					title: "Säkerhet",
					kortDes:
						"Vi förstår att ditt företag hanterar känslig information och att skyddet av denna data är avgörande för din verksamhets framgång. Vi utformar lösningar utefter den säkerhetsnivå som din organisation behöver. Ett säkert IT-system kan skyddad din organisation mot obehörig åtkomst, dataintrång och andra hot. Det är viktigt både  för era medarbetare och kunder att känslig information är i trygga händer.",
					imge: "file-protection.png",
					nytta: [
						{
							icon: "fas fa-shield-alt fa-2x text-primary", //for network security and firewalls
							rubrik: "Nätverkssäkerhet och brandväggar",
							underRubrik:
								"Stärk ditt företags nätverkssäkerhet med robusta brandväggar och säkerhetsåtgärder som skyddar mot intrång och attacker.",
						},
						{
							icon: "fas fa-virus-slash fa-2x text-primary", //for protection against malware
							rubrik: "Skydd mot skadlig programvara",
							underRubrik:
								"Skyddar din verksamhet mot virus, trojaner och ransomware genom att använda kraftfulla antivirusprogram och regelbundet uppdatera dina system.",
						},
						{
							icon: "fas fa-lock fa-2x text-primary", //for encryption and data storage
							rubrik: "Kryptering och datalagring",
							underRubrik:
								"Implementerar moderna krypteringsmetoder för att säkerställa att känslig information är skyddad vid överföring och lagring av data.",
						},
						{
							icon: "fas fa-undo fa-2x text-primary", //for backup and recovery
							rubrik: "Säkerhetskopiering och återställning",
							underRubrik:
								"Förhindra förlust av värdefull information genom automatiserad säkerhetskopiering och skydda din verksamhet med en robust backup-strategi.",
						},
					],
				},
				{
					title: "Prestanda",
					kortDes:
						"Prestanda är en kritisk faktor för framgången hos dina IT-system och kan direkt påverka produktiviteten och användarupplevelsen för både dina kunder och medarbetare. Våra leverantörer utvecklar högpresterande lösningar som är optimerade för snabbhet och pålitlighet. Med expertis och erfarenhet säkerställer vi att dina IT-system fungerar smidigt och effektivt.",
					imge: "system-performance-analysis.png",

					nytta: [
						{
							icon: "fas fa-cog fa-2x text-primary", //for optimization
							rubrik: "Snabba laddningstider",
							underRubrik:
								"En snabb och smidig prestanda gör det möjligt för dina användare  att effektivt navigera och använda ditt system utan att förlora uppmärksamheten.",
						},
						{
							icon: "fas fa-expand-arrows-alt fa-2x text-primary", //for scalability
							rubrik: "Resursoptimering",
							underRubrik:
								"Vi använder ditt företags resurser på bästa sätt, så att du får maximal prestanda baserat på de resurser som finns tillgängliga i din organisation.",
						},
						{
							icon: "fas fa-robot fa-2x text-primary", //for automation
							rubrik: "Lastbalansering",
							underRubrik:
								"Implementering av lastbalanseringstekniker används för att jämna ut belastningen på dina servrar och förbättra systemens prestanda och tillförlitlighet.",
						},
						{
							icon: "fas fa-tachometer-alt fa-2x text-primary", //for monitoring
							rubrik: "Prestandatestning och övervakning",
							underRubrik:
								"Vi kan genomföra regelbundna prestandatester och övervakar dina IT-system för att kunna upptäcka och åtgärda allvarliga problem innan de uppstår.",
						},
					],
				},

				{
					title: "Tillgänglighet",
					kortDes:
						"Våra leverantörer kan skapa lösningar som är lättillgängliga och användarvänliga för användarna, oavsett tekniska färdigheter, erfarenhet eller enheter. Genom att följa branschstandarder och riktlinjer för tillgänglighet, som Web Content Accessibility Guidelines, kan vi säkerställer ett system kan användas av alla. Vem och vart ett system kommer att använda ett fullständigt avgörande när man designar en IT-lösning.",
					imge: "tillgänglighet.png",

					nytta: [
						{
							icon: "fas fa-cog fa-2x text-primary", //for customization
							rubrik: "Anpassningsbar",
							underRubrik:
								"Möjliggör för användare att anpassa IT-systemet för att passa personliga behov och preferenser. Detta inkludera allt från visuella till funktionella anpassningar.",
						},
						{
							icon: "fas fa-file-alt fa-2x text-primary", //for guidelines and documentation
							rubrik: "Riktlinjer och dokumentation",
							underRubrik:
								"Att erbjuda tydliga riktlinjer och dokumentation om tillgänglighet säkerställer att användare vet hur de på bästa sätt kan använda sig av ditt IT-system.",
						},
						{
							icon: "fas fa-dice-d6 fa-2x text-primary", //for redundancy
							rubrik: "Redundans",
							underRubrik:
								"Att ha backup- och reservsystem för att undvika driftstopp vid fel och störningar.",
						},
						{
							icon: "fas fa-undo-alt fa-2x text-primary", //for automatic failover
							rubrik: "Automatisk felåterställning",
							underRubrik:
								"Att använda teknik som möjliggör automatisk återställning av systemkomponenter vid fel eller störningar för att minimera avbrottstider och påverkan på användarna.",
						},
					],
				},
				{
					title: "Skalbarhet",
					kortDes:
						"Denna  kritiska faktor säkerställer att ditt IT-system kan hantera en ökande arbetsbelastning, växande användarbas och vidareutveckling av funktioner. Genom att fokusera på skalbarhet kan du anpassa ditt system för att möta föränderliga krav och främja långsiktig tillväxt och framgång.",
					imge: "skalbarhet.png",

					nytta: [
						{
							icon: "fas fa-balance-scale fa-2x text-primary", //for load balancing
							rubrik: "Lastbalansering",
							underRubrik:
								"Genom att fördela arbetsbelastningen över fler resurser kan man förhindra överbelastning och på så sätt hantera större volymer av användare och förfrågningar.",
						},
						{
							icon: "fas fa-expand-arrows-alt fa-2x text-primary", //for elastic resources
							rubrik: "Elastiska resurser",
							underRubrik:
								"Ett system som automatiskt anpassar sig till föränderliga arbetsbelastningar genom att justera kapaciteten baserat på efterfrågan blir både kostnadseffektivt & skalbart.",
						},
						{
							icon: "fas fa-cubes fa-2x text-primary", //for functional scalability
							rubrik: "Funktionell skalbarhet",
							underRubrik:
								"I ett modulärt och anpassningsbart system kan man lägga till och ändra funktioner för att möta föränderliga behov utan att negativt påverka prestanda och stabilitet.",
						},
						{
							icon: "fas fa-cloud fa-2x text-primary", //for hybrid cloud solutions
							rubrik: "Hybridmolnlösningar",
							underRubrik:
								"Med både on-premise och molnbaserade resurser kan man skapa en flexibel och skalbar infrastruktur och dra nytta av kostnadsbesparingar, säkerhet och skalbarhet.",
						},
					],
				},
			],
		},

		hem_sida: {
			className: "nav-link active me-4",
			id: "pills-home-tab",
			data_bs_toggle: "pill",
			data_bs_target: "#pills-home",
			type: "button",
			role: "tab",
			aria_controls: "pills-home",
			aria_selected: true,
			namn: "IT-system",
			tabs: {
				imag: "assets/img/tab_img1.png",
				className: "tab-pane fade show active",
				id: "pills-home",
				className2: "text-center mb-5 mb-lg-0",
				aria_labelledby: "pills-home-tab",
				rubrik: "SKRÄDDARSYDDA IT-SYSTEM",
				des: "IT-System utvecklas för att förbättra verksamhetsprocesser, stödjer affärsbeslut och automatisera arbetsuppgifter. En skräddarsydd IT-lösning är avgörande för att säkerställa att ett företag är effektivt och konkurrenskraftigt.",
				list: ["Säkerhet", "Prestanda", "Automatisering"],
			},
		},
	},
	{
		id: 2,
		tjänst_sida: {
			meta_title: "Skapa kraftfulla mobilappar för din verksamhet | Enormt",
			meta_dec:
				"Utforska möjligheterna med mobilappar och hur de kan förändra interaktionen med dina kunder och anställda. Vi erbjuder skräddarsydda lösningar för att möta dina specifika behov och höja produktiviteten i din verksamhet.",
			meta_keywords:
				"Mobilappar, mobilapplikationer, användarupplevelse, användargränssnitt, plattformar, uppdatering, underhåll, Enormt",
			liCirkelBackGround: "bg-success",
			liClsssName: "fal icon-sm text-success",
			iconName: "fa-mobile-screen-button",

			iconName: "fa-mobile-screen-button",

			underRubrik:
				"En mobilappar kan förändra hur ditt företag interagerar med kunder och anställda. Genom att erbjuda moderna och kraftfulla lösningar direkt i fickan, möjliggörs en ständig uppkoppling och förbättrad produktiviteten i din verksamhet. En mobilapp är generellt mer pålitlig än en webbplats och våra leverantörer utvecklar anpassade appar för dina specifika behov och krav.",
			rubrik: "apputveckling",
			des: "Utveckla din verksamhets potential med skräddarsydda mobilappar. Vi erbjuder användarvänliga lösningar som placerar din tjänst i dina kunders och medarbetares händer, var de än är.",
			sections: [
				{
					title: "Användarupplevelse (UX)",
					kortDes:
						"God användarupplevelsen är kärnan i en framgångsrik mobilapp. Genom att fokusera på användarens behov och förväntningar skapar vi intuitiva och engagerande appar som ger en sömlös och behaglig upplevelse. Vårt mål är att skapa mobilappar som inte bara ser bra ut, utan också är lätta att använda och förstå, vilket i sin tur ökar användarnas tillfredsställelse och lojalitet.",

					imge: "ui-ux-design.png",

					nytta: [
						{
							icon: "fas fa-mobile-alt fa-2x text-primary", //for responsive design
							rubrik: "Användarcentrerad design",
							underRubrik:
								"Likt alla goda produkter ska även appar designas med användarens behov och förväntningar i fokus för att säkerställa en tillfredsställande användarupplevelse.",
						},
						{
							icon: "fas fa-users fa-2x text-primary", //for user-centered design
							rubrik: "Användartester",
							underRubrik:
								"Genom att utföra användartester kan man bättre förstå användarnas beteende och förväntningar. Detta hjälper oss att förbättra appens design och funktionalitet.",
						},
						{
							icon: "fas fa-palette fa-2x text-primary", //for visual design
							rubrik: "Tydlighet",
							underRubrik:
								"Att designa gränssnitt som är enkla att förstå och navigera, minskar användarens kognitiva belastning och gör appen mer användarvänlig.",
						},
						{
							icon: "fas fa-hand-pointer fa-2x text-primary", //for interaction design
							rubrik: "Engagerande upplevelser",
							underRubrik:
								"Det finns många sätt att göra en app mer engagerande. Genom gamification, belöningar och andra metoder kan man öka tillfredsställelse och lojalitet.",
						},
					],
				},
				{
					title: "Användargränssnitt (UI)",
					kortDes:
						"Användargränssnittet (UI) är det visuella och interaktiva elementet i en mobilapp som möjliggör kommunikation mellan användaren och appens funktioner. Ett effektivt och välutformat användargränssnitt är avgörande för att skapa en smidig och intuitiv användarupplevelse. Vi fokuserar på att leverera estetiskt tilltalande och funktionella gränssnitt som gör det enkelt för användare att navigera och interagera med appen.",
					imge: "ui-design.png",

					nytta: [
						{
							icon: "fas fa-palette fa-2x text-primary", //for design principles
							rubrik: "Designprinciper",
							underRubrik:
								"Att följa vedertagna designprinciper och riktlinjer, såsom materialdesign eller human interface guidelines säkerställer en konsistent och intuitiv användarupplevelse.",
						},
						{
							icon: "fas fa-list-ol fa-2x text-primary", //for visual hierarchy
							rubrik: "Visuell hierarki",
							underRubrik:
								"Genom att organisera och prioritera appens innehåll och element bidrar man till att appen blir lätt för användare att förstå och navigera.",
						},
						{
							icon: "fas fa-hand-point-up fa-2x text-primary", //for touch optimization
							rubrik: "Touch-optimering",
							underRubrik:
								"Anpassar användargränssnittet för touch-enheter för att säkerställa att det är lätt att interagera med appen på alla skärmstorlekar och enheter.",
						},
						{
							icon: "fas fa-check-circle fa-2x text-primary", //for feedback and confirmation
							rubrik: "Feedback och bekräftelse",
							underRubrik:
								"När man utvecklar tydlig feedback och bekräftar användarens korrekta och felaktiga åtgärder, ökar förtroendet och förståelsen för appens funktioner.",
						},
					],
				},

				{
					title: "Plattformar",
					kortDes:
						"När det gäller att utveckla mobilappar är det viktigt att välja rätt plattformar för att nå din målgrupp och säkerställa att din app kan användas av så många tilltänkta användare som möjligt. Vi erbjuder apputveckling för olika plattformar, inklusive iOS, Android och webbaserade lösningar, samt hybrid- och cross-platform alternativ. Vi tar hänsyn till dina affärsbehov och mål för att hjälpa dig att välja den bästa lösningen för din app.",
					imge: "apple-logo.png",
					nytta: [
						{
							icon: "fas fa-user fa-2x text-primary", //for target audience
							rubrik: "Målgrupp",
							underRubrik:
								"Att välja en plattform som passar målgruppen och de enheter de använder.",
						},
						{
							icon: "fas fa-chart-pie fa-2x text-primary", //for market share
							rubrik: "Marknadsandel",
							underRubrik:
								"Att välja en plattform med hög marknadsandel för att nå ut till en större användarbas.",
						},
						{
							icon: "fas fa-coins fa-2x text-primary", //for development costs
							rubrik: "Utvecklingskostnader",
							underRubrik:
								"Att välja en plattform som ger bra valuta för pengarna och håller nere utvecklingskostnaderna.",
						},
						{
							icon: "fas fa-tools fa-2x text-primary", //for ease of maintenance
							rubrik: "Enkelt underhåll",
							underRubrik:
								"Att välja en plattform som möjliggör enkel uppdatering och underhåll av mobilappen.",
						},
					],
				},
				{
					title: "Uppdatering & underhåll",
					kortDes:
						"För att säkerställa att din mobilapp fortsätter att prestera och möta användarnas förväntningar är det viktigt att regelbundet uppdatera och underhålla appen. Detta innefattar att fixa buggar, förbättra prestanda, lägga till nya funktioner och säkerställa att appen är kompatibel med senaste versionerna av operativsystem och enheter. Vi erbjuder tjänster inom uppdatering och underhåll för att hjälpa dig att hålla din app i toppskick och säkerställa en positiv användarupplevelse över tid.",
					imge: "update.png",

					nytta: [
						{
							icon: "fas fa-laptop fa-2x text-primary", //for OS compatibility
							rubrik: "Operativsystems kompatibilitet",
							underRubrik:
								"Se till att din app är kompatibel med de senaste versionerna av operativsystem, såsom iOS och Android, för att säkerställa en problemfri användarupplevelse.",
						},
						{
							icon: "fas fa-chart-line fa-2x text-primary", //for monitoring and analysis
							rubrik: "Övervakning och analys",
							underRubrik:
								"Samla in och analysera användardata för att identifiera trender, förbättringsområden och möjligheter för appens tillväxt och utveckling.",
						},
						{
							icon: "fas fa-arrows-alt-h fa-2x text-primary", //for migration and scalability
							rubrik: "Migrering och skalbarhet",
							underRubrik:
								"Utför migrering och skalbarhetsuppdateringar för att säkerställa att din app kan hantera ökad användning och förändrade krav på systemresurser.",
						},
						{
							icon: "fas fa-tachometer-alt fa-2x text-primary", //for performance improvements
							rubrik: "Prestandaförbättringar",
							underRubrik:
								"Optimera appens prestanda genom att minska laddningstider, förbättra resursanvändningen och säkerställa snabb respons.",
						},
					],
				},
			],
		},
		hem_sida: {
			className: "nav-link me-4",
			id: "pills-profile-tab",
			data_bs_toggle: "pill",
			data_bs_target: "#pills-profile",
			type: "button",
			role: "tab",
			aria_controls: "pills-profile",
			aria_selected: false,
			namn: "Mobilappar",
			rubrik: "behövs",

			tabs: {
				imag: "assets/img/tab_img2.png",
				className: "tab-pane fade",
				className2: "pe-5 mb-5 mb-lg-0",
				id: "pills-profile",
				aria_labelledby: "pills-profile-tab",
				rubrik: "MOBILAPPAR TILL ALLA",
				des: "Forma din verksamhets digitala närvaro med engagerande webbplatser som stärker interna & externa relationer.",
				list: ["Integration", "IOS & Andriod", "Användarupplevelse"],
			},
		},
	},
	{
		id: 3,
		tjänst_sida: {
			meta_title:
				"Skapa en kraftfull online-närvaro med vår webbutvecklingstjänst | Enormt",
			meta_dec:
				"Upptäck fördelarna med vår webbutvecklingstjänst som hjälper dig att skapa en effektiv och attraktiv digital plattform. Vi erbjuder skräddarsydda webblösningar med fokus på design, SEO-optimering, prestanda och innehållshantering",
			meta_keywords:
				"Webbutveckling, webbdesign, SEO-optimering, prestanda, innehållshantering, CMS, responsiv design, skalbarhet, Enormt",
			liCirkelBackGround: "bg-light",
			liClsssName: "fal icon-sm text-danger",
			iconName: "fa-code ",

			underRubrik:
				"En stark närvaro på nätet är idag grundläggande för framgångsrika företag och organisationer. En väl utformad och funktionsrik webbplats hjälper dig att nå din målgrupp, engagera användare och konvertera dem till lojala kunder. Våra leverantörer är specialiserade på att erbjuda skräddarsydda webblösningar som ger din organisation en unik och effektiv digital plattform för att stärka din verksamhet, kommunicera ditt varumärke och stödja dina affärsmål. ",
			rubrik: "webbutveckling & hemsidor",
			des: "Skapa en stark närvaro online med våra responsiva och engagerande webbsidor och webbapplikationer. Vi fokuserar på användarvänlighet och modern design för att maximera användarupplevelsen.",
			sections: [
				{
					title: "Design",
					kortDes:
						"En väl genomtänkt och attraktiv design är avgörande för att skapa en framgångsrik webbplats som engagerar och behåller besökare. Vi använder oss enbart av talangfulla designers fokuserade på att skapa designlösningar som är både estetiskt tilltalande och optimerade för att möjliggöra dina affärsmål. Design är mer än bara visuellt utseende; det handlar om att skapa en intuitiv, funktionell och användarvänlig upplevelse som smidigt guidar användare genom webbplatsen",
					imge: "responsive-device.png",

					nytta: [
						{
							icon: "fas fa-cogs fa-2x text-primary",
							rubrik: "Teknisk SEO",
							underRubrik:
								"Optimera webbplatsens tekniska aspekter, såsom hastighet, mobilanpassning och struktur, för att säkerställa en smidig och effektiv användarupplevelse.",
						},
						{
							icon: "fas fa-file-code fa-2x text-primary",
							rubrik: "On-page optimering",
							underRubrik:
								"Optimera webbplatsens innehåll och metadata, såsom titlar, beskrivningar och alt-texter, för att förbättra dess rankning i sökresultaten.",
						},
						{
							icon: "fas fa-chart-line fa-2x text-primary",
							rubrik: "Analys och övervakning",
							underRubrik:
								"SEO-verktyg kan användas för att övervaka och analysera din webbplats prestanda, identifiera förbättringsområden och mäta effekten av dina optimeringsinsatser.",
						},
						{
							icon: "fas fa-search fa-2x text-primary",
							rubrik: "Nyckelordsanalys",
							underRubrik:
								"Identifiera och välja de mest relevanta och effektiva nyckelorden för din webbplats och målgrupp, för att säkerställa att den attraherar rätt besökare.",
						},
					],
				},
				{
					title: "Sökmotoroptimering",
					kortDes:
						"SEO-optimering kan vara avgörande för att driva relevant trafik och potentiella kunder till din verksamhet. Genom att optimera din webbplats för sökmotorer som Google och Bing säkerställer du att din webbplats rankas högt i sökresultaten. Det finns flera beprövade SEO-strategier, som implementeras av våra leverantörer för att förbättrar din webbplats rankning och maximera antalet organiska besökare.",
					imge: "seo-search.png",
					nytta: [
						{
							icon: "fas fa-mobile-alt fa-2x text-primary",
							rubrik: "Responsiv design",
							underRubrik:
								"Skapar webbplatser som anpassar sig till olika skärmstorlekar och enheter, för optimal användarupplevelse oavsett hur besökarens val av plattform.",
						},
						{
							icon: "fas fa-users fa-2x text-primary",
							rubrik: "Användarcentrerad design",
							underRubrik:
								"Fokuserar på att förstå och möta användarnas behov och förväntningar, för att skapa en webbplats som är intuitiv, engagerande och lättnavigerad.",
						},
						{
							icon: "fas fa-images fa-2x text-primary",
							rubrik: "Grafiska element",
							underRubrik:
								"Skapar unika grafiska element, såsom ikoner, illustrationer och bilder, för att förstärka webbplatsens visuella intryck och kommunicera ditt varumärkes budskap.",
						},
						{
							icon: "fas fa-map-signs fa-2x text-primary",
							rubrik: "Navigation",
							underRubrik:
								"Designa en tydlig och konsistent navigationsstruktur som guidar användare genom webbplatsen och hjälper dem att enkelt hitta det de letar efter.",
						},
					],
				},

				{
					title: "Prestanda",
					kortDes:
						"Prestanda är en kritisk faktor för att säkerställa en snabb och smidig användarupplevelse, vilket påverkar både konverteringsgrad och sökmotorrankning. En välpresterande webbplats leder till nöjdare besökare och förbättrad synlighet online. Våra leverantörer använder beprövade metoder som säkerställer att din webbplats är snabb, effektiv och tillgänglig för alla användare.",
					imge: "browser-speed.png",

					nytta: [
						{
							icon: "fas fa-bolt fa-2x text-primary", //for speed optimization
							rubrik: "Hastighetsoptimering",
							underRubrik:
								"Förbättra laddningstider och webbplatsens respons genom att minska filstorlekar, optimera bilder och använda tekniker som caching och minifiering.",
						},
						{
							icon: "fas fa-mobile-alt fa-2x text-primary", //for cross-platform compatibility
							rubrik: "Olika plattformar",
							underRubrik:
								"Anpassa din webbplats för att fungera smidigt och effektivt på olika mobila enheter, vilket säkerställer en optimal användarupplevelse oavsett skärmstorlek.",
						},
						{
							icon: "fas fa-database fa-2x text-primary", //for database optimization
							rubrik: "Databasen",
							underRubrik:
								"Förbättra databasens prestanda genom att optimera dess struktur, indexering och frågor, vilket i sin tur ökar webbplatsens hastighet och effektivitet.",
						},
						{
							icon: "fas fa-chart-bar fa-2x text-primary", //for performance analysis
							rubrik: "Prestandaanalys",
							underRubrik:
								"Övervaka och analysera din webbplats prestanda med hjälp av verktyg och metoder som PageSpeed Insights, Lighthouse och Google Analytics.",
						},
					],
				},
				{
					title: "Innehållshantering och CMS",
					kortDes:
						"Effektiv innehållshantering och CMS (Content Management System) är nödvändigt för att kunna upprätthålla en dynamisk och användarvänlig webbplats. Genom att använda kraftfulla och flexibla CMS-plattformar kan du enkelt skapa, redigera och hantera webbplatsens innehåll och funktioner. Med rätt CMS får du full kontroll över din webbplats och dess innehåll.",
					imge: "skalbarhet.png",
					nytta: [
						{
							icon: "fas fa-cubes fa-2x text-primary", //for CMS platforms
							rubrik: "CMS-plattformar",
							underRubrik:
								"Vi levererar system som kan integreras med populära CMS-plattformar är så som WordPress, Drupal och Joomla. Alla plattformar har olika fördelar och nackdelar.",
						},
						{
							icon: "fas fa-puzzle-piece fa-2x text-primary", //for plugins and modules
							rubrik: "Plugin och moduler",
							underRubrik:
								"CMS-plattformar tillåter olika tilläggen och modulerna som kan användas för att utöka och anpassa funktionerna på din webbplats för kostnadseffektiv utveckling",
						},
						{
							icon: "fas fa-user-lock fa-2x text-primary", //for user permissions
							rubrik: "Användarbehörigheter",
							underRubrik:
								"Användarbehörigheter och roller krävs vid administrering av webbsidor för att hantera åtkomst och redigeringsrättigheter för olika användare.",
						},
						{
							icon: "fas fa-code fa-2x text-primary", //for custom CMS
							rubrik: "Skräddarsydda CMS",
							underRubrik:
								"Utveckla CMS som är skräddarsydda för att passa dina specifika behov och krav. Detta möjliggör enkel och effektiv hantering av webbplatsens innehåll och struktur.",
						},
					],
				},
			],
		},
		hem_sida: {
			className: "nav-link",
			id: "pills-contact-tab",
			data_bs_toggle: "pill",
			data_bs_target: "#pills-contact",
			type: "button",
			role: "tab",
			aria_controls: "pills-contact",
			aria_selected: false,
			namn: "Webbutveckling",
			rubrik: "behövs",
			tabs: {
				imag: "assets/img/tab_img3.png",
				className: "tab-pane fade",
				className2: "mb-5 mb-lg-0",
				id: "pills-contact",
				aria_labelledby: "pills-contact-tab",
				rubrik: "EFFEKTIV WEBBUTVECKLING",
				des: "Vi tillhandahåller en mängd olika webbtjänster, allt från webbapplikationer till avancerade e-handelsplattformar för flera olika branscher. Din webbplattform är avgörande för att säkerställa ditt företags konkurrenskraft online.",
				list: [
					"Anpassningsbarhet",
					"Sökmotoroptimering",
					"Användardata och analys",
				],
			},
		},
	},
];

export default data;
