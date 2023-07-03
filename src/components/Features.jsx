import { features } from "../constants"
import FeatureCards from "./FeatureCards"

function Features() {
  return (
    <div className='features mt-10 '>
      <p className='text-main font-bold mb-5'>Why Fiber?</p>
      <h2 className='text-black font-bold text-3xl max-w-lg leading-snug md:mb-16'>A good portfolio means good employability.</h2>
      <div className="cards mt-10 md:flex justify-between w-full gap-8 ">
        {features.map((feature, id)=> {
            return(
                <FeatureCards key={id} img={feature.img} heading={feature.heading} content={feature.content} />
            )
        })}
      </div>
    </div>
  ) 
}

export default Features
