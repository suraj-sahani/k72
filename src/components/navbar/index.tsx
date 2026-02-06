import gsap from 'gsap'
import { useRef, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
  NavAgenceThumb1,
  NavAgenceThumb2,
  NavBlogThumb1,
  NavBlogThumb2,
  NavProjectThumb1,
  NavProjectThumb2,
} from '../../assets'
import Logo from './logo'

const navColorMap = {
  '/': 'white',
  '/agence': 'black',
  '/projects': 'black',
}

const Navbar = () => {
  const { pathname } = useLocation()
  const drawerRef = useRef<HTMLDivElement>(null)
  const linkContainerRef = useRef<HTMLDivElement>(null)
  const transitionContainerRef = useRef<HTMLDivElement>(null)

  const navColor = navColorMap[pathname as keyof typeof navColorMap] || 'white'

  function handleStairsAnimation(type: 'open' | 'close') {
    if (type === 'open') {
      // create a fresh timeline for each navigation so tweens don't accumulate
      const tl = gsap.timeline()

      // show overlay immediately
      tl.set(transitionContainerRef.current, { display: 'block' })

      tl.from('.nav_stair', {
        height: 0,
        stagger: {
          amount: -0.25,
        },
        ease: 'power2.out',
        duration: 0.45,
      })

      tl.to(drawerRef.current, {
        display: 'block',
        duration: 0.3,
        stagger: {
          amount: 0.25,
        },
      })

      tl.to(linkContainerRef.current, {
        opacity: 1,
        duration: 0.3,
      })

      // Remove body overflow
      tl.to(document.body, {
        overflow: 'hidden',
      })
    } else {
      const tl = gsap.timeline()

      tl.to(document.body, {
        overflow: 'auto',
      })
      tl.to(linkContainerRef.current, {
        opacity: 0,
        duration: 0.3,
      })

      tl.set(drawerRef.current, {
        display: 'none',
        duration: 0.3,
      })
      // move stairs down to reveal the new page underneath
      tl.to('.nav_stair', {
        y: '100%',
        stagger: {
          amount: -0.25,
        },
        ease: 'power2.inOut',
        duration: 0.45,
      })

      // hide the overlay immediately (no extra delay)
      tl.set(transitionContainerRef.current, { display: 'none' })

      // reset stairs position for next transition
      tl.set('.nav_stair', { y: '0%' })
    }
  }

  return (
    <>
      <div className="fixed top-0 z-4 flex w-full items-start justify-between">
        <Logo navColor={navColor} />
        <button
          onClick={() => {
            handleStairsAnimation('open')
          }}
          className="group hover:before:bg-primary relative h-10 w-48 cursor-pointer bg-black before:absolute before:top-0 before:left-0 before:h-0 before:w-full before:transition-all before:duration-200 before:ease-[cubic-bezier(0.215,0.61,0.355,1)] before:content-[''] hover:before:h-full lg:h-14 lg:w-[15vw]"
        >
          <div className="relative flex h-full flex-col items-end justify-center gap-0.5 px-8 lg:gap-1.5 lg:px-12">
            <div className="h-0.5 w-12 bg-white group-hover:bg-black lg:w-18" />
            <div className="h-0.5 w-6 bg-white group-hover:bg-black lg:w-10" />
          </div>
        </button>
      </div>

      {/* Stairs */}
      <div
        className="nav_stair_container absolute z-10 h-screen w-full"
        ref={transitionContainerRef}
        style={{ display: 'none' }}
      >
        <div className="flex h-screen w-full">
          <div className="nav_stair h-screen w-1/5 bg-black" />
          <div className="nav_stair h-screen w-1/5 bg-black" />
          <div className="nav_stair h-screen w-1/5 bg-black" />
          <div className="nav_stair h-screen w-1/5 bg-black" />
          <div className="nav_stair h-screen w-1/5 bg-black" />
        </div>
      </div>
      {/* Nav Drawer */}
      <div
        ref={drawerRef}
        className="navDrawer font-lausanne-medium absolute top-0 left-0 z-999 h-screen w-screen overflow-hidden text-white"
        style={{ display: 'none' }}
      >
        <div className="relative h-full w-full">
          <div className="absolute top-1 left-1">
            <Logo navColor="white" />
          </div>
          <div className="absolute top-1 right-2 z-20">
            <div
              onClick={() => {
                handleStairsAnimation('close')
              }}
              className="relative h-20 w-20 cursor-pointer lg:h-25 lg:w-25"
            >
              <div className="bg-primary absolute h-28 w-0.5 origin-top -rotate-45 lg:h-35"></div>
              <div className="bg-primary absolute right-0 h-28 w-0.5 origin-top rotate-45 lg:h-35"></div>
            </div>
          </div>

          <div
            className="flex h-full w-full items-center justify-center"
            style={{ opacity: 0 }}
            ref={linkContainerRef}
          >
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
    </>
  )
}

export default Navbar
