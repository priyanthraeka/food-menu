import { useEffect, useState } from "react";
import { menu } from "../database";
import Foods from "./Foods";

const Categories = () => {
  const [data, setData] = useState([]);

  const onClickAllHandler = () => {
    setData(menu);
  };

  const onClickBreakfastHandler = () => {
    setData(menu.filter((item) => item.category === "breakfast"));
  };

  const onClickLunchHandler = () => {
    setData(menu.filter((item) => item.category === "lunch"));
  };

  const onClickShakesHandler = () => {
    setData(menu.filter((item) => item.category === "shakes"));
  };

  useEffect(() => {
    onClickAllHandler();
  }, []);

  return (
    <>
      <div>
        <ul className="flex gap-4">
          <li>
            <button
              onClick={onClickAllHandler}
              className="rounded-lg bg-orange-400 px-3 py-1 text-white transition-all duration-300 ease-in-out hover:bg-orange-600"
            >
              All
            </button>
          </li>
          <li>
            <button
              onClick={onClickBreakfastHandler}
              className="rounded-lg bg-orange-400 px-3 py-1 text-white transition-all duration-300 ease-in-out hover:bg-orange-600"
            >
              Breakfast
            </button>
          </li>
          <li>
            <button
              onClick={onClickLunchHandler}
              className="rounded-lg bg-orange-400 px-3 py-1 text-white transition-all duration-300 ease-in-out hover:bg-orange-600"
            >
              Lunch
            </button>
          </li>
          <li>
            <button
              onClick={onClickShakesHandler}
              className="rounded-lg bg-orange-400 px-3 py-1 text-white transition-all duration-300 ease-in-out hover:bg-orange-600"
            >
              Shakes
            </button>
          </li>
        </ul>
      </div>
      <Foods data={data} />
    </>
  );
};

export default Categories;
