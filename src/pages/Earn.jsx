import img6 from "../assets/s6.png";
import img7 from "../assets/s7.png";
import img8 from "../assets/s8.png";
import img9 from "../assets/s9.png";
import img10 from "../assets/s10.png";
import img11 from "../assets/s11.png";

const Earn = () => {
  return (
    <>
      <div className="w-full cursor-pointer">
        <div className="flex">
          <h1 className="font-bold text-4xl mt-20 ml-40 flex items-center">
            Earn
            <span className="ml-2">
              <img
                src="https://zomi.finance/static/media/ic_avalanche_24.4f4088f4.svg"
                alt="external"
              />
            </span>
          </h1>
        </div>
        <p className="text-gray-500 ml-40 mt-4 ">
          Stake $ZOMI and $ZLP to earn rewards.
        </p>
        <p className="text-gray-500 ml-40">For detailed stats:</p>

        <div className="flex gap-12 justify-center  items-center mt-5  flex-wrap">
          <img
            src={img6}
            alt="img6"
            className="h-96 border border-gray-500 rounded  transition duration-300 ease-in-out transform hover:scale-105 "
          />
          <img
            src={img7}
            alt="img7"
            className="h-96 border border-gray-500 rounded  transition duration-300 ease-in-out transform hover:scale-105 "
          />
        </div>

        <div className="flex gap-12 justify-center  items-center mt-5  flex-wrap">
          <img
            src={img8}
            alt="img8"
            className=" h-96 border border-gray-500 rounded  transition duration-300 ease-in-out transform hover:scale-105 "
          />
          <img
            src={img9}
            alt="img9"
            className=" h-96 border border-gray-500 rounded  transition duration-300 ease-in-out transform hover:scale-105 "
          />
        </div>

        <div className="flex">
          <h1 className="font-bold text-4xl mt-20 ml-40 flex items-center">
            Vest{" "}
          </h1>
        </div>
        <p className="text-gray-500 ml-40 mt-4 ">
          Convert esZOMI tokens to $ZOMI tokens.
        </p>
        <p className="text-gray-500 ml-40 mt-2 ">
          Please read the vesting details before using the vaults.
        </p>

        <div className="flex gap-12 justify-center  items-center mt-5  mb-20  flex-wrap">
          <img
            src={img10}
            alt="img10"
            className="h-60 border border-gray-500 rounded  transition duration-300 ease-in-out transform hover:scale-105 "
          />
          <img
            src={img11}
            alt="img11"
            className="h-60 border border-gray-500 rounded  transition duration-300 ease-in-out transform hover:scale-105 "
          />
        </div>
      </div>
    </>
  );
};
export default Earn;
