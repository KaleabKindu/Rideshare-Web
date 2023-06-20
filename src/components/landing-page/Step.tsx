import React from "react";

interface StepProp {
  step_number: number;
  title: string;
  description: string;
}

const Step: React.FC<StepProp> = ({ step_number, title, description }) => {
  return (
    <div>
      <div
        className={`w-12 h-12 rounded-full border-4 border-blue-500 flex items-center justify-center text-primary ${
          step_number <= 2 ? "ml-40 sm:ml-auto" : "ml-40 sm:ml-0"
        } text-xl font-semibold`}
      >
        <span className=" text-xl font-bold">{step_number}</span>
      </div>

      <h1
        className={`text-center mt-5 sm:mt-0 ${
          step_number <= 2
            ? "text-center md:text-end"
            : "text-center md:text-start"
        } text-xl font-semibold`}
      >
        {title}
      </h1>
      <p
        className={`px-4 sm:px-0 mb-10 sm:mb-10 text-center${
          step_number <= 2
            ? "text-center sm:text-end"
            : "text-center sm:text-start"
        } text-base`}
      >
        {description}
      </p>
    </div>
  );
};

export default Step;
