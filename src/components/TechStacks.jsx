import React from 'react'

const TechStacks = ({source, altname}) => {
  return (
    <div>
        <img src={source} alt={altname} className="text-stacks m-auto"/>
        <p className="text-center">{altname}</p>
    </div>
  )
}

export default TechStacks