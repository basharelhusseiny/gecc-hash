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
        image="/servicess.png"
        breadcrumb="Home"
      />
      <ServicesShowcaseSection />
      <ProductionScaleDivider
        smallTitle="Regional Logistics"
        titleOne="Scaling Production for"
        titleTwo="East Africa's Growth"
        desc="From Juba to Kampala, our logistics network delivers manufactured materials to construction sites across the region."
        img="/Services Page bottom banner.jpg"
        link="/contact"
        btnText="Contact Us"
      />
      {/* <ClientTestimonialsSection /> */}
      <CtaSection />
    </>
  );
};

export default ServicesPage;
