import React from "react";

function Footer() {
  return (
    <div className="bg-[#212731] pb-10 mt-5">
      <div className="mx-auto max-w-screen-xl p-7 flex flex-wrap">
        <div className="w-full sm:w-1/2 md:w-1/4">
          <div className="flex flex-col gap-3">
            <p className="text-white text-lg">Category</p>
            <p className="text-[#B6BDC4]">Web Builder</p>
            <p className="text-[#B6BDC4]">Hosting</p>
            <p className="text-[#B6BDC4]">Data Center</p>
            <p className="text-[#B6BDC4]">Robotic Automation</p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 mt-5 sm:mt-0">
          <div className="flex flex-col gap-3">
            <p className="text-white text-lg">Category</p>
            <p className="text-[#B6BDC4]">Contact</p>
            <p className="text-[#B6BDC4]">Privacy Policy</p>
            <p className="text-[#B6BDC4]">Terms of Service</p>
            <p className="text-[#B6BDC4]">Categories</p>
            <p className="text-[#B6BDC4]">About</p>
          </div>
        </div>
        <div className="w-full md:w-2/4 mt-5 md:mt-0">
          <div className="flex justify-center">
            <p className="text-white">United States</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
