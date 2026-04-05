import { useRef } from 'react'
import TiltedMarquee from '../components/tilted-marquee'

export default function Contact() {
  const containerRef = useRef(null)
  const iterationRef = useRef(null)

  const PageContent = () => (
    <section className="h-screen w-full bg-black text-white">
      <h1 className="font-lausanne-regular pt-[3em] text-center text-[8vw] uppercase md:pt-[0.4em] [&_div]:-mt-[0.6em]">
        <div>
          <span>Pour</span>
        </div>
        <div>
          <span>parler de</span>
        </div>
        <div>
          <span>votre</span>
        </div>
        <div>
          <span>projet</span>
        </div>
      </h1>
      <div className="mt-4 flex flex-col items-center justify-between gap-4 px-5 text-xs md:-mt-[8em] md:flex-row">
        <div className="text-center">
          Dans un écran ou un bureau.
          <br />
          Chez vous. Chez nous.
          <br />
          Partout.
        </div>

        <address className="text-center" style={{ fontStyle: 'normal' }}>
          <a
            href="https://maps.app.goo.gl/PwGE7FGRcGwdtdto6"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary hover:underline"
          >
            525 Av. Viger O - Suite 400
            <br />
            Montréal, QC H2Z 1G6 →
          </a>
        </address>
      </div>
      <TiltedMarquee />

      <div className="socials mt-10">
        <h2 className="mb-4 text-center text-xs uppercase">Suivez-nous</h2>

        <ul className="[&_li]:hover:border-primary [&_li]:hover:text-primary flex items-center justify-center gap-4 text-center [&_li]:rounded-full [&_li]:border-2 [&_li]:border-white [&_li]:px-4 [&_li]:text-[10vw] [&_li]:leading-[0.9] [&_li]:transition-colors [&_li]:duration-200 [&_li]:ease-in md:[&_li]:text-[4vw]">
          <li>
            <a
              href="https://www.facebook.com/K72.ca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span aria-hidden="true">FB</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/k72_creation/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span aria-hidden="true">IG</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/k72"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span aria-hidden="true">IN</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.behance.net/agenceK72"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span aria-hidden="true">BE</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )

  return <PageContent />
}
