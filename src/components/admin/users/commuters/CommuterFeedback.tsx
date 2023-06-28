import React from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import feedback from "@/data/admin/commuter-feedback.json";

interface FeedbackProps {
  date: string | number;
  title: string;
  detail: string;
}

const CommuterFeedback: React.FC<FeedbackProps> = ({ date, title, detail }) => {
  return (
    <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800 mt-8 ml-16">
      <div className="flex items-center justify-between">
        <span className="text-sm font-light text-gray-600 dark:text-gray-400">
          {date}
        </span>
      </div>

      <div className="mt-2">
        <a
          href="#"
          className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
        >
          {title}
        </a>
        <p className="mt-2 text-gray-600 dark:text-gray-300">{detail}</p>
      </div>
      <div className="flex mt-5  mb-5items-center">
        <FaStar className="w-5 h-5 text-yellow-500" />
        <FaStar className="w-5 h-5 text-yellow-500" />
        <FaStar className="w-5 h-5 text-yellow-500" />
        <FaStar className="w-5 h-5 text-yellow-500" />
        <FaRegStar className="w-5 h-5 text-yellow-500" />
      </div>
    </div>
  );
};

export default CommuterFeedback;
