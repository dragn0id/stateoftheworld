/* eslint-disable react/prop-types */
import "./GlobeRender1.css";
import Globe from "../../../Globe/Globe";

function GlobeRender1(props) {
  return (
    <>
      <Globe UVMap={props.UVMap} />
    </>
  );
}

export default GlobeRender1;