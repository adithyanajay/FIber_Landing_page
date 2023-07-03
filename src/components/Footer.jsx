import FooterLinks from "./FooterLinks"
import { footer_links } from "../constants"
function Footer() {
  return (
    <footer className=" w-full px-8 pt-10 md:flex justify-around gap-5 pb-10">
    <div className="w-7/12 md:w-5/12 ">
    <h3 className="text-black font-bold mb-4 text-lg">Fiber</h3>
        <p className="text-gray-600 mb-3 block text-lg">With Fiber, you can setup your own person portfolio, in minutes, with dozens of premade, beautiful templates</p>
        <p className="text-gray-600 mb-10 block text-lg">Made with ♥ in the Netherlands.</p>
    </div>
       
        {footer_links.map((data, id)=> {
            return(
                <FooterLinks key={id} name={data.name}  links={data.links}/>
            )
            
        })}
      
    </footer>
  )
}

export default Footer
