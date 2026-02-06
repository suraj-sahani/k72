import gsap from 'gsap'
import { useRef } from 'react'
import { agenceList } from '../../lib/constants'

type ActiveAgence = {
  position: string
  name: string
  image: string
}

export default function AgenceList() {
  return (
    <section className="font-lausanne-regular relative py-10 text-white">
      <ul>
        {agenceList.map((item, index) => {
          return <AgenceListItem item={item} key={item.name + index} />
        })}
      </ul>
    </section>
  )
}

function AgenceListItem({ item }: { item: ActiveAgence }) {
  const { position, name, image } = item
  const agenceImageContainerRef = useRef<HTMLDivElement>(null)

  return (
    <li
      className="before:bg-primary relative flex cursor-pointer justify-between border-t-2 border-gray-500 p-2 before:absolute before:inset-0 before:-z-10 before:h-0 before:transition-all before:duration-200 before:ease-[cubic-bezier(0.215,0.61,0.355,1)] before:content-[''] last-of-type:border-b-2 hover:text-black hover:before:h-full active:text-black active:before:h-full"
      onMouseEnter={() => {
        gsap.to(agenceImageContainerRef.current, {
          width: window.innerWidth < 768 ? '90vw' : '30vw',
          duration: 0.3,
          ease: 'power3.out',
        })
      }}
      onMouseLeave={() => {
        gsap.to(agenceImageContainerRef.current, {
          width: 0,
          duration: 0.3,
          ease: 'power3.out',
        })
      }}
    >
      <span className="text-sm">{position}</span>
      <span className="text-[2vw]">{name}</span>

      <div
        ref={agenceImageContainerRef}
        className="agence_image pointer-events-none absolute top-[50%] left-[50%] z-10 h-[70vh] -translate-x-1/2 -translate-y-[50%] overflow-hidden rounded-2xl md:top-[25%] md:left-[35%] md:h-175 md:translate-x-0"
        style={{ width: 0 }}
      >
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>
    </li>
  )
}
