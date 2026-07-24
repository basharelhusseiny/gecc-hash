import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Factory,
  HardHat,
  Leaf,
  ShieldCheck,
} from "lucide-react";
import PageHeader from "@/components/pages/common/PageHeader";
import CtaSection from "@/components/pages/common/CtaSection";

const pillars = [
  {
    title: "Safety First",
    description:
      "We prioritize risk assessments, safety training, and strict adherence to protocols to create a hazard-free work environment.",
    icon: ShieldCheck,
  },
  {
    title: "Environmental Responsibility",
    description:
      "We reduce waste, improve energy efficiency, and use responsible materials to minimize environmental impact.",
    icon: Leaf,
  },
  {
    title: "Regulatory Compliance",
    description:
      "GECC follows local and international construction standards, ensuring safe and compliant project delivery.",
    icon: BadgeCheck,
  },
  {
    title: "Emergency Preparedness",
    description:
      "Our teams are prepared with clear procedures, training, and response plans for every operational scenario.",
    icon: AlertTriangle,
  },
];

const highlights = [
  { value: "100%", label: "Proactive Safety Measures" },
  { value: "100%", label: "Emergency Preparedness" },
  { value: "100%", label: "HSE Training & Development" },
];

const HSEPolicyPage = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <PageHeader
        badge="GECC // HSE"
        title="Health, Safety & Environmental Policy"
        highlight="Safety"
        description="At GECC, we are committed to maintaining the highest health, safety, and environmental standards across all operations."
        breadcrumb="Home"
        image="/factory-floor.jpg"
        meta={[
          { value: "2009", label: "Established" },
          { value: "24/7", label: "Operational Oversight" },
        ]}
      />

      <section className="relative bg-white py-16 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.3] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.08) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute top-0 right-0 w-[420px] h-[260px] bg-gecc-orange/[0.06] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 relative z-10">
          <div className="rounded-none border border-slate-200 bg-slate-50 p-8 md:p-10 shadow-sm">
            <div className="inline-flex items-center gap-2 border border-gecc-orange/30 bg-gecc-orange/[0.08] px-3 py-2 text-gecc-orange">
              <ShieldCheck size={16} />
              <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] font-bold">
                Our Commitment
              </span>
            </div>

            <h2 className="mt-6 text-[1.8rem] md:text-[2.3rem] font-bold text-[#0a1628] leading-[1.15]">
              Safe operations, responsible delivery, and lasting trust.
            </h2>

            <p className="mt-5 text-[15px] md:text-base leading-[1.9] text-slate-600">
              Our HSE policy ensures that every project safeguards our
              employees, stakeholders, and the environment. From planning to
              handover, GECC embeds safety, accountability, and environmental
              care into every stage of our work.
            </p>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-none border border-slate-200 bg-white p-4"
                >
                  <div className="text-2xl font-bold text-gecc-orange">
                    {item.value}
                  </div>
                  <div className="mt-1 text-[11px] font-mono uppercase tracking-[0.2em] text-slate-500">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-none border border-slate-200 shadow-xl">
            <img
              src="/factory-floor.jpg"
              alt="GECC manufacturing and operational environment"
              className="w-full h-full min-h-[320px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/85 via-[#07111f]/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
              <div className="inline-flex items-center gap-2 border border-white/25 bg-white/10 px-3 py-2 text-white/90 backdrop-blur-sm">
                <Factory size={16} />
                <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] font-bold">
                  Manufacturing & Production
                </span>
              </div>
              <p className="mt-4 text-white/90 text-[15px] md:text-base leading-[1.8] max-w-xl">
                Every facility, site, and production activity is managed with
                strict safety control, operational discipline, and environmental
                respect.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f9fc] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 text-gecc-orange font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold">
                <HardHat size={14} />
                HSE Focus Areas
              </div>
              <h3 className="mt-3 text-[1.8rem] md:text-[2.2rem] font-bold text-[#0a1628] leading-[1.15]">
                Built around people, process, and performance.
              </h3>
            </div>
            <p className="max-w-xl text-slate-600 text-[15px] md:text-base leading-[1.8]">
              We combine engineering discipline, workforce training, and
              environmental stewardship to protect teams and communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {pillars.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-none border border-slate-200 bg-white p-7 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gecc-orange/10 text-gecc-orange">
                    <Icon size={20} />
                  </div>
                  <h4 className="mt-6 text-lg font-semibold text-[#0a1628]">
                    {item.title}
                  </h4>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-center">
          <div className="rounded-none border border-gecc-orange/20 bg-gradient-to-br from-gecc-navy to-[#133d63] p-8 md:p-10 text-white">
            <div className="inline-flex items-center gap-2 text-gecc-orange font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold">
              <BookOpen size={14} />
              Our Standards
            </div>
            <h3 className="mt-4 text-[1.8rem] md:text-[2.2rem] font-bold leading-[1.15]">
              Safety is embedded in every phase of delivery.
            </h3>
            <p className="mt-4 text-[15px] md:text-base leading-[1.8] text-white/80">
              We integrate HSE planning into site supervision, subcontractor
              coordination, equipment handling, and project execution to reduce
              risk and improve outcomes.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Risk assessments and job hazard analysis before commencement",
                "Daily safety briefings and toolbox talks for all personnel",
                "Strict incident reporting and corrective action follow-up",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-none border border-white/10 bg-white/10 px-4 py-3"
                >
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gecc-orange" />
                  <span className="text-sm leading-7 text-white/90">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-none border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-center gap-3 text-gecc-orange">
                <AlertTriangle size={18} />
                <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold">
                  Incident Prevention
                </span>
              </div>
              <p className="mt-4 text-slate-600 text-[15px] leading-[1.8]">
                We maintain proactive controls to prevent accidents, protect
                workers, and support continuous improvement across all projects.
              </p>
            </div>

            <div className="rounded-none border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-center gap-3 text-gecc-orange">
                <Leaf size={18} />
                <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold">
                  Environmental Care
                </span>
              </div>
              <p className="mt-4 text-slate-600 text-[15px] leading-[1.8]">
                Every operation is guided by responsible resource use, pollution
                prevention, and sustainability-focused decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f9fc] py-6 md:py-8">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 rounded-none border border-slate-200 bg-white px-6 py-6 shadow-sm">
            <div>
              <div className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-gecc-orange font-bold">
                HSE Commitment
              </div>
              <h4 className="mt-2 text-[1.2rem] md:text-[1.4rem] font-semibold text-[#0a1628]">
                GECC delivers safe, compliant, and environmentally responsible
                construction solutions.
              </h4>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 border border-gecc-orange/30 bg-gecc-orange/10 px-5 py-3 text-sm font-bold text-gecc-orange transition-all duration-300 hover:bg-gecc-orange hover:text-white text-nowrap"
            >
              Contact Our Team
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
};

export default HSEPolicyPage;
