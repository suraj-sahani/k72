import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Fragment, useRef } from "react";
import { useLocation } from "react-router-dom";

type Props = {
  children?: React.ReactNode;
};
const PageTransition = ({ children }: Props) => {
  const tl = gsap.timeline();
  const transitionContainerRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  useGSAP(() => {
    // Display the entire overlay
    tl.to(transitionContainerRef.current, {
      display: "block",
    });
    // Animation starts and hides the pagw with black stairs
    tl.from(".stair", {
      height: 0,
      stagger: {
        amount: -0.25,
      },
    });

    // Transition ends, revealing the page
    tl.to(".stair", {
      y: "100%",
      zIndex: -1,
      stagger: {
        amount: -0.25,
      },
    });

    // Since the entire transtion is an overlay, we remove it
    tl.to(transitionContainerRef.current, {
      display: "none",
    });

    // Reset the stairs to their initial position
    tl.to(".stair", {
      y: "0%",
    });

    gsap.from(pageRef.current, {
      opacity: 0,
      scale: 1.2,
      delay: 1.3,
    });
  }, [pathname]);

  return (
    <>
      <div
        className="stair_container h-screen w-full fixed z-10"
        ref={transitionContainerRef}
      >
        <div className="flex h-full w-full">
          <div className="stair h-full w-1/5 bg-black" />
          <div className="stair h-full w-1/5 bg-black" />
          <div className="stair h-full w-1/5 bg-black" />
          <div className="stair h-full w-1/5 bg-black" />
          <div className="stair h-full w-1/5 bg-black" />
        </div>
      </div>
      <div ref={pageRef}>{children}</div>
    </>
  );
};

export default PageTransition;
