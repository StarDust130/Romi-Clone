/* eslint-disable no-unused-vars */

import Home from "./pages/Home";
import Earn from "./pages/Earn";
import Dashboard from "./pages/Dashboard";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";

const project = [
  {
    name: "Total Trading Volume",
    amount: "$0",
    image: "https://zomi.finance/static/media/ic_trading.2c53815a.svg",
  },
  {
    name: "Open Interest",
    amount: "$0",
    image: "https://zomi.finance/static/media/ic_stats.f0a18011.svg",
  },
  {
    name: "Total Users",
    amount: "0",
    image: "https://zomi.finance/static/media/ic_totaluser.ae09b310.svg",
  },
];

const project2 = [
  {
    name: "Reduce Liquidation Risks",
    description:
      "An aggregate of high-quality price feeds determine when liquidations occur. This keeps positions safe from temporary wicks.",
    image: "https://zomi.finance/static/media/ic_liquidity.505b3f30.svg",
  },
  {
    name: "Save on Costs",
    description:
      "Save on CostsEnter and exit positions with minimal spread and zero price impact. Get the optimal price without incurring additional costs.",
    image: "https://zomi.finance/static/media/ic_cost.b4a729d3.svg",
  },
  {
    name: "Simple Swaps",
    description:
      " Simple SwapsOpen positions through a simple swap interface. Conveniently swap from any supported asset into the position of your choice.",
    image: "https://zomi.finance/static/media/ic_simpleswaps.2005009f.svg",
  },
];

const project3 = [
  {
    name: "$ZOMI",
    description:
      "$ZOMI is the utility and governance token. Accrues 30% of the platform's generated fees.Ethereum ",
    image:  img1 ,
    amount: "APR: 0.00%",
  },
  {
    name: "$ZLP",
    description:
      "$ZLP is the liquidity provider token. Accrues 70% of the platform's generated fees.Ethereum",
    image:  img2 ,
    amount: " APR: 1,665,184,654.19%",
  },
];

export { Home, Earn, Dashboard, NavBar, Footer, project, project2, project3 };
