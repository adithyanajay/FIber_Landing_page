import { heroimg, star } from "../Assets";
import { checklist } from "../constants";
import Btn from "./Btn";
import Check from "./Check";

function Hero() {
  return (
    <main className="min-h-screen text-center px-8 pt-8 lg:flex flex-row-reverse justify-between items-center lg:px-20 w-full mx-auto max-w-screen-2xl pb-10">
      <img
        src={heroimg}
        alt="hero-illustration"
        className=" w-11/12 md:w-8/12 lg:w-6/12 max-w-xl mx-auto"
      />
      <div className="content lg:w-8/12 lg:max-w-2xl ">
        <div className="hidden lg:flex gap-4">
          <div className="rating flex gap-2">
          <img src={star} alt="rating" />
          <img src={star} alt="rating" />
          <img src={star} alt="rating" />
          <img src={star} alt="rating" />
          <img src={star} alt="rating" />
          </div>
          
          <p className="text-gray-500">Rated 4.8/5 (243 reviews)</p>
        </div>
        <h2 className="text-4xl text-left font-bold mt-5 pr-10 md:text-5xl lg:text-4xl 2xl:text-5xl md:mt-10 lg:w-auto">
          Create your portfolio in minutes.
        </h2>
        <p className=" mt-5 pr-10 text-left text-base text-gray-500 sm:text-lg">
          With Fiber, you can setup your own personal portfolio in minutes with
          dozens of premade, beautiful templates.
        </p>

        <div className="  w-full mt-5 h-28 flex flex-col justify-between lg:flex-row lg:w-8/12 lg:h-16 lg:items-center lg:justify-between  lg:max-w-xs xl:w-6/12">
          <Btn name={"Start Free Trail"} color={true} />
          <a href="#">
            <p
              className={` text-xl text-main font-medium underline lg:text-base`}
            >
              View Examples
            </p>
          </a>
        </div>

        <div className="checklist-items mt-5 flex flex-col justify-around h-20 lg:flex-row lg:justify-start lg:gap-4">
          {checklist.map((data, id) => {
            return <Check key={id} content={data.content} />;
          })}
        </div>
      </div>
    </main>
  );
}

export default Hero;
