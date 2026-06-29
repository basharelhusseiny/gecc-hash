import { notFound } from "next/navigation";
import { projectsData, getProjectBySlug } from "@/constants/projectsData";
import { CtaSection } from "@/components/pages/common";
import {
  ProjectDetailHero,
  ProjectInfoSection,
  ProjectGallery,
} from "@/components/pages/projects";

export function generateStaticParams() {
  return projectsData.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title} | GECC Limited`,
    description: project.shortDescription,
  };
}

const ProjectDetailPage = async ({ params }) => {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return notFound();

  return (
    <>
      <ProjectDetailHero project={project} />
      <ProjectInfoSection project={project} />
      <ProjectGallery images={project.images} title={project.title} />
      <CtaSection />
    </>
  );
};

export default ProjectDetailPage;
