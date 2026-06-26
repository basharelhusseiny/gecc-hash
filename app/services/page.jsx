import {
  PageHeader,
  CtaSection,
  ClientTestimonialsSection,
  ProductionScaleDivider,
} from "@/components/pages/common";
import { ServicesShowcaseSection } from "@/components/pages/services";

export const metadata = {
  title: "Our Services | GECC Limited",
  description:
    "Road construction, concrete manufacturing, real estate development, and energy infrastructure services across South Sudan and East Africa.",
};

const ServicesPage = () => {
  return (
    <>
      <PageHeader
        badge="Our Services"
        title="Engineering Every Layer of Infrastructure"
        highlight="Infrastructure"
        description="From roads that connect cities to power grids that energize them — explore GECC's core service lines, each built on 16+ years of regional expertise."
        image="/factory-floor.jpg"
        breadcrumb="Home"
      />
      <ServicesShowcaseSection />
      <ProductionScaleDivider />
      <ClientTestimonialsSection />
      <CtaSection />
    </>
  );
};

export default ServicesPage;
