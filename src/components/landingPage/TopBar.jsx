import React from "react";
import styles from "./landingPage.module.css";
import { Breadcrumb, ConfigProvider } from "antd";
import { Space, Tag } from "antd";
import { HiOutlineChevronDown } from "react-icons/hi2";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";
const { CheckableTag } = Tag;

const tagsData = [
  "Tools",
  "AWS Builder",
  "Start Build",
  "Build Supplies",
  "Tooling",
  "Blue Hosting",
];

function TopBar() {
  return (
    <div>
      <h1 className="text-xl md:text-3xl lg:text-4xl ">
        Best Website builders in the US
      </h1>
      <div
        className={`${styles.topBar}  flex items-center py-3 mt-5 justify-between flex-wrap gap-5`}
      >
        <div className="flex gap-6 flex-wrap">
          <p className="text-color text-xs mb-0 flex items-center gap-1">
            <IoIosCheckmarkCircleOutline /> Last Updated{" "}
            <span>22 February 2024</span>
          </p>

          <p className="text-color text-xs mb-0 flex items-center gap-1">
            <IoIosInformationCircleOutline /> Advertisement Disclosure
          </p>
        </div>
        <p className="text-xs mb-0 text-color flex items-center gap-2">
          Top Relevent <HiOutlineChevronDown />
        </p>
      </div>
      <div
        className={`${styles.tabsDiv} flex overflow-scroll gap-5 md:gap-7 lg:gap-10 py-4`}
      >
        {tagsData.map((tag) => (
          <CheckableTag
            key={tag}
            //   checked={selectedTags.includes(tag)}
            //   onChange={(checked) => handleChange(tag, checked)}
          >
            {tag}
          </CheckableTag>
        ))}
      </div>
      <ConfigProvider
        theme={{
          components: {
            Breadcrumb: {
              iconFontSize: 17,
            },
          },

          iconFontSize: 22,
        }}
      >
        <Breadcrumb
          separator=">"
          items={[
            {
              title: "Home",
              href: "",
            },
            {
              title: "Hosting for all",
              href: "",
            },
            {
              title: "Hosting",
              href: "",
            },
            {
              title: "Hosting 6",
              href: "",
            },
            {
              title: "Hosting 5",
            },
          ]}
        />
      </ConfigProvider>
    </div>
  );
}

export default TopBar;
