import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

export default function TiltedMarquee() {
  const trackRef = useRef(null)

  useGSAP(() => {
    gsap.to(trackRef.current, {
      xPercent: -50,
      repeat: -1,
      duration: 15,
      ease: 'none',
    })
  }, [])

  return (
    <div className="w-screen overflow-hidden">
      <a
        href="mailto:bonjour@k72.ca"
        className="bg-primary font-lausanne-medium my-10 -ml-[10vw] flex w-[120vw] -rotate-[5deg] items-center overflow-hidden text-[8vw] text-black uppercase md:my-30"
      >
        <div ref={trackRef} className="flex flex-nowrap whitespace-nowrap">
          {/* First set of items */}
          <div className="flex items-center [&_span]:px-[0.3em] [&_span]:pt-[0.2em] [&_span]:leading-[0.9]">
            <span>bonjour@k72.ca</span>
            <span>bonjour@k72.ca</span>
            <span>bonjour@k72.ca</span>
          </div>

          <div
            className="flex items-center [&_span]:px-[0.3em] [&_span]:pt-[0.2em] [&_span]:leading-[0.9]"
            aria-hidden="true"
          >
            <span>bonjour@k72.ca</span>
            <span>bonjour@k72.ca</span>
            <span>bonjour@k72.ca</span>
          </div>
        </div>
      </a>
    </div>
  )
}
