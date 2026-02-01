import { useRef } from 'react'
import { useGSAP } from '@gsap/react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

export default function AgenceStrategies() {
  const agenceSectionRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // change page background to black when agence section is in view
    // keep black until the user scrolls back above the section
    const originalBodyBg =
      window.getComputedStyle(document.body).backgroundColor || ''

    ScrollTrigger.create({
      trigger: agenceSectionRef.current,
      start: 'top center',
      onEnter: () => {
        gsap.to(document.body, { backgroundColor: '#000', duration: 0.3 })
      },
      // only restore when scrolling back up past the section
      onLeaveBack: () => {
        gsap.to(document.body, {
          backgroundColor: originalBodyBg,
          duration: 0.3,
        })
      },
      invalidateOnRefresh: true,
    })
  })
  return (
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
          <span className="text-primary text-[8vw] leading-[0.8]">ROUSSIN</span>
          <span className="mx-20 text-[2vw] text-white">Stratège</span>
        </div>
        <div className="min-w-screen pl-[50vw]">
          <span className="text-primary text-[8vw] leading-[0.8]">ROUSSIN</span>
          <span className="mx-20 text-[2vw] text-white">Stratège</span>
        </div>
        <div className="min-w-screen pl-[50vw]">
          <span className="text-primary text-[8vw] leading-[0.8]">ROUSSIN</span>
          <span className="mx-20 text-[2vw] text-white">Stratège</span>
        </div>
      </div>
      <div className="absolute top-[50%] left-[50%] z-2 h-135 w-[90vw] -translate-x-[50%] -translate-y-[50%] overflow-hidden rounded-2xl md:h-210 md:w-150">
        <img src="/src/assets/agence/agence_blank_main.jpg" />
      </div>
    </div>
  )
}
