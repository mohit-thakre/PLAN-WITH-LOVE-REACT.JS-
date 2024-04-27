import React, { useState } from "react";

const Card = (props) => {
  const [readmore, setreadmore] = useState(false);

  function handleread() {
    setreadmore(!readmore);
  }

  return (
    <div>
      <div className="w-[300px] h-auto p-4 bg-blue-950 rounded-lg">
        <img
          className="w-[300px] h-[300px] rounded-sm mx-auto"
          src={props.image}
          alt="dasdf"
        ></img>
        <p className=" font-bold text-3xl text-center text-white p-5 ">
          {props.name}
        </p>
        <p className=" text-green-300 font-semibold font-">${props.price}</p>
        <p className="text-white">
          {readmore ? props.info : `${props.info.substr(0, 80)}...`}
          <span onClick={handleread} className="text-blue-400 font-bold">
            {readmore ? "Read Less" : "Read More"}
          </span>
        </p>
        <button
          className="w-full py-2  rounded-lg bg-red-600  text-white font-semibold  hover:bg-red-900 "
          onClick={() => {
            props.removecard(props.id);
          }}
        >
          NOT INTERESTED
        </button>
      </div>
    </div>
  );
};

export default Card;
