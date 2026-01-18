import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'
import type { Project } from '../../lib/types'
import ProjectCard from './project-card'
gsap.registerPlugin(ScrollTrigger)
type Props = {
  left: Project
  right: Project | null
}

const ProjectRow = ({ left, right }: Props) => {
  const rowRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={rowRef}
      className="flex h-full min-h-150 flex-col gap-12 overflow-hidden md:h-50 md:flex-row md:gap-2"
    >
      <ProjectCard item={left} />
      {right && <ProjectCard item={right} />}
    </div>
  )
}

export default ProjectRow
