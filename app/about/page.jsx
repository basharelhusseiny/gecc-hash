import {
  ClientTestimonialsSection,
  PageHeader,
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
        image="/factory-floor.jpg"
        breadcrumb="Home"
      />
      <CompanyOverviewSection />
      <MissionVisionValuesSection />
      <HSESection />
      <WhyChooseSection />
      <ClientTestimonialsSection />
    </>
  );
};

export default AboutUsPage;
