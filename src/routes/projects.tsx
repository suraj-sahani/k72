import ProjectRow from '../components/projects/project-row'
import { projects } from '../lib/constants'

export default function Projects() {
  return (
    <div className="px-2 pt-[100vw] md:pt-[25vw]">
      <h1 className="font-lausanne-medium text-[8.5vw] leading-[0.8em] uppercase">
        Projets
      </h1>
      <div className="flex flex-col gap-12 md:gap-2">
        {projects.map(({ item_1, item_2 }, i) => (
          <ProjectRow key={i} left={item_1} right={item_2} />
        ))}
      </div>
    </div>
  )
}
