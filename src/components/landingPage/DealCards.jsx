import React from "react";
import styles from "./DealCard.module.css";
import { dealsData } from "../../utils/data";

function DealCards() {
  return (
    <div>
      <h4 className="text-2xl">Related deals you might like for</h4>
      <div className="mt-10">
        <div className="flex flex-wrap  justify-between">
          {dealsData.map((item, index) => {
            return (
              <div
                className={`${styles.dealCard} p-5 bg-white rounded-md flex flex-col gap-y-3 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 `}
              >
                <div className="flex justify-center">
                  <img src={`../../${item.image}`} alt="dealImg" />
                </div>
                <div className="flex gap-3">
                  {item.highlight.map((high, index) => (
                    <button
                      className={`${styles.featureBtn} text-sm text-[#074786] bg-[#F2F4F7] py-[2px] px-3 rounded-sm`}
                    >
                      {high}
                    </button>
                  ))}
                </div>
                <p className="text-center text-color">{item.caption}</p>
                <p className="text-[#626E79]  ">{item.name}</p>
                <h4 className="text-xl">
                  ${item.price}{" "}
                  <span className="text-xs text-[#9FA9B3]"> ${item.mrp}</span>
                  <span className="text-xs ps-2 text-[#EF4C5D]">
                    {" "}
                    {`(${item.discount}% Off)`}
                  </span>
                </h4>
                <button className="blue-bg p-2 rounded-md text-white">
                  View Deal
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DealCards;
