import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'
import {
  Agence1Thumb,
  Agence2Thumb,
  Agence3Thumb,
  Agence4Thumb,
  Agence5Thumb,
  Agence6Thumb,
  Agence7Thumb,
  Agence8Thumb,
} from '../assets'
gsap.registerPlugin(ScrollTrigger)

const agenceImageThumbs = [
  Agence1Thumb,
  Agence2Thumb,
  Agence3Thumb,
  Agence4Thumb,
  Agence5Thumb,
  Agence6Thumb,
  Agence7Thumb,
  Agence8Thumb,
]

export default function Agence() {
  const agenceImageContainerRef = useRef<HTMLDivElement>(null)
  const agenceImageRef = useRef<HTMLImageElement>(null)
  const agenceSectionRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.to(agenceImageContainerRef.current, {
      scrollTrigger: {
        trigger: agenceImageContainerRef.current,
        start: 'top 30%',
        end: 'top -60%',
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        anticipatePin: 1,
        invalidateOnRefresh: true,
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress
          const imageIndex = Math.round(
            progress * (agenceImageThumbs.length - 1)
          )

          agenceImageRef.current!.src = agenceImageThumbs[imageIndex]
        },
      },
    })

    // change page background to black when agence section is in view
    gsap.to(document.body, {
      backgroundColor: '#000',
      duration: 0.3,
      scrollTrigger: {
        trigger: agenceSectionRef.current,
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play reverse play reverse',
        invalidateOnRefresh: true,
      },
    })
  })

  return (
    <>
      <div className="hero_section p-2">
        <div
          className="absolute top-[18vw] left-[30vw] h-[40vw] w-[30vw] overflow-hidden rounded-4xl md:h-[20vw] md:w-[15vw]"
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
            <h1 className="text-center text-[18vw] leading-[0.85em] uppercase md:text-[20vw]">
              Soixan7e <br /> Douze
            </h1>
          </div>
          <div className="mt-20 w-full md:mt-4 md:ml-[40%] md:w-[60%] md:p-0">
            <p className="indent-[5em] text-[5vw] leading-[5vw] md:text-[3vw] md:leading-[3vw]">
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
      <div className="font-lausanne-regular container mx-auto mt-20 space-y-20 p-2 text-[3vw] md:mt-40 md:space-y-40 md:text-[1.5vw]">
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

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
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

      <div
        className="agence_section font-lausanne-medium relative h-screen overflow-x-hidden pt-[15vw]"
        ref={agenceSectionRef}
      >
        <div className="moveX absolute top-[35%] left-[50%] z-1 flex items-center">
          <span className="text-primary min-w-screen pr-[50vw] text-[8vw] leading-[0.8]">
            BÉATRICE
          </span>
          <span className="text-primary min-w-screen pr-[50vw] text-[8vw] leading-[0.8]">
            BÉATRICE
          </span>
          <span className="text-primary min-w-screen pr-[50vw] text-[8vw] leading-[0.8]">
            BÉATRICE
          </span>
        </div>
        <div className="moveXReverse absolute top-[50%] left-[50%] z-3 flex items-center">
          <div className="min-w-screen pl-[50vw]">
            <span className="text-primary text-[8vw] leading-[0.8]">
              ROUSSIN
            </span>
            <span className="mx-20 text-[2vw] text-white">Stratège</span>
          </div>
          <div className="min-w-screen pl-[50vw]">
            <span className="text-primary text-[8vw] leading-[0.8]">
              ROUSSIN
            </span>
            <span className="mx-20 text-white">Stratège</span>
          </div>
          <div className="min-w-screen pl-[50vw]">
            <span className="text-primary text-[8vw] leading-[0.8]">
              ROUSSIN
            </span>
            <span className="mx-20 text-[2em]">Stratège</span>
          </div>
        </div>
        <div className="absolute top-[50%] left-[50%] z-2 h-3/4 w-150 -translate-x-[50%] -translate-y-[50%] overflow-hidden rounded-2xl">
          <img src="/src/assets/agence/agence_blank_main.jpg" />
        </div>
      </div>
    </>
  )
}
