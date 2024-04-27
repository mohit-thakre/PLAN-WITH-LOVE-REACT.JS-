import React, { useState } from "react";
import Heading from "./COMPONENT/Heading";
import Cards from "./COMPONENT/Cards";
import data from "./COMPONENT/data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [tour, settour] = useState(data);
  function handleremove(id) {
    const newtour = tour.filter((tour) => tour.id !== id);
    settour(newtour);
    toast.success("card removed successfully");
  }

  function refresh() {
    settour(data);
  }

  if (tour.length === 0) {
    return (
      <div className=" w-full h-[100vh] bg-amber-200 flex flex-col justify-center items-center">
        <div className="grid place-content-center">
          <h1 className=" text-red-700 font-extrabold text-4xl text-center m-auto">
            NO TOUR LEFT
          </h1>
          <button
            className=" px-4 py-2 bg-green-500 rounded-3xl mt-8"
            onClick={() => refresh()}
          >
            REFRESH
          </button>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Heading />
      <Cards data={tour} remove={handleremove} refresh={refresh} />
      <ToastContainer position="top-center" />
    </div>
  );
};

export default App;
