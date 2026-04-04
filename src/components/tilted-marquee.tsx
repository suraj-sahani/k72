export default function TitltedMarquee() {
  return (
    <div className="w-screen overflow-hidden">
      <a className="bg-primary font-lausanne-medium -leading-[1.2em] my-20 -ml-[10vw] flex w-[120vw] -rotate-[5deg] items-center overflow-hidden text-[8vw] text-black uppercase [&_span]:pt-[0.2em] [&_span]:leading-[0.9]">
        <span>bonjour@k72.ca</span>

        <span>bonjour@k72.ca</span>
        <span>bonjour@k72.ca</span>
      </a>
    </div>
  )
}
