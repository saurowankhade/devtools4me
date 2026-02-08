import "@/styles/globals.css";
import { IBM_Plex_Mono, Instrument_Sans } from "next/font/google";

// Load IBM Plex Mono from Google Fonts
const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

// Load Instrument Sans from Google Fonts
const instrumentSans = Instrument_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${ibmPlexMono.variable} ${instrumentSans.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
