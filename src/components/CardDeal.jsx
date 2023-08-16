import React from "react";
import styles, { layout } from "../style";
import { card } from "../assets";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a Better Card Deal <br className="sm:block hidden" />
          In a few wasy steps
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
          Arcu totor mprusu in mattis at se integer afacubis aliqust quis
          aliquent aget mauris tprot alqusent ultio a ameta
        </p>
        <div>
          <Button styles="mt-5 " />
        </div>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;
