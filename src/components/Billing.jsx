import React from "react";
import { apple, google, bill } from "../assets";
import styles, { layout } from "../style";

const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={bill}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute -left-1/2 top-0 rounded-full white__gradient w-[50%] h-[50%] z-[3]" />
        <div className="absolute -left-1/2 bottom-0 rounded-full pink__gradient w-[50%] h-[50%] z-[0]" />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily contrl your <br className="sm:block hidden" />
          Billing & invoicing
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          elit enim ded massa etiam mauris eu adipiscing ultrices aemean
          neweu..fused ipsum pric rhoncus aliportion interg plates placerst
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img
            src={apple}
            alt="apple_store"
            className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
          />
          <img
            src={google}
            alt="apple_store"
            className="w-[128px] h-[42px] object-contain cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
