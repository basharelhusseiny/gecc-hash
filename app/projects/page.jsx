import {
  PageHeader,
  CtaSection,
  ClientTestimonialsSection,
} from "@/components/pages/common";
import { ProjectsShowcaseSection } from "@/components/pages/projects";
import { projectsData } from "@/constants/projectsData";

export const metadata = {
  title: "Our Projects | GECC Limited",
  description:
    "Real estate, road infrastructure, cold-storage logistics, and renewable energy projects delivered by GECC across South Sudan and East Africa.",
};

const ProjectsPage = () => {
  return (
    <>
      <PageHeader
        badge="Our Projects"
        title="A Record of What We've Built"
        highlight="Built"
        description="From residential towers and road networks to cold-storage logistics and renewable energy — explore GECC's completed work across the region."
        image="/factory-floor.jpg"
        breadcrumb="Home"
        meta={[
          { value: String(projectsData.length), label: "Completed Projects" },
          { value: "5+", label: "Regional Sites" },
        ]}
      />
      <ProjectsShowcaseSection />
      <ClientTestimonialsSection />
      <CtaSection />
    </>
  );
};

export default ProjectsPage;
