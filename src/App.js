import React from "react";
import Header from "./components/header/header";
import Homesec from "./components/Homesection/homesec";
import About from "./components/About/about";
import Solution from "./components/solution/Solution";
import Slider from "./components/Slider/Slider";
import Blog from "./components/Blog/Feedback";
import Footer from "./components/Footer/footer";
const App=()=>{
      return(
            <>
   <div>
      {/* <h1>Welcome to DwellKraft World</h1> */}
      <Header/>
      <Homesec/>
      <About/>
      <Solution/>
      <Slider/>
      <Blog/>
      <Footer/>
   </div>
            </>
      );
};
export default App;