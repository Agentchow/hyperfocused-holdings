import Metrics from "@/components/Metrics";
import Core from "../components/Core";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import About from "../components/About";
import Divisons from "@/components/Divisons";
import { range } from "../../helpers/utils";
import Footer from "@/components/Footer";
import Image from "next/image";
export const metadata = {
  title: "HyperFocused Holdings | Private Equity & Institutional Trading",
  description:
    "Acquiring, building, and scaling founder-led businesses with AI-driven value creation. Institutional market maker on Kalshi. Targeting $250k–$2M EBITDA, succession-ready, US/Canada.",
  openGraph: {
    title: "HyperFocused Holdings | Private Equity & Institutional Trading",
    description:
      "Acquiring, building, and scaling founder-led businesses. Institutional market maker on Kalshi's CFTC-regulated prediction exchange.",
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
        <h1 className="mt-32">Current Partners</h1>
        <div className="flex mt-6 mb-8 md:my-12 md:mb-16 gap-6 mx-auto z-10 items-center">
          {range(2).map((i) => {
            const num = i + 1;
            return (
              <Image
                key={i}
                src={`/${num}.svg`}
                alt={`Partner ${num} logo`}
                width={160}
                height={60}
                className="h-full max-w-20 md:max-w-30"
              />
            );
          })}
        </div>
        <div className="flex flex-col items-center mb-20 md:mb-32">
          <div className="flex items-center gap-3 bg-[#111111] rounded-2xl px-8 py-5 border border-white/10">
            <div className="flex flex-col items-center">
              <p className="text-2xl md:text-3xl font-bold text-c-orange tracking-tight">KALSHI</p>
              <p className="text-xs md:text-sm text-white/40 font-normal mt-1">Institutional Market Maker Partner</p>
            </div>
          </div>
          <p className="text-sm md:text-base text-white/30 font-normal mt-4 max-w-md text-center">
            CFTC-regulated prediction exchange &bull; $22B valuation &bull; 89% U.S. market share
          </p>
        </div>
      </div>
      <div className="bg-black">
        <About />
      </div>

      <Footer />
    </div>
  );
}
