import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import {
  Agence1Thumb,
  Agence2Thumb,
  Agence3Thumb,
  Agence4Thumb,
  Agence5Thumb,
  Agence6Thumb,
  Agence7Thumb,
  Agence8Thumb,
} from "../assets";
gsap.registerPlugin(ScrollTrigger);

const agenceImageThumbs = [
  Agence1Thumb,
  Agence2Thumb,
  Agence3Thumb,
  Agence4Thumb,
  Agence5Thumb,
  Agence6Thumb,
  Agence7Thumb,
  Agence8Thumb,
];

export default function Agence() {
  const agenceImageContainerRef = useRef<HTMLDivElement>(null);
  const agenceImageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    gsap.to(agenceImageContainerRef.current, {
      scrollTrigger: {
        trigger: agenceImageContainerRef.current,
        start: "top 30%",
        end: "top -60%",
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: "transform",
        anticipatePin: 1,
        invalidateOnRefresh: true,
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const imageIndex = Math.round(
            progress * (agenceImageThumbs.length - 1)
          );

          agenceImageRef.current!.src = agenceImageThumbs[imageIndex];
        },
      },
    });
  });

  return (
    <>
      <div className="hero_section p-2">
        <div
          className="h-[40vw] w-[30vw] md:h-[20vw] md:w-[15vw] overflow-hidden rounded-4xl absolute top-[18vw] left-[30vw]"
          ref={agenceImageContainerRef}
        >
          <img
            src={agenceImageThumbs[0]}
            alt=""
            className="object-cover"
            ref={agenceImageRef}
          />
        </div>
        <div className="font-lausanne-medium relative">
          <div className="pt-[25vh] md:pt-[55vh]">
            <h1 className="text-[18vw] md:text-[20vw] text-center uppercase leading-[0.85em]">
              Soixan7e <br /> Douze
            </h1>
          </div>
          <div className="mt-20 md:mt-4 md:p-0 md:ml-[40%] w-full md:w-[60%]">
            <p className="text-[5vw] md:text-[3vw] indent-[5em] leading-[5vw] md:leading-[3vw]">
              Notre curiosité nourrit notre créativité. On reste humbles et on
              dit non aux gros egos, même le vôtre. Une marque est vivante. Elle
              a des valeurs, une personnalité, une histoire. Si on oublie ça, on
              peut faire de bons chiffres à court terme, mais on la tue à long
              terme. C’est pour ça qu’on s’engage à donner de la perspective,
              pour bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-20 md:mt-40 space-y-20 md:space-y-40 p-2 font-lausanne-regular text-[3vw] md:text-[1.5vw]">
        <div className="grid grid-cols-2 md:grid-cols-3">
          <div>Expertise</div>
          <div>
            <ul>
              <li>Stratégie</li>
              <li>Publicité</li>
              <li>Branding</li>
              <li>Design</li>
              <li>Contenu</li>
            </ul>
          </div>
        </div>

        <div className="gap-8 grid grid-cols-1 md:grid-cols-3">
          <div>
            <p>
              Nos projets_ naissent dans l’humilité, grandissent dans la
              curiosité et vivent grâce à la créativité sous toutes ses formes.
            </p>
          </div>

          <div>
            <p>
              Notre création_ bouillonne dans un environnement où le talent a le
              goût d’exploser. Où on se sent libre d’être la meilleure version
              de soi-même.
            </p>
          </div>

          <div>
            <p>
              Notre culture_ c’est l’ouverture aux autres. Point. Tout
              l’équipage participe à bâtir une agence dont on est fiers.
            </p>
          </div>
        </div>
      </div>
      <div className="agence_section h-screen p-2"></div>
    </>
  );
}
