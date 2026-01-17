import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'

type Props = {
  children?: React.ReactNode
}
const PageTransition = ({ children }: Props) => {
  const transitionContainerRef = useRef<HTMLDivElement>(null)
  const pageRef = useRef<HTMLDivElement>(null)
  const { pathname } = useLocation()

  useGSAP(() => {
    // create a fresh timeline for each navigation so tweens don't accumulate
    const tl = gsap.timeline()

    // show overlay immediately
    tl.set(transitionContainerRef.current, { display: 'block' })

    // Animation starts and reveals the stairs (covering the page)
    tl.from('.stair', {
      height: 0,
      stagger: {
        amount: -0.25,
      },
      ease: 'power2.out',
      duration: 0.45,
    })

    // move stairs down to reveal the new page underneath
    tl.to('.stair', {
      y: '100%',
      zIndex: -1,
      stagger: {
        amount: -0.25,
      },
      ease: 'power2.inOut',
      duration: 0.45,
    })

    // hide the overlay immediately (no extra delay)
    tl.set(transitionContainerRef.current, { display: 'none' })

    // reset stairs position for next transition
    tl.set('.stair', { y: '0%' })

    // animate the page content in (we animate an inner wrapper, not `main`)
    tl.from(pageRef.current, {
      opacity: 0,
      scale: 1.04,
      duration: 0.45,
      ease: 'power2.out',
    })
  }, [pathname])

  return (
    <>
      <div
        className="stair_container fixed z-10 h-screen w-full"
        ref={transitionContainerRef}
        style={{ display: 'none' }}
      >
        <div className="flex h-full w-full">
          <div className="stair h-full w-1/5 bg-black" />
          <div className="stair h-full w-1/5 bg-black" />
          <div className="stair h-full w-1/5 bg-black" />
          <div className="stair h-full w-1/5 bg-black" />
          <div className="stair h-full w-1/5 bg-black" />
        </div>
      </div>
      <main>
        <div ref={pageRef}>{children}</div>
      </main>
    </>
  )
}

export default PageTransition
