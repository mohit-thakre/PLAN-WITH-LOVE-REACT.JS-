import React from "react";
import Card from "./Card";

const Cards = ({ data, remove }) => {
  return (
    <div className="bg-yellow-400 flex flex-wrap gap-3 w-full h-full mx-auto justify-center items-center p-2">
      <div className="w-[70%] mx-auto flex flex-wrap justify-center items-center gap-4">
        {data.map((item, index) => {
          return (
            <div>
              <Card
                name={item.name}
                info={item.info}
                image={item.image}
                price={item.price}
                id={item.id}
                removecard={remove}
                key={index}
              ></Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
