import React from "react";
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";
import { IconType } from "react-icons/lib";

type CardProps = {
  Icon: IconType;
  name: string;
  numberOfItems: number;
  increase: boolean;
  percentage: number;
};

const Card = ({
  Icon,
  name,
  numberOfItems,
  increase,
  percentage,
}: CardProps) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-52 space-y-2 border ">
      <div className="text-primary  p-3 bg-primary bg-opacity-20 rounded-full w-fit">
        <Icon size={20} />
      </div>
      <div className="text-2xl font-bold">{numberOfItems.toLocaleString()}</div>
      <div className="flex justify-between gap-5">
        <div className="text-xs">Total {name}</div>
        <div
          className={`flex items-center ${
            increase ? "text-green-500" : "text-red-500"
          }`}
        >
          {increase ? (
            <MdArrowDropUp size={20} />
          ) : (
            <MdArrowDropDown size={20} />
          )}
          <div className="text-sm">{percentage}%</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
