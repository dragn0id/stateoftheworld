/* eslint-disable react/prop-types */
import GlobeRender1 from "../GlobeRender1/GlobeRender1";
import GlobeRender2 from "../GlobeRender2/GlobeRender2";
// import GlobeRender3 from "../GlobeRender3/GlobeRender3";
// import GlobeRender4 from "../GlobeRender4/GlobeRender4";
import { useState } from "react";

function AllGlobes(props) {
  const [Globe, setGlobe] = useState("Globe2"); // Move to middle of page
  return (
    <div className=" max-[515px]:scale-75 max-[380px]:scale-[0.65]">
      {Globe === "Globe1" && (
        <GlobeRender1 UVMap={props.UVMap} setCountry={props.setCountry} />
      )}
      {Globe === "Globe2" && <GlobeRender2 />}
      {/* <GlobeRender3 UVMap={props.UVMap} />
      <GlobeRender4 UVMap={props.UVMap} /> */}
    </div>
  );
}
export default AllGlobes;
