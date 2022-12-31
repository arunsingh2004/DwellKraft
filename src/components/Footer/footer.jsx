import React from "react";
import "./footer.css";
const Footer=()=>{
      return(
            <>
        <div className="footer">
        <div className="fmain">
            <h2>Ideology@<span>Dwellkraft</span></h2>
            <p>Our clients are the biggest asset,Professionalism,patience , and a "client-first" attitude<br/> are the principle DwellKraft is built on.</p>
            <br/>
            <p>we are just one CLICK! away</p>

            <button className="fbtn">Contact Now</button>
        </div>

            <div className="fright">
                  <p>dwellkraft@gmail.com 📧</p>
                  <p>99999999 📲</p>
            
</div>
            <div className="fcontainer">
                  <div className="flogo">
                    🚸<span>DwellKraft</span>
                  </div>

                  <div className="fright1">
                      <div className="fmenu">
                            <ul className="fmenu">
                              <li>Design Gallery</li>
                              <li>Modular Kitchen</li>
                              <li>Living Room</li>
                              <li>Bedroom</li>
                              <li>Bathroom</li>
                              <li>Furnishing & Decor</li>
                              <li>Civil Works</li>
                            </ul>
                      </div>
                      <p>FOLLLOW US 🛂 📈</p> 
                  </div>
                  
                </div>
  <p className="copyRight">@2022DwellKraft.com All Right Reserved</p>
</div>
            </>
      );
};
export default Footer;