import img1 from "../assets/s1.png";
import img2 from "../assets/s2.png";
import img3 from "../assets/s3.png";
import img4 from "../assets/s4.png";
import img5 from "../assets/s5.png";

const DashBoard = () => {
  return (
    <>
      <div className="w-full cursor-pointer">
        <div className="flex">
          <h1 className="font-bold text-4xl mt-20 ml-40 flex items-center">
            Stats{" "}
            <span className="ml-2">
              <img
                src="https://zomi.finance/static/media/ic_avalanche_24.4f4088f4.svg"
                alt="external"
              />
            </span>
          </h1>
        </div>
        <p className="text-gray-500 ml-40 mt-4 ">
          Stats avalanche24Icon Ethereum Total Stats start from 06 Jan 2022.
        </p>
        <p className="text-gray-500 ml-40">For detailed stats:</p>
        <div className="flex gap-12 justify-center items-center mt-5 ">
          <img
            src={img1}
            alt="img1"
            className="h-48 border border-gray-500 rounded  transition duration-300 ease-in-out transform hover:scale-105 "
          />
          <img
            src={img2}
            alt="img2"
            className=" h-48 border border-gray-500 rounded  transition duration-300 ease-in-out transform hover:scale-105 "
          />
        </div>

        <div className="flex">
          <h1 className="font-bold text-4xl mt-20 ml-40 flex items-center">
            Stats{" "}
            <span className="ml-2">
              <img
                src="https://zomi.finance/static/media/ic_avalanche_24.4f4088f4.svg"
                alt="external"
              />
            </span>
          </h1>
        </div>
        <p className="text-gray-500 ml-40 mt-4 ">
          Platform and $ZLP index tokens.
        </p>
        <div className="flex gap-12 justify-center items-center mt-5 ">
          <img
            src={img3}
            alt="img3"
            className="h-48 border border-gray-500 rounded  transition duration-300 ease-in-out transform hover:scale-105 "
          />
          <img
            src={img4}
            alt="img4"
            className=" h-48 border border-gray-500 rounded  transition duration-300 ease-in-out transform hover:scale-105 "
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src={img5}
            alt="img5"
            className=" h-60 mb-10  border border-gray-500 rounded  mt-20  transition duration-300 ease-in-out transform hover:scale-105 "
          />
        </div>
      </div>
    </>
  );
};
export default DashBoard;
