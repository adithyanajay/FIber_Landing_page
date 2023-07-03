import { check } from "../Assets"


function Check({content}) {
  return (
    <div className="check-content flex lg:items-center">
      <img src={check} alt="checkmark" className="mr-3 lg:w-"/>
      <p className="text-gray-500 md:text-lg lg:text-sm inline-block">{content}</p>
    </div>
  )
}

export default Check
