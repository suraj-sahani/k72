import VideoShowcase from "./video-showcase";

const HeroText = () => {
  return (
    <div className="font-lausanne-medium  mt-72 lg:mt-0 pt-5 text-center">
      <div className="lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]">
        L'étincelle
      </div>
      <div className="lg:text-[9.5vw] text-[12vw] justify-center flex items-start uppercase lg:leading-[8vw] leading-[10vw]">
        qui
        <div className="h-[7vw] w-[16vw] rounded-full overflow-hidden ">
          <VideoShowcase src="/k72_hero.mp4" />
        </div>
        génère
      </div>
      <div className="lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]">
        la créativité
      </div>
    </div>
  );
};

export default HeroText;
