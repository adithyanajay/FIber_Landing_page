
function FooterLinks({name, links}) {
  return (
    <div className="mb-10">
      <h3 className="text-black font-bold mb-4 text-lg">{name}</h3>
      {links.map((link, id)=> {
        return (
            <a href="#" key={id} className="text-lg text-gray-600 mb-3 block">{link}</a>
        )
      })}
    </div>
  )
}

export default FooterLinks
