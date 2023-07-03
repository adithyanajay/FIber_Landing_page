
import { testimonials } from '../constants'
import Users from './Users'

function Testimonials() {
  return (
    <div className='mt-15 flex flex-col gap-5 lg:flex-row justify-around items-center w-full'>
      {
        testimonials.map((data, key)=> {
            return(
                <Users key={key} img={data.img} name={data.name} revenue={data.revenue} content={data.content} button={data.button} />
            )
        })
      }
    </div>
  )
}

export default Testimonials
