import {
  ClientTestimonialsSection,
  PageHeader,
  ProductionScaleDivider,
} from "@/components/pages/common";
import {
  CompanyOverviewSection,
  MissionVisionValuesSection,
  HSESection,
  WhyChooseSection,
} from "@/components/pages/about";

const AboutUsPage = () => {
  return (
    <>
      <PageHeader
        badge="About GECC"
        title="Building Trust Since 2009"
        highlight="Trust"
        description="From a local construction company in Juba to a respected regional leader in engineering and infrastructure across East Africa."
        image="/ABOUT page Top banner.jpg"
        breadcrumb="Home"
      />
      <CompanyOverviewSection />
      <MissionVisionValuesSection />
      <HSESection />
      <WhyChooseSection />
      {/* <ClientTestimonialsSection /> */}
      <ProductionScaleDivider
        smallTitle="Client Partners"
        titleOne="Trusted by "
        titleTwo="Government & Industry Leaders"
        desc="Hear from the partners and institutions who've trusted GECC to deliver on critical infrastructure, housing, and energy projects."
        img="/ABOUT page bottom banner.jpg"
        link="/projects"
        btnText="View Projects"
      />
    </>
  );
};

export default AboutUsPage;
