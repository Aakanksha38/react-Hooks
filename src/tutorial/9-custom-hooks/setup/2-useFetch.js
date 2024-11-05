import { useState, useEffect } from 'react';

export const useFetch = (url) => {   //here instead if u use Fetch ,, it wil not work ,,coz for hooks we "use"
    const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const response = await fetch(url)
    const products = await response.json()
    setProducts(products)
    setLoading(false)
  }

  useEffect(() => {
    getProducts()
  }, [url])

  //since useFetch is function we need to return something , here we want to return loading n products
  return{loading,products};
};
