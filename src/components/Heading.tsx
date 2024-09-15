import React from 'react'

const Heading = ({children}:{children:React.ReactNode}) => {
  return (
    <h1 className="text-2xl font-bold text-black sintony-bold">{children}</h1>
  )
}

export default Heading