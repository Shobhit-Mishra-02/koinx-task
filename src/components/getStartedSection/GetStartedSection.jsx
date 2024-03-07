import girlWithPhone from "/public/girl_with_mobile.svg";
import { GoArrowRight } from "react-icons/go";
import { IoMdArrowDropup } from "react-icons/io";
import "./GetStartedSection.css";

const GetStartedSection = () => {
  return (
    <div className="getStartedSection">
      <div className="getStartedSec_first">
        <h2>
          Get Started with KoinX <br /> for Free
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          consectetur consequuntur error, sint vitae, in laboriosam possimus
        </p>
        <div className="getStartedSec_first__img">
          <img src={girlWithPhone} alt="girl with phone" />
        </div>

        <div className="getStartedSec_first__btn">
          <button>
            <span>Get Started for FREE </span>
            <span>
              <GoArrowRight />
            </span>
          </button>
        </div>
      </div>

      <div className="getStartedSec_second">
        <h2 className="getStartedSec_second__heading">Trending Coins (24h)</h2>
        <div className="getStartedSec_second__data">
          <div className="getStartedSec_second__coincard">
            <div>
              <img
                src="https://cryptologos.cc/logos/ethereum-eth-logo.png"
                alt="ethereum"
              />
              <p>Ethereum</p>
            </div>
            <span>
              <IoMdArrowDropup /> <span>8.21%</span>
            </span>
          </div>
        </div>
        <div className="getStartedSec_second__data">
          <div className="getStartedSec_second__coincard">
            <div>
              <img
                src="https://cryptologos.cc/logos/ethereum-eth-logo.png"
                alt="ethereum"
              />
              <p>Ethereum</p>
            </div>
            <span>
              <IoMdArrowDropup /> <span>8.21%</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedSection;
