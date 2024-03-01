import React from "react";

function SignupBar() {
  return (
    <div className="flex flex-wrap justify-between items-center mt-10">
      <div className="w-full sm:w-1/2 lg:w-1/3">
        <h1 className="text-xl md:text-3xl text-[#5C6874]">
          Sign up and get exclusive special deals
        </h1>
      </div>
      <div>
        <button className="blue-bg text-white p-2 px-4 rounded-md mt-5 sm:mt-0">
          Sign up
        </button>
      </div>
    </div>
  );
}

export default SignupBar;
