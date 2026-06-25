import {
  HeroSection,
  AboutUsSection,
  OurServicesSection,
  FeaturedProjectsSection,
} from "@/components/pages/home";
import LogoLoop from "@/components/ui/LogoLoop";
import { imageLogos } from "@/constants";

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
    </>
  );
};

export default HomePage;
