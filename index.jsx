import React, { useState, useEffect } from "react";
import axios from "axios";

const Card22 = () => {
  const [count, setCount] = useState([]);
  const [isDropDown, setIsDropDown] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/users").then((response) => {
      const gun = response.data.users;
      const gta = gun?.filter((bus) => bus.id < 5);
      setCount(gta);
    });
  }, []);

  console.log("isDropDown :>> ", isDropDown);

  return (
    <div>
      {count?.map((car) => (
        <div className="space-y-2 my-2 border w-72 rounded-lg" key={car.id}>
          <div className="flex justify-between item-center">
            <div className="flex gap-1">
              <div className="bg-gray-100 rounded-full">
                <img src={car?.image} alt="hi" className="h-[60px]" />
              </div>
              <div>
                <div>
                  {car?.firstName} {car?.lastName}
                </div>
                <p className="text-sm"> {car?.email}</p>
              </div>
            </div>
            <button
              onClick={() => {
                setIsDropDown((prev) =>
                  prev.includes(car?.id)
                    ? prev.filter((id) => id !== car?.id)
                    : [...prev, car?.id]
                );
              }}
            >
              {isDropDown.includes(car?.id) ? "up" : "down"}
            </button>
          </div>
          {isDropDown.includes(car?.id) && (
            <div>
              <div>
                <p>{car?.firstName}</p>
                <p>{car?.address?.address}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Card22;
