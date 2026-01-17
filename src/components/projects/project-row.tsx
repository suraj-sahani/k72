import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import ProjectCard from './project-card'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
type Props = {
  left: string
  right: string | null
}

const ProjectRow = ({ left, right }: Props) => {
  const rowRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.fromTo(
      rowRef.current,
      { height: 100 }, // initial height
      {
        height: 800, // expanded height
        ease: 'none',
        scrollTrigger: {
          trigger: rowRef.current, // each row triggers itself
          start: 'top 90%', // when row enters viewport
          end: 'top 10%', // when row reaches near top
          scrub: true,
          markers: true, // for debugging
          invalidateOnRefresh: true, // fixes rows jumping to full height
        },
      }
    )
  }, [])

  return (
    <div
      ref={rowRef}
      className="flex gap-2 overflow-hidden"
      style={{ height: 200 }}
    >
      <ProjectCard src={left} />
      {right && <ProjectCard src={right} />}
    </div>
  )
}

export default ProjectRow
