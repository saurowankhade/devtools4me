import Head from 'next/head';
import Script from 'next/script';

const MetaSEO = (props) => {
	const {
		title,
		description = '',
		keywords = '',
		ogImage='/og-images.png',
		url = 'https://devtools4me.com/',
		jsonLD = null,
		jsonLDType = 'devtools4me-json-ld',
		canonical = 'https://devtools4me.com/',
		twitterCreatorProfile,
		noIndex = false,
		favicon,
		googleAnalyticsId,
		siteName = 'devtools4me',
		type = 'website',
		nextUrl = null,
		prevUrl = null,
		extraMetaTags = null,
	} = props;

	// Notes for JSON LD
	// Problem - Adding a <script> tag inside the <Head> element will not work in NextJS, it creates duplicate JSON LDs with an error
	// Solutions -
	// 1. Use the 'next/script' <Script> tag OUTSIDE the <Head> element
	//    Ref - https://stackoverflow.com/questions/76019992/missing-or-object-member-name-in-json-ld
	// 2. OR use "dangerouslySetInnerHTML" to set a normal <script> tag inside the <Head> element like before
	//    Ref - https://stackoverflow.com/questions/59318263/how-can-i-use-application-ldjson-in-nextjs
	// We have implemented Solution (1) to ignore using "dangerouslySetInnerHTML" for now as it can be less secure

	/**
	 * Issue: unicode and specific type of emoji caused error in umami,
	 * which used to throw 500 error and log out user on refresh.
	 * Following regex remove unicode and emoji from title
	 */
	const pageTitle = title
		? title?.replace(/[^\p{L}\p{N}\p{P}\p{Zs}|]/gu, '')
		: '';

	return (
		<>
			{jsonLD ? (
				<Script id={jsonLDType} type='application/ld+json'>
					{JSON.stringify(jsonLD)}
				</Script>
			) : null}

			<Head>
				<title>{pageTitle}</title>
				<meta name='description' content={description} />

				<meta property='og:locale' content='en' />
				<meta property='og:site_name' content={siteName} />

				{/* Facebook Meta Tags */}
				<meta property='og:url' content={url} />
				<meta property='og:type' content={type} />
				<meta property='og:title' content={pageTitle} />
				<meta property='og:description' content={description} />
				<meta property='og:site_name' content={siteName} />
				<meta name='apple-mobile-web-app-title' content={siteName} />
				<meta name='application-name' content={siteName} />

				{/* Twitter Meta Tags */}
				<meta name='twitter:card' content='summary_large_image' />
				<meta property='twitter:domain' content={url} />
				<meta property='twitter:url' content={url} />
				<meta name='twitter:title' content={pageTitle} />
				<meta name='twitter:description' content={description} />

				<meta name='twitter:site' content='@devtools4me' />
				<meta name='twitter:creator' content='@devtools4me' />

				{twitterCreatorProfile ? (
					<>
						<meta name='twitter:site' content={`@${twitterCreatorProfile}`} />
						<meta
							name='twitter:creator'
							content={`@${twitterCreatorProfile}`}
						/>
					</>
				) : null}

				{canonical ? <link rel='canonical' href={canonical} /> : null}

				{nextUrl ? (
					<link rel='next' href={`https://devtools4me.io${nextUrl}`} />
				) : null}

				{prevUrl ? (
					<link rel='prev' href={`https://devtools4me.io${prevUrl}`} />
				) : null}

				
					
						<meta name='twitter:image' content={ogImage} />
						<meta property='og:image' content={ogImage} />
						<meta property='og:image:width' content='1200' />
						<meta property='og:image:height' content='628' />
				

				{extraMetaTags}

				{keywords ? <meta name='keywords' content={keywords} /> : null}

			
				<meta name='robots' content='index,follow' />
				<meta name='googlebot' content='index,follow' />
				
				<link rel='icon' type='image/x-icon' href={favicon ?? '/favicon.ico'} />
				<link rel='icon' href={favicon ?? '/favicon.ico'} />
				<link
					rel='mask-icon'
					href={favicon ?? '/favicon.ico'}
					color='#00AA45'
				/>
				<link
					rel='shortcut icon'
					type='image/x-icon'
					href={favicon ?? '/favicon.ico'}
				/>
				<link rel='apple-touch-icon' href={favicon ?? '/favicon.ico'} />
				<link
					rel='apple-touch-icon'
					sizes='152x152'
					href={favicon ?? '/favicon.ico'}
				/>
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href={favicon ?? '/favicon.ico'}
				/>
				<link
					rel='apple-touch-icon'
					sizes='167x167'
					href={favicon ?? '/favicon.ico'}
				/>
				<link rel='icon' sizes='192x192' href={favicon ?? '/favicon.ico'} />
				<link rel='icon' sizes='128x128' href={favicon ?? '/favicon.ico'} />
			</Head>
		</>
	);
};

export default MetaSEO;
