import gsap, { ScrollTrigger } from 'gsap/all'
import type { Project } from '../../lib/types'
gsap.registerPlugin(ScrollTrigger)

type Props = {
  item: Project
}

const ProjectCard = ({ item }: Props) => {
  const { src } = item
  return (
    <button
      className="group relative h-full w-full rounded-none md:w-1/2 md:overflow-hidden md:hover:rounded-4xl md:focus:rounded-4xl md:active:rounded-4xl"
      style={{
        transition: 'border-radius 200ms',
      }}
    >
      <img src={src} className="h-[90%] w-full object-cover md:h-full" />

      {/* overlay with view project text; invisible until hover */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-200 ease-in group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100 md:block">
        <h2 className="inline-block overflow-hidden rounded-full border-2 border-white px-3 py-2 align-middle text-[5vw] leading-[0.7] whitespace-nowrap text-white uppercase">
          Voir Le Projet
        </h2>
      </div>

      <div className="font-lausanne-regular mt-5 flex items-center justify-between md:hidden">
        <h2 className="text-[6vw] text-wrap">{item.title}</h2>
        <h2 className="text-[4vw]">{item.year}</h2>
      </div>
    </button>
  )
}

export default ProjectCard
