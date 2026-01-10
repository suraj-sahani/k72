import FooterLinks from "../components/home/footer-links";
import HeroText from "../components/home/hero-text";
import VideoShowcase from "../components/home/video-showcase";

export default function Home() {
  return (
    <div className="text-white">
      <div className="h-screen w-screen fixed">
        <VideoShowcase src="/k72_hero.mp4" />
      </div>
      <div className="h-screen w-screen relative pb-5 overflow-hidden flex flex-col justify-between">
        <HeroText />
        <FooterLinks />
      </div>
    </div>
  );
}
