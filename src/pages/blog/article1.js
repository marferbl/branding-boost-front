import React from "react";
import Navbar from "../../components/base/landing/navbar";
import FooterLanding from "../../components/base/landing/footer";
import Article1 from "../../components/base/landing/blog/articulo-1";


const Article_1 = () => {
    return (
      <>
        <Navbar />
        <Article1/>
        <FooterLanding/>
      </>
    );
  };
  
  export default Article_1;