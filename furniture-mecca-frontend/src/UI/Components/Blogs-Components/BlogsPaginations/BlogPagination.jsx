import React from 'react'
import './BlogPagination.css'
import { LuArrowLeftCircle } from "react-icons/lu";
import { LuArrowRightCircle } from "react-icons/lu";

const BlogPagination = () => {
  const numbers = Array.from({ length: 30 }, (_, index) => index + 1);
  return (
    <div className='blog-page-paginations'>
      <button className='blog-page-pagination-arrows blog-page-pagination-arrow-left'>
        <LuArrowLeftCircle size={50} />
      </button>
      
      <button className='blog-page-pagination-arrows blog-page-pagination-arrow-right'>
        <LuArrowRightCircle size={50} />
      </button>
    </div>
  )
}

export default BlogPagination
