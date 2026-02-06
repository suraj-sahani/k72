import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

type Props = {
  agenceImageThumbs: string[]
}
export default function AgenceHero({ agenceImageThumbs }: Props) {
  const agenceImageContainerRef = useRef<HTMLDivElement>(null)
  const agenceImageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const mm = gsap.matchMedia()

    // Desktop: pin the container and scrub through images based on scroll progress
    mm.add('(min-width: 768px)', () => {
      if (!agenceImageContainerRef.current) return

      const st = ScrollTrigger.create({
        trigger: agenceImageContainerRef.current,
        start: 'top 30%',
        end: 'top -60%',
        pin: agenceImageContainerRef.current,
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

          if (agenceImageRef.current)
            agenceImageRef.current.src = agenceImageThumbs[imageIndex]
        },
      })

      return () => st.kill()
    })

    // Mobile: keep container static and run an automatic slideshow
    mm.add('(max-width: 767px)', () => {
      if (!agenceImageRef.current) return

      // ensure visible
      agenceImageRef.current.style.opacity = '1'

      let idx = 0
      const slideDuration = 0.3 // crossfade duration
      const interval = 2 // seconds between swaps (including crossfade)

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: Math.max(0, interval - slideDuration),
      })

      tl.to(agenceImageRef.current, { opacity: 0, duration: slideDuration / 2 })
        .call(() => {
          idx = (idx + 1) % agenceImageThumbs.length
          if (agenceImageRef.current)
            agenceImageRef.current.src = agenceImageThumbs[idx]
        })
        .to(agenceImageRef.current, { opacity: 1, duration: slideDuration / 2 })

      return () => tl.kill()
    })

    return () => mm.revert()
  }, [agenceImageThumbs])

  return (
    <div className="hero_section p-2">
      <div
        className="pointer-events-none absolute top-[18vw] left-[30vw] h-[40vw] w-[30vw] overflow-hidden rounded-4xl md:h-[20vw] md:w-[15vw]"
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
            Notre curiosité nourrit notre créativité. On reste humbles et on dit
            non aux gros egos, même le vôtre. Une marque est vivante. Elle a des
            valeurs, une personnalité, une histoire. Si on oublie ça, on peut
            faire de bons chiffres à court terme, mais on la tue à long terme.
            C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir
            des marques influentes.
          </p>
        </div>
      </div>
    </div>
  )
}
