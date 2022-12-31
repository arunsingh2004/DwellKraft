import React from "react";
import css from "./about.module.css";
const About=()=>{
      return(
   <>
       <div className={css.container}>
            <h1>The Home Design You Dream</h1>
            <p>We are a team of young architects, who have experience and unique prespective to look at design and spaces by understanding the client and their requirements.We ought to include the best visualization software in order to give a fourth view of what we intend to deliver.</p>
            <p>We are here for you</p>

            <button className={css.btn}>Get Free Consulation</button>
       </div>
<div className={css.conatiner1}>
             <h1 className={css.h1}>Why <span className={css.span}>DwellKraft</span></h1>
       <div className={css.conatiner2}>
             <div className={css.items}>
             ⚠️<h5> 5 Years Warranty </h5> 
             </div>
             <div className={css.items}> 
             💰<h5>Price Match</h5>
             </div>
             <div className={css.items}>
             📧<h5>Easy EMIs</h5>
              </div>
             <div className={css.items}>
             🏢<h5>End to End Service</h5>
              </div>
       </div>
       </div>

<div className={css.conatiner1}>
      <h2>Stay Safe, Design Virtually With Us</h2>
<div className={css.conatiner2}>
      <div className={css.items}>
      📹 Meet us virtually and let us know you need</div>
      <div className={css.items}>
      👷 Get consulation from our best designer</div>
      <div className={css.items}>
     📱 Meet your need with us</div>
</div>
</div>
   </>
      );
};
export default About;