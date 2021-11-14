import { useRef } from "react";
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Portfolio from "../Portfolio/Portfolio";

const Main = () => {
  const projectRef = useRef();
  const techsRef = useRef();
  const aboutmeRef = useRef();

  return (
    <>
      <Header />
      <div className="main">
        <Promo />
        <NavTab refs={{ projectRef, techsRef, aboutmeRef }} />
        <AboutProject aboutRef={projectRef} />
        <Techs techsRef={techsRef} />
        <AboutMe aboutmeRef={aboutmeRef} />
        <Portfolio />
      </div>
      <Footer />
    </>
  );
};

export default Main;
