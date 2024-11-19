import React from 'react'
import './BlogPage.css';
import BlogHead from '../../Components/Blogs-Components/BlogsHead/BlogHead'
import AllBlogs from '../../Components/Blogs-Components/AllBlogs/AllBlogs';
import BlogPagination from '../../Components/Blogs-Components/BlogsPaginations/BlogPagination';

const BlogPage = () => {
  return (
    <div className='blogs-page-main-container'>
      <div className='blogs-page-main-heading-div'>
        <h3 className='blogs-page-main-heading'>Exciting Blogs Created by <span> Furniture Mecca </span></h3>
      </div>
      <BlogHead />
      <AllBlogs />
      <BlogPagination />
    </div>
  )
}

export default BlogPage
