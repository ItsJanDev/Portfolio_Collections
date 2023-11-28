import React from 'react'

import { FaGithub } from "react-icons/fa";
const ProductsTechStacks = ({source, altname, color}) => {
  return (
    <div className="flex flex-col flex-wrap gap-1 rounded-md projects-stacks" style={{background:color}}>
        <button className="text-white flex gap-2 items-center p-1 rounded-md text-sm "><img className="max-h-5" src={source} alt={altname} />{altname}</button>
    </div>
  )
}

export default ProductsTechStacks