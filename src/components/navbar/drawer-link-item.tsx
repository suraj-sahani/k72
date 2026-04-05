import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import type { JSX } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

type Props = {
  item: {
    label: string
    hover_label: string
    href: string
    hover_media_type: 'image' | 'svg'
    hover_thumb_1: string | JSX.Element
    hover_thumb_2: string | JSX.Element
  }
}

const DrawerLinkItem = ({ item }: Props) => {
  const {
    label,
    hover_label,
    hover_media_type,
    hover_thumb_1,
    hover_thumb_2,
    href,
  } = item
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const trackRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      // We animate the track
      gsap.to(trackRef.current, {
        xPercent: -50,
        repeat: -1,
        duration: 5, // Increase for slower, smoother motion
        ease: 'none',
      })
    },
    { scope: trackRef }
  )

  function handleLinkClick() {
    if (pathname === href) return
    navigate(href)
    const tl = gsap.timeline()
    tl.to('.nav_stair_container, .navDrawer', { display: 'none' })
    tl.to('.link_container', { opacity: 0 })
    tl.to(document.body, { overflow: 'auto' })
  }

  // Define a single "set" of items to ensure both halves are identical
  const MarqueeSet = () => (
    <div className="flex flex-nowrap items-center">
      <span className="font-lausanne-medium px-6 pt-3 text-[5em] whitespace-nowrap uppercase">
        {hover_label}
      </span>
      <div className="mx-8 h-25 w-60 shrink-0 overflow-hidden rounded-full">
        {hover_media_type === 'image' ? (
          <img
            className="h-full w-full object-cover"
            src={hover_thumb_1 as string}
            alt=""
          />
        ) : (
          hover_thumb_1
        )}
      </div>
      <span className="font-lausanne-medium px-6 pt-3 text-[5em] whitespace-nowrap uppercase">
        {hover_label}
      </span>
      <div className="mx-8 h-25 w-60 shrink-0 overflow-hidden rounded-full">
        {hover_media_type === 'image' ? (
          <img
            className="h-full w-full object-cover"
            src={hover_thumb_2 as string}
            alt=""
          />
        ) : (
          hover_thumb_2
        )}
      </div>
    </div>
  )

  return (
    <button
      className="link group relative h-30 w-full cursor-pointer border-y border-white"
      onClick={handleLinkClick}
    >
      <h1 className="font-lausanne-medium pt-2 text-center text-[5em] uppercase">
        {label}
      </h1>

      <div className="bg-primary absolute top-0 flex h-full w-full overflow-hidden text-black opacity-0 transition-opacity duration-200 ease-in group-hover:opacity-100">
        <div
          ref={trackRef}
          className="flex flex-nowrap items-center will-change-transform"
          style={{ width: 'max-content' }}
        >
          {/* We render the set twice. GSAP moves the whole track by -50%. 
              Since the sets are identical, the reset is invisible. */}
          <MarqueeSet />
          <MarqueeSet />
        </div>
      </div>
    </button>
  )
}

export default DrawerLinkItem
