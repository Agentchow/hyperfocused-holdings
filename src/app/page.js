import Metrics from "@/components/Metrics";
import Core from "../components/Core";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import About from "../components/About";
import Divisons from "@/components/Divisons";
import Footer from "@/components/Footer";
import Image from "next/image";
export const metadata = {
  title: "HyperFocused Holdings | Private Fund & Market Making",
  description:
    "A private market-making fund partnered with Polymarket and Kalshi, with additional operations on Hyperliquid.",
  openGraph: {
    title: "HyperFocused Holdings | Private Fund & Market Making",
    description:
      "Systematic prediction-market liquidity powered by proprietary pricing, execution, and risk systems.",
    type: "website",
    locale: "en_US",
  },
};
export const dynamic = "force-static";
export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Core />
      <Metrics />
      <Divisons />

      <div
        className={`2xl:text-[64px] text-4xl md:text-5xl lg:text-6xl font-semibold text-center text-white/60 bg-c-black  flex items-center justify-center flex-col`}
      >
        <h1 className="mt-32">Exchanges & Venues</h1>
        <div className="flex mt-6 mb-20 md:my-12 md:mb-32 gap-6 md:gap-10 mx-auto z-10 items-center">
          <p className="text-2xl md:text-4xl text-white">Polymarket</p>
          <p className="text-2xl md:text-4xl text-white">Hyperliquid</p>
          <Image
            src="/kalshi.svg"
            alt="Kalshi logo"
            width={160}
            height={40}
            className="h-full max-w-24 md:max-w-36"
          />
        </div>
      </div>
      <div className="bg-black">
        <About />
      </div>

      <Footer />
    </div>
  );
}
