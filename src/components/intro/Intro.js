import StarLogo from "../../assets/logos/StarLogo";
import uniLogo from "../../assets/logos/uni.svg";

import "./intro.css";

const Intro = () => {
  return (
    <div className="intro">
      <video
        id="background-video"
        autoPlay
        loop
        muted
        src="https://www.uni.cards/videos/nxt_wave_bg.mp4"
      ></video>
      <div className="intro-content">
        <div className="header">
          <div className="logo">
            <img src={uniLogo} alt="uni-logo" />
          </div>
          <a href="https://paychek.uni.club/" target="_blank" rel="noreferrer">
            {" "}
            Uni Paycheck
          </a>
        </div>
        <div className="content">
          <div className="left-section">
            <h1 className="header1">
              <strong>NX Wave.</strong>
              The next-gen credit card for those who love rewards.
            </h1>
            <div className="rewards">
              <p>
                1% Cashback
                <StarLogo />
                5x Rewards
                <StarLogo />
                Zero Forex Markup
              </p>
            </div>
            <div className="user-data-consent">
              <div className="user-data">
                <input placeholder="Enter Phone Number" type="number" />
                <div>icon</div>
                <button>Apply Now</button>
              </div>
              <div className="consent">
                <input type="checkbox" checked="" id="consent-msg" />
                <label for="consent-msg" className="consent-label">
                  You agree to be contacted by Uni Cards over Call, SMS, Email
                  or WhatsApp to guide you through your application.
                </label>
              </div>
            </div>
          </div>
          <img
            width={420}
            height={420}
            src="https://www.uni.cards/images/nx-wave/nx_wave_hero.png"
            alt="next wave hero png"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
