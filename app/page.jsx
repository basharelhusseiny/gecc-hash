import { HeroSection } from "@/components/pages/home";
import LogoLoop from "@/components/ui/LogoLoop";

const HomePage = () => {
  // Alternative with image sources
  const imageLogos = [
    {
      src: "/partners/1.png",
      alt: "Company 1",
      href: "https://company1.com",
    },
    {
      src: "/partners/2.png",
      alt: "Company 2",
      href: "https://company2.com",
    },
    {
      src: "/partners/3.png",
      alt: "Company 3",
      href: "https://company3.com",
    },
    {
      src: "/partners/4.png",
      alt: "Company 4",
      href: "https://company4.com",
    },
    {
      src: "/partners/5.png",
      alt: "Company 5",
      href: "https://company5.com",
    },
  ];

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
        {/* Basic horizontal loop */}
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
    </>
  );
};

export default HomePage;
