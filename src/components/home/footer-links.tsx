import { Link } from 'react-router-dom'

const FooterLinks = () => {
  return (
    <div className="font-lausanne-regular flex items-center justify-center gap-2">
      <Link
        to="/projects"
        className="hover:text-primary hover:border-primary rounded-full border-[3px] border-white px-[0.3em] pt-[0.22em] pb-0 text-[5.5vw] leading-[4vw] uppercase transition-colors duration-100 ease-in"
      >
        Projects
      </Link>
      <Link
        to="/agence"
        className="hover:text-primary hover:border-primary rounded-full border-[3px] border-white px-[0.3em] pt-[0.22em] pb-0 text-[5.5vw] leading-[4vw] uppercase transition-colors duration-100 ease-in"
      >
        Agence
      </Link>
    </div>
  )
}

export default FooterLinks
