import React, { useEffect } from 'react'
import './BlogCard.css'
import ProductCard from '../../ProductCard/ProductCard'
import axios from 'axios'

const BlogCard = () => {

  const fetchVariableData = async () => {
    const api = `https://fm.skyhub.pk/api/v1/products/get/468`
    try {
        const resposnse = await axios.get(api);
        console.log('variable product', resposnse)
    } catch (error) {
      console.error("error", error);
    }
  }

  useEffect(() => {
    fetchVariableData();
  }, [])
  return (
    <div>
        <ProductCard 

        />
    </div>
  )
}

export default BlogCard
