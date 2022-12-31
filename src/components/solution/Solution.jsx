import React from "react";
import css from "./solution.module.css";

const Solution=()=>{
      return (
            <>
    <div className={css.container}>
      <h1>End-to-End Design Solutions</h1>
      <div className={css.conatiner1}>
            <div className={css.items}>Civil Works & Plumbing</div>
            <div className={css.items}>Home Design</div>
            <div className={css.items}>Interior Design</div>
            <div className={css.items}>Bathroom Remodelling</div>
            <div className={css.items}>Furniture & Storage</div>
            <div className={css.items}>Moduler Kitchen</div>
            <div className={css.items}>Foyer Design</div>
            <div className={css.items}>TV Unit</div>
            <div className={css.items}>Pooja Room</div>
            <div className={css.items}>Ligits & Decor</div>
            <div className={css.items}>Locker Unit</div>
            <div className={css.items}>Wall Painting</div>
            <div className={css.items}>False Ceiling</div>
            <div className={css.items}>Floor & Tiling</div>
            <div className={css.items}>Wallpaper</div>
      </div>
      <button className={css.btn}>Get Free Consulation</button>
    </div>


    <div className={css.container}>
      <h1>Our Unique Approach</h1>
        <ul>
            <li>No hidden</li>
            <li>60 days installation</li>
            <li>One stop service provider</li>
            <li>Quality Assured with branded materials</li>
            <li>3D visuals & virtual reality(VR) incorporation to enhance design experience</li>
            <li>5 years warranty, on-site service warranty</li>
        </ul>
    </div>
            </>
      );
};

export default Solution;