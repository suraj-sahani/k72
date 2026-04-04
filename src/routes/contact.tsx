import TiltedMarquee from '../components/tilted-marquee'

export default function Contact() {
  return (
    <div className="h-screen w-full bg-black text-white">
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
    </div>
  )
}
