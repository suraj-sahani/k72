import { Link } from "react-router-dom";

const FooterLinks = () => {
  return (
    <div className="font-lausanne-regular flex items-center justify-center gap-2">
      <Link
        to="/projects"
        className="text-[6.5vw] hover:text-primary hover:border-primary uppercase border-[3px] leading-[5vw] border-white rounded-full px-[0.3em] transition-colors duration-100 ease-in pb-0 pt-[0.22em]"
      >
        Projects
      </Link>
      <Link
        to="/agents"
        className="text-[6.5vw] hover:text-primary hover:border-primary uppercase border-[3px] leading-[5vw] border-white rounded-full px-[0.3em] transition-colors duration-100 ease-in pb-0 pt-[0.22em]"
      >
        Agents
      </Link>
    </div>
  );
};

export default FooterLinks;
