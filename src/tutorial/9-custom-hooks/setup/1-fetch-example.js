import React from 'react'
import { useFetch } from './2-useFetch'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://www.course-api.com/javascript-store-products'

const Example = () => {
  
  const {loading,products} = useFetch(url); // loading n prodcuts r coming from useFetch n to useFetch we need to pass something , some url
  console.log(products)
  return (
    <div>
      <h2>{loading ? 'loading...' : 'data'}</h2>
    </div>
  )
}

export default Example
