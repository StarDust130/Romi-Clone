import logo from "../assets/logo.png";


const Footer = () => {
  return (
    <footer className="bg-transparent mb-10 text-white text-center py-6 cursor-pointer h-40  border-t border-gray-500 ">
      <a href="#nav">
        <img src={logo} alt="logo" className="mx-auto h-20" />
      </a>
      <div className="flex justify-center my-4 gap-5">
        <img
          src="https://img.icons8.com/color/48/twitter.png"
          alt="twitter"
          className="icon hover:opacity-70"
        />
        <img
          src="https://img.icons8.com/color/48/medium-monogram.png"
          alt="medium-monogram"
          className="icon hover:opacity-70"
        />
        <img
          src="https://img.icons8.com/color/48/discord-new-logo.png"
          alt="discord-new-logo"
          className="icon hover:opacity-70"
        />
        <img
          src="https://img.icons8.com/3d-fluency/48/github.png"
          alt="github"
          className="icon hover:opacity-70"
        />
        <img
          src="https://img.icons8.com/color/48/telegram-app--v1.png"
          alt="telegram-app--v1"
          className="icon hover:opacity-70"
        />
      </div>
      <div className="flex justify-center mt-2 mb-8" >
        <p className="mx-2 hover:text-gray-500">Terms and Conditions</p>
        <p className="mx-2 hover:text-gray-500 cursor-pointer">
          Referral Terms
        </p>
        <p className="mx-2 hover:text-gray-500">Media Kit</p>
      </div>
    </footer>
  );
};

export default Footer;
