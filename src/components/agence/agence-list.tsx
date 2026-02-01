import { useRef, useState } from 'react'
import { agenceList } from '../../lib/constants'
import gsap from 'gsap'

type ActiveAgence = {
  position: string
  name: string
  image: string
}

export default function AgenceList() {
  const agenceImageContainerRef = useRef<HTMLDivElement>(null)
  const [activeAgence, setActiveAgence] = useState<ActiveAgence | null>(null)

  function handleMouseEnter(item: ActiveAgence) {
    setActiveAgence(item)
    const viewportMiddle = window.innerHeight / 2
    const scrollOffset = window.scrollY

    if (agenceImageContainerRef.current) {
      gsap.set(agenceImageContainerRef.current, {
        position: 'fixed',
        top: `${viewportMiddle + scrollOffset}px`,
        width: 0,
      })
    }
  }

  function handleMouseLeave() {
    setActiveAgence(null)
  }

  return (
    <section className="font-lausanne-regular relative py-10 text-white">
      <ul>
        {agenceList.map((item, index) => {
          return (
            <AgenceListItem
              item={item}
              key={item.name + index}
              onMouseEnter={(item) => handleMouseEnter(item)}
              onMouseLeave={() => handleMouseLeave()}
            />
          )
        })}
      </ul>
      {activeAgence && (
        <div
          ref={agenceImageContainerRef}
          className="agence_image pointer-events-none absolute top-[50%] left-[50%] z-10 h-175 w-[28vw] -translate-x-[50%] -translate-y-[50%] overflow-hidden rounded-2xl"
        >
          <img
            src={activeAgence.image}
            alt={activeAgence.name}
            className="h-full w-full object-cover"
          />
        </div>
      )}
    </section>
  )
}

function AgenceListItem({
  item,
  onMouseEnter,
  onMouseLeave,
}: {
  item: ActiveAgence
  onMouseEnter: (agence: ActiveAgence) => void
  onMouseLeave: (agence: null) => void
}) {
  const { position, name } = item

  return (
    <li
      className="before:bg-primary relative flex cursor-pointer justify-between border-t-2 border-gray-500 p-2 before:absolute before:inset-0 before:-z-10 before:h-0 before:transition-all before:duration-200 before:ease-[cubic-bezier(0.215,0.61,0.355,1)] before:content-[''] last-of-type:border-b-2 hover:text-black hover:before:h-full"
      onMouseOver={(e) => onMouseEnter(item)}
      onMouseLeave={() => onMouseLeave(null)}
    >
      <span className="text-sm">{position}</span>
      <span className="text-[2vw]">{name}</span>
    </li>
  )
}
