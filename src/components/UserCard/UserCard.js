import React, { useState, useEffect } from "react";
import axios from "axios";

const UserCard = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?page=1&results=4&seed=abc"
        );
        setUserList(response.data.results);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap justify-center mt-20  ">
      {userList.map((user, index) => (
        <div
          key={index}
          className="mx-2 my-2 flex items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          style={{ width: "500px", height: "270px" }}
        >
          <img
            className="object-cover  rounded w-{60%} md:rounded-lg mx-4 my-4"
            src={user.picture.large}
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{`${user.name.first} ${user.name.last}`}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{`Father's Name: ${user.name.last}`}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{`Gender: ${user.gender}`}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{`Phone: ${user.phone}`}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {`Address: ${user.location.street.name}, ${user.location.city}`}.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserCard;
