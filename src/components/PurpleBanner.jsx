
import Btn from "./Btn";
import { pageImage } from "../Assets";

function PurpleBanner() {
  return (
    <div className="bg-main text-white px-10 pt-10 rounded-lg mt-16 mb-16 md:flex justify-around items-center min-h-fit md:pb-10">
      <div className="content md:w-5/12 ">
        <h2 className="text-3xl font-medium leading-snug mb-5 md:text-3xl lg:text-4xl">Diversify your portfolio.</h2>
        <p className="text-sm w-12/12 mb-10 lg:text-base">
          Create an even more impressive portfolio by creating case studies for
          your projects. Simply follow our step-by-step guide.
        </p>
        <div className="md:w-9/12 lg:w-auto">
        <Btn name={"Start Free Trial"} color={false} />
        </div>
        
      </div>
      <img src={pageImage} alt="portfolio image" className="mt-16 md:w-6/12 md:m-0 lg:w-4/12"/>
    </div>
  );
}

export default PurpleBanner;
