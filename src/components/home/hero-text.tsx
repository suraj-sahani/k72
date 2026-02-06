import { useEffect } from 'react'
import VideoShowcase from './video-showcase'
import gsap from 'gsap'

const HeroText = () => {
  useEffect(() => {
    const items = gsap.utils.toArray('.hero_text_item')
    gsap.fromTo(
      items,
      { y: -10, opacity: 0 },
      {
        y: 10,
        opacity: 1,
        duration: 0.7,
        delay: 1.5,
        ease: 'power3.out',
        stagger: 0.2,
      }
    )

    const tl = gsap.timeline({ repeat: -1 })
    // Orbit animation for the ellipse around the 'créativité' text
    const ellipse = document.querySelector(
      '.orbit-ellipse'
    ) as SVGGeometryElement | null
    const svg = document.querySelector('.orbit-svg') as SVGElement | null
    if (ellipse) {
      // getTotalLength is available on SVGGeometryElement (ellipse)
      const len = (ellipse as any).getTotalLength
        ? (ellipse as any).getTotalLength()
        : 1000
      // Configure dasharray to create a moving dash effect
      gsap.set(ellipse, {
        strokeDasharray: `${Math.round(len * 0.85)} ${Math.round(len * 0.15)}`,
        strokeDashoffset: 0,
      })
      tl.to(ellipse, {
        strokeDashoffset: -len,
        duration: 1.2,
        ease: 'power4.out',
      })
    }
  }, [])
  return (
    <div className="font-lausanne-medium mt-72 pt-5 text-center lg:mt-0">
      <div className="hero_text_item flex items-center justify-center text-[12vw] leading-[10vw] uppercase lg:text-[9.5vw] lg:leading-[8vw]">
        L'étincelle
      </div>
      <div className="hero_text_item flex items-start justify-center text-[12vw] leading-[10vw] uppercase lg:text-[9.5vw] lg:leading-[8vw]">
        qui
        <div className="h-[7vw] w-[16vw] overflow-hidden rounded-full">
          <VideoShowcase src="/k72_hero.mp4" />
        </div>
        génère
      </div>
      <div className="hero_text_item flex items-center justify-center text-[12vw] leading-[10vw] uppercase lg:text-[9.5vw] lg:leading-[8vw]">
        <div className="relative z-10 inline-flex items-center justify-center whitespace-nowrap">
          <span>la</span>
          <div className="relative">
            <svg
              viewBox="0 0 100 30"
              className="orbit-svg fill-primary stroke-primary pointer-events-none absolute inset-0 h-full w-full"
              preserveAspectRatio="xMidYMid meet"
              style={{ overflow: 'visible' }}
            >
              <ellipse
                className="orbit-ellipse stroke-primary"
                cx="55%"
                cy="40%"
                rx="100%"
                ry="54%"
                strokeWidth="0.5"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
            <span className="ml-8">créativité</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroText
