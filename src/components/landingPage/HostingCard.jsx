import React, { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi2";
import styles from "./HostingCard.module.css";
import { Tooltip } from "antd";
import { hostingsData } from "../../utils/data";
import { IoIosInformationCircleOutline } from "react-icons/io";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

function HostingCard() {
  const [showMore, setShowMore] = useState(-1);

  return (
    <div>
      {hostingsData.map((hosting, index) => {
        return (
          <div
            key={index}
            className="bg-white rounded-lg flex flex-wrap my-8 mb-10 py-3 "
          >
            <div className="w-full md:w-1/4 p-3">
              <HostingImage index={index} data={hosting} />
            </div>
            <div className="w-full md:w-2/4 p-3">
              <HostingContent
                index={index}
                showMore={showMore}
                setShowMore={setShowMore}
                data={hosting}
              />
            </div>
            <div className="w-full md:w-1/4 p-3">
              <RatingDiv data={hosting} />
            </div>
            {showMore === index && (
              <ul>
                {hosting.moreDetails.map((item, index) => (
                  <li className="text-color py-1">{item}</li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}

const HostingImage = ({ data, index }) => {
  return (
    <div className="relative">
      <div
        className={`${styles.numberDiv} flex justify-center items-center rounded-full border-2  p-0 relative top-10 `}
      >
        <h1 className="text-lg m-0 text-[#626E79]">{index + 1}</h1>
      </div>
      <button className="p-1 rounded-md text-xs px-2 absolute left-0 top-0 bg-[#FF7724] text-white">
        <EmojiEventsIcon style={{ fontSize: "16px" }} /> {data.feature}
      </button>
      <div className="flex flex-col gap-5 items-center">
        <img
          className="w-[70%]"
          src={`../../${data.image}`}
          alt="hosting-image"
        />
        <p className="text-color mb-0">{data.caption}</p>
      </div>
    </div>
  );
};

const HostingContent = ({ data, showMore, setShowMore, index }) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-color mb-0">
        <span className="font-semibold ">{data.name}-</span> {data.description}
      </p>
      <h6 className="font-semibold mb-0">Main Highlights</h6>
      <p className="text-color mb-0">[What You Get]: {data.highlight}</p>

      <p
        style={{ cursor: "pointer" }}
        onClick={
          showMore === index ? () => setShowMore(-1) : () => setShowMore(index)
        }
        className="flex  items-center gap-2 text-[#1B88F4]"
      >
        Show More{" "}
        {showMore === index ? (
          <KeyboardArrowUpIcon />
        ) : (
          <KeyboardArrowDownIcon />
        )}
      </p>
    </div>
  );
};

const RatingDiv = ({ data }) => {
  return (
    <div className="flex flex-col gap-6 h-full items-center justify-between">
      <div
        className={`${styles.ratingCard} min-w-[140px] relative p-4 rounded-sm bg-[#F3F9FF] flex flex-col items-center`}
      >
        <div className="absolute top-2 right-2">
          <Tooltip title="This is the average rating.">
            <IoIosInformationCircleOutline
              style={{ color: "#cdcdcd", cursor: "pointer" }}
            />
          </Tooltip>
        </div>
        <h1 className="text-3xl">{data.rating}</h1>
        <p className=" text-color pt-1">
          {" "}
          {data.rating > 9
            ? "Excellent"
            : data.rating > 8
            ? "Good"
            : data.rating >= 7
            ? "Average"
            : "Poor"}
        </p>
        <div className="flex gap-1">
          {Array(Math.floor(data.rating / 2))
            .fill()
            .map((item) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <button className="w-full blue-bg py-2 rounded-md text-white px-10">
        View
      </button>
    </div>
  );
};

export default HostingCard;
