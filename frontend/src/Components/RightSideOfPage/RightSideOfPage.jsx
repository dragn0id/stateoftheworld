/* eslint-disable react/prop-types */
import "./RightSideOfPage.css";
import Sentiment from "./Sentiment/Sentiment";
import InfoCard from "./InfoCard/InfoCard";
import CreditsCard from "./CreditsCard/CreditsCard";

function RightSideOfPage(props) {
  return (
    <>
      <div className="relative text-white order-3 p-2 max-md:order-2 w-1/5 max-md:w-[100lvw] max-md:h-[100lvh] max-md:mt-20 max-md:mb-20 flex items-center justify-between flex-col">
        <Sentiment countryData={props.countryData} />
        <InfoCard countryData={props.countryData} country={props.country} />
        <CreditsCard />
      </div>
    </>
  );
}

export default RightSideOfPage;