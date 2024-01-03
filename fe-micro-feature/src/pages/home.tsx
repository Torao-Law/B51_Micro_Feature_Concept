
// import Navbar from "../components/navbar";
// import ListProduct from "../components/list-product";
// import Footer from "../components/footer";

function Home(props: { isLogin: boolean}) {
  return (
    <>
      { props.isLogin ? "Kamu sudah login" : "tolong login dulu" }

      { props.isLogin && "ini dari operator dan" }
      {/* <Navbar />
      
      <div className="my-8">
        <ListProduct />
      </div>
        
      <Footer /> */}
    </>
  )
}

export default Home;