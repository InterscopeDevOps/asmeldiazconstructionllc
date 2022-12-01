import React, { useContext } from "react";
import { GlobalDataContext } from "../context/context";
import TransparentHeader from "../components/global/TransparentHeader";
import BaseLayout from "../components/global/BaseLayout";
import ValuesOne from "../components/values/ValuesOne";
import BlockFour from "../components/block/Block_6";
import BlockOne from "../components/block/BlockOne";

function About() {
  const { rpdata } = useContext(GlobalDataContext);
  return (
    <BaseLayout PageName="About">
      <div className="md:max-w-full w-full">
        <TransparentHeader
          headertitle="About"
          Subheader="About"
          bgimg={`${rpdata?.stock?.[9]}`}
        />
        <BlockFour
            title={'a little about us'}
            text={rpdata?.dbAbout?.[0]?.text}
            image1={rpdata?.stock?.[4]}
            image2={rpdata?.stock?.[1]}
            image3={rpdata?.stock?.[3]}
            image4={rpdata?.stock?.[2]}
            listsAbout
          />
        <ValuesOne image={rpdata?.stock?.[8]} />

        <BlockOne
          title={rpdata?.dbSlogan?.[2]?.slogan}
          text={rpdata?.dbAbout?.[1]?.text}
          image={rpdata?.stock?.[10]}
        />
      </div>
    </BaseLayout>
  );
}

export default About;
