import React from "react";
import Navbar from "../components/navbar";
import ListProduct from "../components/list-product";
import Footer from "../components/footer";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      
      <div className="my-8">
        <ListProduct />
      </div>
        
      <Footer />
    </>
  )
}

export default Home;