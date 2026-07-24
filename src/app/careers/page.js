import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import TitleCard from "@/components/TitleCard";
import Section from "@/components/ui/section";

export const metadata = {
  title: "Apply to Work With Us | HyperFocused Holdings",
  description:
    "Join HyperFocused Holdings and help build market-making infrastructure across prediction and on-chain markets.",
};

const roles = [
  {
    title: "Quantitative Researchers",
    description:
      "Build pricing, forecasting, and risk models for prediction markets using simulations, backtests, and live market data.",
  },
  {
    title: "Originators",
    description:
      "Build exchange relationships, originate market-making opportunities, and launch scalable liquidity programs.",
  },
  {
    title: "Edge Finders",
    description:
      "Find structural and quantitative market edges, then validate them through proprietary simulations and historical backtests.",
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />

      <section className="min-h-screen flex items-center pt-32">
        <div className="grid-system">
          <div className="col-span-full md:col-start-2 md:col-end-6">
            <p className="text-sm text-c-orange font-medium mb-5">
              APPLY TO WORK WITH US
            </p>
            <h1 className="2xl:text-[64px] text-4xl md:text-6xl lg:text-8xl font-semibold text-c-black">
              Build the Future of Market Making
            </h1>
            <p className="mt-6 md:text-xl lg:text-2xl 2xl:text-3xl text-c-black/60 max-w-[48ch]">
              Join a focused team building quantitative liquidity infrastructure
              across prediction and on-chain markets.
            </p>
          </div>
        </div>
      </section>

      <Section bgClass="bg-c-black text-white rounded-t-3xl" noTop>
        <TitleCard
          title="Open Areas"
          description="We are looking for exceptional quants, originators, and edge finders."
          titleClassName="text-white/60"
          descriptionClassName="text-white/40"
          tagline="JOIN THE TEAM"
        />

        <div className="grid-system mt-12 md:mt-16">
          <div className="col-span-full md:col-start-2 md:col-end-6 grid gap-6 lg:grid-cols-3">
            {roles.map((role) => (
              <article
                key={role.title}
                className="rounded-2xl border border-white/10 bg-[#111111] p-6 md:p-8"
              >
                <h2 className="text-2xl font-semibold text-white/90">
                  {role.title}
                </h2>
                <p className="mt-4 text-white/60">{role.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="grid-system mt-12 pb-16 md:pb-32">
          <div className="col-span-full md:col-start-2 md:col-end-6 text-center">
            <Button
              href="mailto:charles@hyperfocusedholdings.com"
            >
              Email Your Application
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
