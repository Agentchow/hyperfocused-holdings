import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { VentureSvg, VisionSvg } from "../../../helpers/icons";
import TitleCard from "@/components/TitleCard";
import Section from "@/components/ui/section";

export const metadata = {
  title: "Exchange Services | HyperFocused Holdings",
  description: "Market-making origination and liquidity provision for prediction-market exchanges.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Market-Making Origination",
      description: "We originate and launch institutional market-making programs for prediction-market exchanges.",
      features: [
        "Exchange and market assessment",
        "Liquidity program design",
        "Pricing and execution integration",
        "Market-maker onboarding and launch",
      ],
      audience: "Prediction-market exchanges launching or expanding markets",
      engagement: "Origination through launch, followed by ongoing support",
      outcomes: "Faster market activation and scalable liquidity infrastructure",
    },
    {
      title: "Exchange Liquidity",
      description: "We provide systematic two-sided liquidity across event contracts using proprietary pricing and execution systems.",
      features: [
        "Continuous two-sided quoting",
        "Spread and inventory optimization",
        "Cross-contract hedging",
        "Real-time risk management",
      ],
      audience: "Exchanges seeking deeper, more resilient event-contract markets",
      engagement: "Continuous automated operation with 24/7 monitoring",
      outcomes: "Deeper liquidity, tighter spreads, and stronger price discovery",
    },
  ];

  const divisions = [
    {
      name: "HyperFocused Market Making",
      focus: "Multi-Venue Liquidity",
      description: "Market-making partnerships with Polymarket and Kalshi across event contracts, complemented by on-chain operations on Hyperliquid.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Nav />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-32">
        <div className="grid-system">
          <div className="col-span-full md:col-start-2 md:col-end-6">
            <h1 className="2xl:text-[64px] text-4xl md:text-6xl lg:text-8xl font-semibold text-c-black">
              Exchange Services
            </h1>
            <p className="mt-6 md:text-xl lg:text-2xl 2xl:text-3xl text-c-black/60 max-w-[40ch]">
              Origination and liquidity provision for prediction-market exchanges.
            </p>
            {/* <Button className="mt-12">Schedule a Consultation</Button> */}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <Section bgClass="bg-[#f8f8f8]" noTop>
        <TitleCard
          title="What We Provide"
          description="End-to-end market-making origination and ongoing exchange liquidity."
          tagline="OUR EXPERTISE"
        />
        
        <div className="grid-system mt-12 md:mt-16">
          <div className="col-span-full md:col-start-2 md:col-end-6 grid gap-8 lg:grid-cols-2">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 md:p-8 border-t-2 border-c-orange">
                <h3 className="text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-c-black mb-4">
                  {service.title}
                </h3>
                <p className="2xl:text-2xl xl:text-xl lg:text-lg text-c-black/60 mb-6 max-w-[50ch]">
                  {service.description}
                </p>
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 bg-c-black flex-shrink-0" />
                      <span className="text-base md:text-lg text-c-black">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 grid gap-2 text-c-black/70">
                  <p><span className="font-semibold text-c-black/90">Who it’s for:</span> {service.audience}</p>
                  <p><span className="font-semibold text-c-black/90">Typical engagement:</span> {service.engagement}</p>
                  <p><span className="font-semibold text-c-black/90">Expected outcomes:</span> {service.outcomes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Divisions Section */}
      <Section bgClass="bg-c-black text-white rounded-t-3xl" noTop>
        <TitleCard
          title="Exchange Partnerships"
          titleClassName="text-white/60"
          description="Providing origination and liquidity through partnerships with Polymarket and Kalshi, with additional operations on Hyperliquid."
          descriptionClassName="text-white/40"
          tagline="PARTNER ECOSYSTEM"
        />
        
        <div className="grid-system mt-12 md:mt-16">
          <div className="col-span-full md:col-start-2 md:col-end-6 space-y-12 lg:space-y-16">
            {divisions.map((division, index) => (
              <div key={index} className="border-t border-white/20 pt-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                  <h3 className="text-3xl lg:text-4xl 2xl:text-5xl font-semibold text-white/90">
                    {division.name}
                  </h3>
                  <div className="flex gap-2 items-center">
                    <VentureSvg className="w-auto h-3" />
                    <span className="text-xs text-c-orange font-medium">
                      {division.focus}
                    </span>
                  </div>
                </div>
                <p className="text-xl lg:text-2xl 2xl:text-3xl text-white/80 max-w-[55ch]">
                  {division.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section bgClass="bg-white" noTop>
        <TitleCard
          title="Our Process"
          description="A systematic framework for pricing, executing, and managing event-contract risk."
          tagline="HOW WE WORK"
        />
        
        <div className="grid-system mt-12 md:mt-16">
          <div className="col-span-full md:col-start-2 md:col-end-6 grid gap-8 md:gap-12 lg:grid-cols-4">
            {[
              { step: "01", title: "Origination", desc: "Designing the exchange liquidity program" },
              { step: "02", title: "Pricing", desc: "Generating inventory-aware two-sided quotes" },
              { step: "03", title: "Execution", desc: "Providing liquidity with automated systems" },
              { step: "04", title: "Risk", desc: "Monitoring exposure and recalibrating continuously" },
            ].map((item, index) => (
              <div key={index} className="border-t-2 border-c-orange pt-6">
                <div className="text-5xl lg:text-6xl font-bold text-c-orange mb-4">{item.step}</div>
                <h4 className="text-xl lg:text-2xl font-semibold text-c-black mb-2">{item.title}</h4>
                <p className="text-base lg:text-lg text-c-black/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
