import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

const override ={
    display :'block',
    margin: '100px auto',
}

const Spinner = () => {
  return (
    <ClipLoader
    color='blue'
    loading={loading}
    cssOverride={override}
    size={150}
      
    />
  )
}

export default Spinner
