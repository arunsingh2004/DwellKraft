import React from "react";
import css from "./homesec.module.css";

const Homesec=()=>{

      return(
            <>
               <div className={css.container}>
                  <div className={css.left}>
                  <h2>Home Interior</h2>
                  <p>Your one step destination for all Home Interiors helping families discover their unique Design requirements</p>
                  </div>
                  <div className={css.right}>
                        <form>
                                  <div className={css.form}>
                                     <h2>Web Design With Your Budget</h2>

                                        <div className={css.input}>

                                         <input type="text"  placeHolder="Name"/>
                                        </div>
                                  <div className={css.email}>

                                         <input type="text"  placeHolder="Email"/>
                                   </div>
                                     <div className={css.phone}>

                                         <input type="text"  placeHolder="Phone"/>
                                 </div>
                                      <div className={css.msg}>

                                         <textarea type="text"  placeHolder="Your Msg"/>
                                         </div>
                                         <div>
                                         <button className={css.btn}>Contact Now</button>
                                         </div>
                                  </div>

                        </form>
                  </div>
               </div>
            </>
      )
};
export default Homesec;