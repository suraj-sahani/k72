import { useRef } from 'react'
import {
  NavAgenceThumb1,
  NavAgenceThumb2,
  NavBlogThumb1,
  NavBlogThumb2,
  NavProjectThumb1,
  NavProjectThumb2,
} from '../../assets'
import Logo from './logo'
import { useNav } from './context'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const NavDrawer = () => {
  const { navColor, setNavOpen, navOpen } = useNav()
  const drawerRef = useRef<HTMLDivElement>(null)
  const linkContainerRef = useRef<HTMLDivElement>(null)

  function gsapAnimation() {
    const tl = gsap.timeline()
    tl.to('.navDrawer', {
      display: 'block',
    })
    tl.to('.stairing', {
      delay: 0.2,
      height: '100%',
      stagger: {
        amount: -0.3,
      },
    })
    tl.to('.link', {
      opacity: 1,
      rotateX: 0,
      stagger: {
        amount: 0.3,
      },
    })
    tl.to('.navlink', {
      opacity: 1,
    })
  }
  function gsapAnimationReverse() {
    const tl = gsap.timeline()
    tl.to('.link', {
      opacity: 0,
      rotateX: 90,
      stagger: {
        amount: 0.1,
      },
    })
    tl.to('.stairing', {
      height: 0,
      stagger: {
        amount: 0.1,
      },
    })
    tl.to('.navlink', {
      opacity: 0,
    })
    tl.to('.navDrawer', {
      display: 'none',
    })
  }

  useGSAP(
    function () {
      if (navOpen) {
        gsapAnimation()
      } else {
        gsapAnimationReverse()
      }
    },
    [navOpen]
  )
  return (
    <div
      ref={drawerRef}
      className="navDrawer font-lausanne-medium absolute top-0 left-0 z-999 h-screen w-screen overflow-hidden bg-black text-white"
    >
      {/* Stairs */}
      <div className="fixed h-screen w-full">
        <div className="flex h-full w-full">
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div className="relative h-full w-full" ref={linkContainerRef}>
        {/* Logo Container */}
        <div className="fixed top-0 left-0 flex w-full items-center justify-between">
          <Logo navColor={navColor} />
          <div
            onClick={() => {
              setNavOpen(false)
            }}
            className="relative cursor-pointer p-2"
          >
            <svg
              width="100px"
              height="100px"
              viewBox="0 0 24 24"
              id="cross"
              data-name="Flat Line"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-primary"
            >
              <path
                id="primary"
                d="M19,19,5,5M19,5,5,19"
                style={{
                  fill: 'none',
                  stroke: 'green',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeWidth: 2,
                }}
              ></path>
            </svg>
          </div>
        </div>
        {/* Links Container */}
        <div className="flex h-full w-full items-center justify-center">
          <ul className="w-full">
            <li>
              <div className="link relative origin-top border-y border-white">
                <h1 className="font-lausanne-medium pt-3 text-center text-5xl uppercase lg:pt-10 lg:text-[8vw] lg:leading-[0.8]">
                  Projets
                </h1>
                <div className="moveLink bg-primary absolute top-0 flex text-black">
                  <div className="moveX flex items-center">
                    <h2 className="font-lausanne-medium pt-4 text-center text-[8vw] whitespace-nowrap uppercase lg:pt-10 lg:leading-[0.8]">
                      Pour Tout voir
                    </h2>
                    <img
                      className="h-14 w-32 shrink-0 rounded-full object-cover lg:h-36 lg:w-96"
                      src={NavProjectThumb1}
                      alt=""
                    />
                    <h2 className="font-lausanne-medium pt-4 text-center text-[8vw] whitespace-nowrap uppercase lg:pt-10 lg:leading-[0.8]">
                      Pour Tout voir
                    </h2>
                    <img
                      className="h-14 w-32 shrink-0 rounded-full object-cover lg:h-36 lg:w-96"
                      src={NavProjectThumb2}
                      alt=""
                    />
                  </div>
                  <div className="moveX flex items-center">
                    <h2 className="font-lausanne-medium pt-4 text-center text-[8vw] whitespace-nowrap uppercase lg:pt-10 lg:leading-[0.8]">
                      Pour Tout voir
                    </h2>
                    <img
                      className="h-14 w-32 shrink-0 rounded-full object-cover lg:h-36 lg:w-96"
                      src={NavProjectThumb1}
                      alt=""
                    />
                    <h2 className="font-lausanne-medium pt-4 text-center text-[8vw] whitespace-nowrap uppercase lg:pt-10 lg:leading-[0.8]">
                      Pour Tout voir
                    </h2>
                    <img
                      className="h-14 w-32 shrink-0 rounded-full object-cover lg:h-36 lg:w-96"
                      src={NavProjectThumb2}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="link relative origin-top border-t border-white">
                <h1 className="font-lausanne-medium pt-3 text-center text-5xl uppercase lg:pt-10 lg:text-[8vw] lg:leading-[0.8]">
                  Agence
                </h1>
                <div className="moveLink absolute top-0 flex bg-[#D3FD50] text-black">
                  <div className="moveX flex items-center">
                    <h2 className="font-lausanne-medium pt-4 text-center text-5xl whitespace-nowrap uppercase lg:pt-10 lg:text-[8vw] lg:leading-[0.8]">
                      Pour Tout Savoir
                    </h2>
                    <img
                      className="h-14 w-32 shrink-0 rounded-full object-cover lg:h-36 lg:w-96"
                      src={NavAgenceThumb1}
                      alt=""
                    />
                    <h2 className="font-lausanne-medium pt-4 text-center text-5xl whitespace-nowrap uppercase lg:pt-10 lg:text-[8vw] lg:leading-[0.8]">
                      Pour Tout Savoir
                    </h2>
                    <img
                      className="h-14 w-32 shrink-0 rounded-full object-cover lg:h-36 lg:w-96"
                      src={NavAgenceThumb2}
                      alt=""
                    />
                  </div>
                  <div className="moveX flex items-center">
                    <h2 className="font-lausanne-medium pt-4 text-center text-5xl whitespace-nowrap uppercase lg:pt-10 lg:text-[8vw] lg:leading-[0.8]">
                      Pour Tout Savoir
                    </h2>
                    <img
                      className="h-14 w-32 shrink-0 rounded-full object-cover lg:h-36 lg:w-96"
                      src={NavAgenceThumb1}
                      alt=""
                    />
                    <h2 className="font-lausanne-medium pt-4 text-center text-5xl whitespace-nowrap uppercase lg:pt-10 lg:text-[8vw] lg:leading-[0.8]">
                      Pour Tout Savoir
                    </h2>
                    <img
                      className="h-14 w-32 shrink-0 rounded-full object-cover lg:h-36 lg:w-96"
                      src={NavAgenceThumb2}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="link relative origin-top border-t border-white">
                <h1 className="font-lausanne-medium pt-3 text-center text-5xl uppercase lg:pt-10 lg:text-[8vw] lg:leading-[0.8]">
                  Contact
                </h1>
                <div className="moveLink absolute top-0 flex bg-[#D3FD50] text-black">
                  <div className="moveX flex items-center">
                    <h2 className="font-lausanne-medium pt-4 text-center text-5xl whitespace-nowrap uppercase lg:pt-10 lg:text-[8vw] lg:leading-[0.8]">
                      Pour envoyer un fax
                    </h2>
                    <svg
                      width="100px"
                      height="100px"
                      viewBox="0 0 15 15"
                      version="1.1"
                      id="heart"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.91,6.75c-1.17,2.25-4.3,5.31-6.07,6.94c-0.1903,0.1718-0.4797,0.1718-0.67,0C5.39,12.06,2.26,9,1.09,6.75&#xA;&#x9;C-1.48,1.8,5-1.5,7.5,3.45C10-1.5,16.48,1.8,13.91,6.75z"
                      />
                    </svg>
                    <h2 className="font-lausanne-medium pt-4 text-center text-5xl whitespace-nowrap uppercase lg:pt-10 lg:text-[8vw] lg:leading-[0.8]">
                      Pour envoyer un fax
                    </h2>
                    <svg
                      width="100px"
                      height="100px"
                      viewBox="0 0 15 15"
                      version="1.1"
                      id="heart"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.91,6.75c-1.17,2.25-4.3,5.31-6.07,6.94c-0.1903,0.1718-0.4797,0.1718-0.67,0C5.39,12.06,2.26,9,1.09,6.75&#xA;&#x9;C-1.48,1.8,5-1.5,7.5,3.45C10-1.5,16.48,1.8,13.91,6.75z"
                      />
                    </svg>
                  </div>
                  <div className="moveX flex items-center">
                    <h2 className="font-lausanne-medium pt-4 text-center text-5xl whitespace-nowrap uppercase lg:pt-10 lg:text-[8vw] lg:leading-[0.8]">
                      Pour envoyer un fax
                    </h2>
                    <svg
                      width="100px"
                      height="100px"
                      viewBox="0 0 15 15"
                      version="1.1"
                      id="heart"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.91,6.75c-1.17,2.25-4.3,5.31-6.07,6.94c-0.1903,0.1718-0.4797,0.1718-0.67,0C5.39,12.06,2.26,9,1.09,6.75&#xA;&#x9;C-1.48,1.8,5-1.5,7.5,3.45C10-1.5,16.48,1.8,13.91,6.75z"
                      />
                    </svg>
                    <h2 className="font-lausanne-medium pt-4 text-center text-5xl whitespace-nowrap uppercase lg:pt-10 lg:text-[8vw] lg:leading-[0.8]">
                      Pour envoyer un fax
                    </h2>
                    <svg
                      width="100px"
                      height="100px"
                      viewBox="0 0 15 15"
                      version="1.1"
                      id="heart"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.91,6.75c-1.17,2.25-4.3,5.31-6.07,6.94c-0.1903,0.1718-0.4797,0.1718-0.67,0C5.39,12.06,2.26,9,1.09,6.75&#xA;&#x9;C-1.48,1.8,5-1.5,7.5,3.45C10-1.5,16.48,1.8,13.91,6.75z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="link relative origin-top border-y border-white">
                <h1 className="font-lausanne-medium pt-3 text-center text-5xl uppercase lg:pt-10 lg:text-[8vw] lg:leading-[0.8]">
                  Blogs
                </h1>
                <div className="moveLink absolute top-0 flex bg-[#D3FD50] text-black">
                  <div className="moveX flex items-center">
                    <h2 className="font-lausanne-medium pt-4 text-center text-5xl whitespace-nowrap uppercase lg:pt-10 lg:text-[8vw] lg:leading-[0.8]">
                      Lire Les Articles
                    </h2>
                    <img
                      className="h-14 w-32 shrink-0 rounded-full object-cover lg:h-36 lg:w-96"
                      src={NavBlogThumb1}
                      alt=""
                    />
                    <h2 className="font-lausanne-medium pt-4 text-center text-5xl whitespace-nowrap uppercase lg:pt-10 lg:text-[8vw] lg:leading-[0.8]">
                      Lire Les Articles
                    </h2>
                    <img
                      className="h-14 w-32 shrink-0 rounded-full object-cover lg:h-36 lg:w-96"
                      src={NavBlogThumb2}
                      alt=""
                    />
                  </div>
                  <div className="moveX flex items-center">
                    <h2 className="font-lausanne-medium pt-4 text-center text-5xl whitespace-nowrap uppercase lg:pt-10 lg:text-[8vw] lg:leading-[0.8]">
                      Lire Les Articles
                    </h2>
                    <img
                      className="h-14 w-32 shrink-0 rounded-full object-cover lg:h-36 lg:w-96"
                      src={NavBlogThumb1}
                      alt=""
                    />
                    <h2 className="font-lausanne-medium pt-4 text-center text-5xl whitespace-nowrap uppercase lg:pt-10 lg:text-[8vw] lg:leading-[0.8]">
                      Lire Les Articles
                    </h2>
                    <img
                      className="h-14 w-32 shrink-0 rounded-full object-cover lg:h-36 lg:w-96"
                      src={NavBlogThumb2}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavDrawer
