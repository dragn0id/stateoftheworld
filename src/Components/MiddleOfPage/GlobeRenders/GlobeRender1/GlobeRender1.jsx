/* eslint-disable react/prop-types */
import "./GlobeRender1.css";
// import Globe from "../../../Globe/Globe";s
import DottedGlobe from "../../../DottedGlobe/Globe";

export default function GlobeRender1() {
  return (
    <>
      {/* <Globe UVMap={props.UVMap} setCountry={props.setCountry} /> */}
      <DottedGlobe />
    </>
  );
}
