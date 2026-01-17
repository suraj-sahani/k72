import gsap, { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

type Props = {
  src: string
}

const ProjectCard = ({ src }: Props) => {
  return (
    <div
      className="group relative h-full w-1/2 overflow-hidden rounded-none hover:rounded-4xl"
      style={{
        transition: 'border-radius 200ms',
      }}
    >
      <img src={src} className="h-full w-full object-cover" />

      {/* overlay with view project text; invisible until hover */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-200 ease-in group-hover:opacity-100">
        <h2 className="inline-block overflow-hidden rounded-full border-2 border-white px-3 py-2 align-middle text-[3.75rem] leading-[0.7] whitespace-nowrap text-white uppercase">
          Voir Le Projet
        </h2>
      </div>
    </div>
  )
}

export default ProjectCard
