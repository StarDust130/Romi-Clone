import Button from "../components/Button";
import ProjectCard from "../components/ProjectCard";
import { Card } from "../components/ProjectCard";
import { Card2 } from "../components/ProjectCard";
import { project } from "../index";
import { project2 } from "../index";
import { project3 } from "../index";

const Home = () => {
  return (
    <>
      <div id="home" className="w-full  ">
        <div className="flex flex-col font-semibold mt-20 ml-40 ">
          <div className="text-6xl ">Decentralized </div>
          <div className="text-6xl ">Perpetual Exchange</div>

          <div className="text-xl mt-5 text-gray-500 ">
            Trade BTC, ETH, AVAX and other top
          </div>
          <div className="text-xl  text-gray-500 ">
            cryptocurrencies with up to 30x leverage
          </div>
          <div className="text-xl  text-gray-500 ">
            directly from your wallet
          </div>
        </div>
        <div className="ml-40 mt-8">
          <Button value="Launch Exchange" />
        </div>

        <div className="flex justify-center items-center flex-wrap">
          {project.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              amount={project.amount}
              image={project.image}
            />
          ))}
        </div>

        <div className="border-t border-gray-500 mt-20 flex justify-center items-center flex-wrap">
          {project2.map((project2, index) => (
            <Card
              key={index}
              name={project2.name}
              description={project2.description}
              image={project2.image}
            />
          ))}
        </div>

        <div className="text-4xl  mt-20 ml-40 font-bold ">
          <h1>Two tokens create </h1>
          <div>our ecosystem</div>
        </div>

        <div className=" mt-2 flex justify-center items-center flex-wrap mb-12">
          {project3.map((BCard, index) => (
            <Card2
              key={index}
              name={BCard.name}
              description={BCard.description}
              image={BCard.image}
              amount={BCard.amount}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Home;
