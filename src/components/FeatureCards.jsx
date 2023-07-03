

function FeatureCards({img, heading, content}) {
  return (
    <div className="card w-full text-left my-7 max-w-xl">
      <img src={img} alt="image" className="mb-3 md:w-18"/>
      <h3 className="font-bold mb-3 lg:text-xl">{heading}</h3>
      <p className="text-gray-500 lg:text-lg max-w-sm">{content}</p>
    </div>
  )
}

export default FeatureCards
