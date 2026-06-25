import {
  HeroSection,
  AboutUsSection,
  OurServicesSection,
  FeaturedProjectsSection,
} from "@/components/pages/home";
import LogoLoop from "@/components/ui/LogoLoop";
import { imageLogos } from "@/constants";
import ClientTestimonialsSection from "../components/pages/common/ClientTestimonialsSection.jsx";
import {
  CtaSection,
  ProductionScaleDivider,
} from "../components/pages/common/index.js";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <div
        style={{
          height: "120px",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#0f172a",
        }}
      >
        <LogoLoop
          logos={imageLogos}
          speed={120}
          direction="left"
          logoHeight={120}
          gap={60}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#0b2140"
          ariaLabel="Technology partners"
        />
      </div>
      <AboutUsSection />
      <OurServicesSection />
      <FeaturedProjectsSection />
      <ProductionScaleDivider />
      <ClientTestimonialsSection />
      <CtaSection />
    </>
  );
};

export default HomePage;
