/* eslint-disable react/prop-types */

const Button = ({value}) => {
  return (
    <>
      <button className="btn  hover:bg-green-400 text-white font-semibold py-1 px-3 rounded transition duration-300 ease-in-out transform hover:scale-105  ">
        {value}
      </button>
    </>
  );
}
export default Button