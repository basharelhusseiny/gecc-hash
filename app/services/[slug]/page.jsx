import { notFound } from "next/navigation";
import { servicesData, getServiceBySlug } from "../../../constants/index.js";
import { CtaSection } from "@/components/pages/common";
import {
  ServiceBenefitsSection,
  ServiceCapabilitiesSection,
  ServiceFAQSection,
  ServiceHero,
  ServiceOverviewSection,
  ServiceProcessSection,
} from "../../../components/pages/services/index.js";

export function generateStaticParams() {
  return servicesData.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: `${service.title} | GECC Limited`,
    description: service.shortDescription,
  };
}

const ServiceDetailPage = async ({ params }) => {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) return notFound();

  return (
    <>
      <ServiceHero service={service} />
      <ServiceOverviewSection service={service} />
      <ServiceCapabilitiesSection service={service} />
      <ServiceProcessSection service={service} />
      <ServiceBenefitsSection service={service} />
      <ServiceFAQSection service={service} />
    </>
  );
};

export default ServiceDetailPage;
