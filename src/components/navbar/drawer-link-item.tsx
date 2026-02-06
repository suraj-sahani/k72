import gsap from 'gsap'
import type { JSX } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

type Props = {
  item:
    | {
        label: string
        hover_label: string
        href: string
        hover_media_type: 'image'
        hover_thumb_1: string
        hover_thumb_2: string
      }
    | {
        label: string
        hover_label: string
        href: string
        hover_media_type: 'svg'
        hover_thumb_1: JSX.Element
        hover_thumb_2: JSX.Element
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

  function handleLinkClick() {
    if (pathname === href) return

    navigate(href)
    const tl = gsap.timeline()

    tl.to('.nav_stair_container', {
      display: 'none',
    })

    tl.to('.navDrawer', {
      display: 'none',
    })

    tl.to('.link_container', {
      opacity: 0,
    })
    // handleLinkClick()
  }
  return (
    <button
      className="link group relative h-30 w-full cursor-pointer border-y border-white"
      onClick={handleLinkClick}
    >
      <h1 className="font-lausanne-medium pt-2 text-center text-[5em] uppercase">
        {label}
      </h1>
      <div className="bg-primary absolute top-0 flex h-full w-full overflow-x-hidden text-black opacity-0 transition-opacity duration-100 ease-in group-hover:opacity-100">
        <div className="moveX flex min-w-0 items-center">
          <span className="font-lausanne-medium pt-3 text-center text-[5em] whitespace-nowrap uppercase">
            {hover_label}
          </span>
          {hover_media_type === 'image' ? (
            <img
              className="mx-8 h-[90%] w-60 shrink-0 rounded-full object-cover"
              src={hover_thumb_1}
              alt=""
            />
          ) : (
            hover_thumb_1
          )}

          <span className="font-lausanne-medium pt-3 text-center text-[5em] whitespace-nowrap uppercase">
            {hover_label}
          </span>
          {hover_media_type === 'image' ? (
            <img
              className="mx-8 h-[90%] w-60 shrink-0 rounded-full object-cover"
              src={hover_thumb_2}
              alt=""
            />
          ) : (
            hover_thumb_2
          )}

          <span className="font-lausanne-medium pt-3 text-center text-[5em] whitespace-nowrap uppercase">
            {hover_label}
          </span>
          {hover_media_type === 'image' ? (
            <img
              className="mx-8 h-[90%] w-60 shrink-0 rounded-full object-cover"
              src={hover_thumb_1}
              alt=""
            />
          ) : (
            hover_thumb_1
          )}
          <span className="font-lausanne-medium pt-3 text-center text-[5em] whitespace-nowrap uppercase">
            {hover_label}
          </span>
          {hover_media_type === 'image' ? (
            <img
              className="h-[90%] w-60 shrink-0 rounded-full object-cover"
              src={hover_thumb_2}
              alt=""
            />
          ) : (
            hover_thumb_2
          )}
        </div>
      </div>
    </button>
  )
}

export default DrawerLinkItem
