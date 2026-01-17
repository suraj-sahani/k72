import { useNav } from './context'
import Logo from './logo'
import NavDrawer from './nav-drawer'

const Navbar = () => {
  const { setNavOpen, navColor } = useNav()
  return (
    <>
      <div className="fixed top-0 z-4 flex w-full items-start justify-between">
        <Logo navColor={navColor} />
        <button
          onClick={() => {
            setNavOpen(true)
          }}
          className="group hover:before:bg-primary relative h-10 w-48 bg-black before:absolute before:top-0 before:left-0 before:h-0 before:w-full before:transition-all before:duration-200 before:ease-[cubic-bezier(0.215,0.61,0.355,1)] before:content-[''] hover:before:h-full lg:h-14 lg:w-[15vw]"
        >
          <div className="relative flex h-full flex-col items-end justify-center gap-0.5 px-8 lg:gap-1.5 lg:px-12">
            <div className="h-0.5 w-12 bg-white group-hover:bg-black lg:w-18" />
            <div className="h-0.5 w-6 bg-white group-hover:bg-black lg:w-10" />
          </div>
        </button>
      </div>
      {/* <NavDrawer /> */}
    </>
  )
}

export default Navbar
