import React, { useContext } from "react";
import { GlobalDataContext } from "../context/context";
import Directories from "../components/Home/Directories";
import FormHome from "../components/Home/FormHome";
import Map from "../components/Contact/MapContent";
import Modal from "../components/Home/Modal";
import BaseLayout from "../components/global/BaseLayout";
import CounterUp from "../components/global/CounterUp";
import ServicesHome from "../components/Services/ContentServices";
import HeroSection from "../components/Home/HeroSection";
import Paletacolor from "../components/global/Paletacolor";
import BlockFour from "../components/block/Block_5";
import BlockThree from "../components/block/Block_10";
import BlockOne from "../components/block/BlockOne";
import VideoPromocional from "../components/global/VideoPromocional";
import Block3 from "../components/block/BlockThree"
import GalleHome from "../components/Home/GalleHom";
import ValuesOne from "../components/values/ValuesOne";

// para agregar la frase de los años de experiencia o la licencia agregar sloganPrincipal={true}
// para agregar la lista de about agregar listsAbout={true}
// para agregar la lista de servicios agregar listsServices={true}

function Home() {
  const { rpdata } = useContext(GlobalDataContext);
  return (
    <BaseLayout PageName="Home">
      <div className="md:max-w-full w-full">

        <Modal />

        <HeroSection />


        <BlockThree
          sloganPrincipal={true}
          image={rpdata?.stock?.[15]}
          image3={rpdata?.stock?.[12]}
          text={rpdata?.dbHome?.[0]?.text}
          listsServices={true}
        />

        {/* video promocional */}

            {/* <VideoPromocional
              title={rpdata?.dbSlogan?.[2]?.slogan}
              text={rpdata?.dbAbout?.[1]?.text}
              linkVideo={`${rpdata?.videosPromo?.[0].link}`}
              image={`${rpdata?.videosPromo?.[0].img}`}
            /> */}


        <Directories />

        <BlockFour
          title={rpdata?.dbSlogan?.[4]?.slogan}
          text={rpdata?.dbHome?.[1]?.text}
          image={rpdata?.stock?.[10]}
        />

        <CounterUp image={rpdata?.stock?.[7]} />

        <BlockOne
          title={'a little about us'}
          text={rpdata?.dbAbout?.[0]?.text}
          image={rpdata?.stock?.[8]}
          listsAbout={true}
        />

        {/* our reviews */}
        {
          rpdata?.reviews?.isHomeOnly === true ?
            <div className="w-4/5 mx-auto py-[100px]">
              <h1 className="pb-10 text-center">{rpdata?.labels?.general?.titleReviews}</h1>
              <div className={`${rpdata?.reviews?.links?.[0]}`}></div>
            </div>
            : null
        }
        <ValuesOne/>
        <Block3
        title={rpdata?.dbSlogan?.[0]?.slogan}
        text={rpdata?.dbAbout?.[1]?.text}
        image={rpdata?.stock?.[11]}
        />

        <GalleHome/>
        <ServicesHome />

        {/* Paleta de Colores */}

        {
          rpdata?.brandingExtra?.[0]?.activo ?
            <Paletacolor />
            : null
        }
        <div
          className="bgFormHome"
          style={{ backgroundImage: `url("${rpdata?.stock?.[4]}")` }}
        >
          <div className="relative">
            <FormHome />
          </div>
        </div>

        <Map />

      </div>
    </BaseLayout>
  );
}

export default Home;
