import React from "react"
import type { CardProp } from "../../typescript/types/prop";
import { Link } from "react-router-dom";

const HcardSection1:React.FC<CardProp> = ({items}) => {
  return (
    <>
      {items?.map((properties,index) => (
        <div
            className="w-[49%] bg-white p-3 border border-yellow-500 rounded-3xl flex flex-wrap"
            key={index}
          >
            <div
              className="w-full h-[313px] bg-cover bg-center rounded-3xl"
              style={{ backgroundImage: `url(${properties.img})` }}
            ></div>
            <div className="w-full flex flex-wrap">
              <div className="w-[80%]">
                <h3  className="text-4xl py-6 font-semibold">
                  {properties.heading}
                </h3>
                <div className="max-w-full w-[80%] bg-yellow-500 h-[2px]"></div>
                <p className="text-xl mb-4 mt-2">{properties.description}</p>
              </div>
              <div className="w-[20%] flex justify-end items-center">
                <Link to={`/property/${properties.id}`}>
                <button className="text-yellow-500 text-4xl bg-black p-7 px-9 rounded-full hover:shadow-md hover:bg-gray-900 hover:shadow-black hover:translate-y-[-2px] transition-all">
                  ➚
                </button>
                </Link>
              </div>
            </div>
          </div>
      ))}
    </>
  );
};

export default HcardSection1;
