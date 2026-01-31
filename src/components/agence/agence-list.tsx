import { agenceList } from '../../lib/constants'

export default function AgenceList() {
  return (
    <section className="font-lausanne-regular h-screen text-white">
      <ul>
        {agenceList.map((item) => {
          return (
            <li className="before:bg-primary relative flex cursor-pointer justify-between border-t-2 border-gray-500 p-2 before:absolute before:inset-0 before:-z-10 before:h-0 before:transition-all before:duration-200 before:ease-[cubic-bezier(0.215,0.61,0.355,1)] before:content-[''] hover:text-black hover:before:h-full">
              <span className="text-sm">{item.position}</span>
              <span className="text-[2vw]">{item.name}</span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
