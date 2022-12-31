import React from "react";
import css from "./header.module.css";

const Header =()=>{

      return (
            <>
                <div className={css.container}>

                  <div className={css.logo}>
                    🚸<span>DwellKraft</span>
                  </div>

                  <div className={css.right}>
                      <div className={css.menu}>
                            <ul className={css.menu}>
                              <li>Design Gallery</li>
                              <li>Modular Kitchen</li>
                              <li>Living Room</li>
                              <li>Bedroom</li>
                              <li>Bathroom</li>
                              <li>Furnishing & Decor</li>
                              <li>Civil Works</li>
                            </ul>
                      </div>
                  <button className={css.getQuote}>Get Free Quote</button>
                  </div>

                </div>
            </>
      );
};
export default Header;