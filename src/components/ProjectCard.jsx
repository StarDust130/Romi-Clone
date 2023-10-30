/* eslint-disable react/prop-types */

import Button from "./Button";

const ProjectCard = ({ name, amount, image }) => {
  return (
    <div className="card p-4 border border-gray-500 rounded-lg m-4 mb-14 flex flex-row transition duration-300 transform hover:scale-105 cursor-pointer   w-96 mt-20">
      <div className="flex justify-center items-center">
        <img src={image} alt={name} className="w-10 h-10 mb-4" />
      </div>
      <div className="card-details">
        <div className="text-right ml-4">
          <h2 className="name text-xl text-gray-500 rounded p-2">{name}</h2>
          <p className="amount text-left text-4xl">{amount}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

const Card = ({ image, description , name }) => {
  return (
    <>
      <div className="p-4 rounded-lg m-4 flex flex-row transition duration-300 transform hover:scale-105 cursor-pointer w-96 mt-20">
        <div className="flex justify-center items-center w-40 h-30 overflow-hidden">
          <img src={image} alt={name} className="w-full h-full" />
        </div>
        <div className="card-details flex-grow">
          <div className="text-left ml-8">
            <h2 className="name text-xl rounded p-2">{name}</h2>
            <p className="amount text-left text-gray-500   text-sm overflow-y-auto max-h-20">
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export {Card}

const Card2 = ({ image, description, name, amount }) => {
  return (
    <>
      <div className="p-4 rounded-lg m-4 flex items-center transition duration-300 transform hover:scale-105 cursor-pointer border border-gray-500 max-w-xl">
        <div className="card-details flex items-start">
          <img src={image} alt={name} className="w-20 h-20 mr-4" />
          <div className="text-left">
            <h2 className="name text-xl rounded p-2">{name}</h2>
            <p className="description text-lg mb-2">{description}</p>
            <p className="amount text-gray-500 text-left text-sm">{amount}</p>
            <div className="flex mt-4">
              <Button value="Buy" />
              <button className="px-2 py-2 border text-xs border-gray-500 rounded-sm ml-2 transition duration-300 hover:bg-gray-300 hover:text-gray-700">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Card2 };



const Box = ({ title, value }) => {
  return (
    <div className="p-4 rounded-lg m-4 border border-gray-500 max-w-xs text-center">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-4xl mt-2">${value}</p>
    </div>
  );
};
export { Box };