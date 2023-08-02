import React from "react";
import Navbar from "../../components/base/landing/navbar";
import FooterLanding from "../../components/base/landing/footer";
import Blog from "../../components/base/landing/blog/blog";


const BlogPage = () => {
    return (
      <>
        <Navbar />
        <Blog/>
        <FooterLanding/>
      </>
    );
  };
  
  export default BlogPage;