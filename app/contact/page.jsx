import { ContactSection } from "@/components/pages/contact";
import { PageHeader } from "../../components/pages/common/index.js";

const ContactUsPage = () => {
  return (
    <>
      <PageHeader
        badge="Contact GECC"
        title="Let's Talk About Your Project"
        highlight="Project"
        image="/factory-floor.jpg"
        description="Whether it's a road, a building, or a full infrastructure rollout — our team is ready to help you plan it."
        breadcrumb="Home"
      />
      <ContactSection />
    </>
  );
};

export default ContactUsPage;
