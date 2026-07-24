import React from "react";
import TitleCard from "./TitleCard";
import Modal from "./Modal";

import {
  VentureSvg,
  TradingSvg,
} from "../../helpers/icons";
import TagLine from "./TagLine";
import { ForecastChart } from "./ForecastChart";
import { ForecastHistogram } from "./ForecastHistogram";

export default function Divisons() {
  const divisionsData = [
    {
      division: "Market Making",
      revenueStreams:
        "Market-making spreads, exchange liquidity provision, and proprietary pricing",
      targetMargin: "40–65%",
    },
  ];

  const trends = [
    {
      title: "Prediction Markets Explosion",
      description:
        "Kalshi's annualized volume surged from $52B to $178B in six months. The sector is projected to reach $9.2B in annual revenue by 2030 as institutional capital flows in.",
    },
    {
      title: "Institutional Adoption",
      description:
        "Growing exchange volumes and institutional participation are increasing demand for reliable, scalable liquidity.",
    },
    {
      title: "Quantitative Infrastructure",
      description:
        "Automated pricing, execution, and risk systems enable systematic coverage across thousands of event contracts.",
    },
  ];
  const divisons = [
    {
      title: "HyperFocused Market Making",
      description:
        "Market-making partnerships with Polymarket and Kalshi, as well as liquidity operations across other prediction markets.",
      Icon: <TradingSvg />,
      content: (
        <section className="w-full">
          <h3 className="text-lg font-Regular text-white/80 mb-6">
            Quantitative Market Making
            <span className="text-white/50"> (Fund Strategy)</span>
          </h3>

          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#111111]">
            <table className="min-w-full border-collapse text-left text-white/70">
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6 font-medium text-white/90 w-1/3">
                    Exchange Relationships
                  </td>
                  <td className="py-4 px-6">
                    Polymarket and Kalshi partnerships; Hyperliquid operations
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6 font-medium text-white/90">
                    Role
                  </td>
                  <td className="py-4 px-6">Institutional Market Maker</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6 font-medium text-white/90">
                    Strategy
                  </td>
                  <td className="py-4 px-6">
                    Algorithmic liquidity provision across event contracts
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6 font-medium text-white/90">
                    Infrastructure
                  </td>
                  <td className="py-4 px-6">
                    Low-latency execution, proprietary pricing models, real-time risk management
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-white/90">
                    Markets
                  </td>
                  <td className="py-4 px-6">
                    Economic indicators, macro events, sports, crypto, geopolitical outcomes
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-Regular text-white/80 mt-8 mb-4">
            Kalshi Platform Growth
          </h3>
          <div className="grid gap-4">
            {[
              { k: "Platform Valuation", v: "$22B (Series F, May 2026)" },
              { k: "Annualized Volume", v: "$178B (3× growth in 6 months)" },
              { k: "2025 Volume Growth", v: "1,100%+ YoY ($23.8B notional)" },
              { k: "U.S. Market Share", v: "89% of regulated prediction market" },
              { k: "Institutional Volume", v: "800% increase in 6 months" },
              { k: "Revenue Run Rate", v: "$1.5B+ annualized (2026)" },
            ].map((row, i) => (
              <div key={i} className="flex items-center justify-between border-b border-white/10 py-3">
                <p className="text-white/90">{row.k}</p>
                <p className="text-white/60 text-right">{row.v}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-white/30 mt-6">
            Sources: Markets Media, CoinDesk, Sacra, FinanceFeeds (May 2026). Kalshi raised $1B led by Coatue with Sequoia, a16z, Morgan Stanley, and ARK Invest participation.
          </p>
        </section>
      ),
    },
  ];
  return (
    <div className="bg-c-black rounded-t-3xl text-white ">
      <div>
        <section>
          <TitleCard
            className="border-white/10  mt-16 md:mt-32"
            titleClassName="opacity-60"
            descriptionClassName="opacity-40"
            underline
            title="Our Strategy"
            description="Systematic liquidity provision across prediction and on-chain markets."
            tagline="MARKET-MAKING FUND"
          />
          <section className="grid-system">
            <div className="col-span-full grid grid-cols-1 2xl:col-start-2 2xl:col-end-6 gap-6 mt-24 mx-auto">
              {divisons.map((division, i) => (
                <Modal
                  key={i}
                  {...division}
                  className="grid grid-rows-[auto_1fr_auto]"
                ></Modal>
              ))}
            </div>
          </section>
        </section>
      </div>
      <TitleCard
        title="Market Opportunity"
        description="We're positioned at the intersection of multiple macro trends creating unprecedented opportunities for growth."
        titleClassName="text-white/60"
        descriptionClassName="text-white/40"
      />
      <div className="relative grid-system">
        {/* CARD */}
        <div className="col-span-full w-full px-8 py-6 bg-[#111111] rounded-xl 2xl:col-start-2 2xl:col-end-4 h-fit lg:sticky lg:top-5 lg:col-start-1 lg:col-end-4">
          <TagLine text="Target Market" className="ml-auto w-fit" />
          <div className="flex gap-2 items-center mt-8">
            <VentureSvg className="w-auto h-3" />
            <p className="text-xs  text-c-orange text-nowrap">
              Kalshi
            </p>
          </div>
          <p className="mt-1 text-2xl text-white/50 lg:max-w-[30ch]">
            Regulated event-contract liquidity across economic, political,
            sports, crypto, and macro markets
          </p>
          <div className="flex gap-2 items-center mt-16">
            <VentureSvg className="w-auto h-3" />
            <p className="text-xs  text-c-orange text-nowrap">
              Polymarket
            </p>
          </div>
          <p className="mt-1 text-2xl text-white/50 lg:max-w-[30ch]">
            Cross-market liquidity and pricing opportunities across global
            event contracts
          </p>
          <div className="flex gap-2 items-center mt-16">
            <VentureSvg className="w-auto h-3" />
            <p className="text-xs text-c-orange text-nowrap">Hyperliquid</p>
          </div>
          <p className="mt-1 text-2xl text-white/50 lg:max-w-[30ch]">
            Systematic on-chain liquidity across perpetual markets
          </p>
        </div>
        {/* TABLE */}
        <div className="col-span-full  2xl:col-start-4 2xl:col-end-6 lg:col-start-4 lg:col-end-7">
          <TagLine text="Macro Trends" className="ml-auto w-fit" />
          <div className="">
            {trends.map((trend, i) => {
              return (
                <div
                  key={i}
                  className="py-6 border-b border-white/20   lg:mt-16"
                >
                  <h3 className="text-4xl text-white/60">{trend.title}</h3>
                  <p className="text-white/40 mt-6">{trend.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <TitleCard
        title="Fund Model"
        titleClassName="text-white/60"
        description="A focused market-making model built around spreads, liquidity incentives, and systematic pricing."
        descriptionClassName="text-white/40"
      />
      <section className="grid-system mt-8 lg:mt-16">
        <div className="grid col-span-full grid-cols-3 w-full lg:col-start-2 lg:col-end-6">
          <p className=" text-sm text-white/20 font-semibold">STRATEGY</p>
          <p className="justify-self-center text-sm text-white/20 font-semibold">
            REVENUE STREAMS
          </p>
          <p className="justify-self-end text-sm text-white/20 font-semibold">
            TARGET MARGIN
          </p>
        </div>

        {divisionsData.map(({ division, revenueStreams, targetMargin }, i) => {
          return (
            <div
              key={i}
              className="grid col-span-full text-white/60 grid-cols-3 w-full lg:col-start-2 lg:col-end-6 pb-10 border-b border-white/20 mt-8"
            >
              <p className=" lg:text-2xl ">{division}</p>
              <p className="justify-self-center lg:justify-self-start ">
                {revenueStreams}
              </p>
              <p className="justify-self-end lg:text-2xl ">{targetMargin}</p>
            </div>
          );
        })}
      </section>

      <section>
        <TitleCard
          title="Financial Forecast"
          titleClassName="text-white/60"
          description="Aggressive yet achievable growth targets backed by diversified revenue streams and systematic execution."
          descriptionClassName="text-white/40"
          underline={true}
          tagline={"3-YEAR PROJECTION"}
        />
      </section>
      <section className="grid-system mt-12">
        <div className="col-span-full lg:col-start-2 lg:col-end-6 gap-4 grid lg:grid-cols-2">
          <ForecastChart />
          <ForecastHistogram />
        </div>
      </section>
      <section className="grid-system mt-4">
        <div className="col-span-full lg:col-start-2 lg:col-end-6">
          <p className="text-xs text-white/40">
            Forward-looking statements are inherently uncertain and subject to risks and assumptions. Figures shown are illustrative mock values and do not guarantee future performance.
          </p>
        </div>
      </section>
      <section className="grid-system mt-16">
        <div className="col-span-full gap-4 grid lg:grid-cols-3 lg:col-start-1 lg:col-end-7 2xl:col-start-2 2xl:col-end-6">
          {[
            {
              year: "2025",
              profit: "$175K",
              margin: "35%",
              milestones: [
                "Launch private fund structure",
                "Build market-making infrastructure",
                "Validate proprietary pricing models",
              ],
            },
            {
              year: "2026",
              profit: "$1M",
              margin: "40%",
              milestones: [
                "Originate market-making operations on Kalshi",
                "Integrate Polymarket infrastructure",
                "Launch Hyperliquid operations",
              ],
            },
            {
              year: "2027",
              profit: "$2M",
              margin: "45%",
              milestones: [
                "Scale cross-exchange liquidity",
                "Expand event-contract coverage",
                "Reach $2M year-over-year profit target",
              ],
            },
          ].map((item, i) => (
            <div key={i} className="bg-[#111111] rounded-xl p-6">
              <div className="flex items-center justify-between mb-8">
                <div className="bg-[#1a1a1a] px-3 py-1 rounded text-sm text-[rgba(255,255,255,0.4)]">
                  {item.year}
                </div>
                <div className="text-right">
                  <p className="text-sm text-[rgba(255,255,255,0.4)]">
                    Net Margin
                  </p>
                  <p className="text-base text-[orangered]">{item.margin}</p>
                </div>
              </div>
              <div className="mb-12">
                <p className="text-3xl md:text-4xl text-[rgba(255,255,255,0.6)] mb-1">
                  {item.profit}
                </p>
                <p className="text-sm text-[rgba(255,255,255,0.4)]">
                  Year-Over-Year Profit Target
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <p className="text-sm text-[orangered]">Key Milestones</p>
                </div>
                <div className="space-y-1 text-sm md:text-base text-[rgba(255,255,255,0.6)]">
                  {item.milestones.map((m, j) => (
                    <p key={j}>
                      0{j + 1} {m}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
