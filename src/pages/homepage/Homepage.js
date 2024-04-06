import AdditionalRewards from "../../components/additionalRewards/AdditionalRewards";
import Intro from "../../components/intro/Intro";
import Why from "../../components/why/Why";

import GooglePlayStore from "../../assets/logos/GooglePlayStore";
import AppStore from "../../assets/logos/AppStore";

import "./homepage.css";
import Footer from "../../components/footer/Footer";

const Homepage = () => {
  return (
    <div className="overflow">
      <Intro />
      <Why />
      <AdditionalRewards />

      {/* commited secion */}
      <div className="commited-section white-color">
        <div className="width-1100">
          At Uni, we’re committed to{" "}
          <span class="uni-gradient-text">
            {" "}
            delivering an unmatched credit experience{" "}
          </span>{" "}
          for millions of Indians.
        </div>
        <div
          className="width-500"
          style={{
            marginTop: "24px",
            fontSize: "24px",
            lineHeight: "1.75rem",
          }}
        >
          On this mission, we’ve partnered with some of the best in the
          business.
        </div>
        <div style={{ marginTop: "96px" }}>
          <img src="https://www.uni.cards/images/SBM.svg" alt="sbm-img" />
        </div>
      </div>

      {/*  */}
      <div className="discontinued-section white-color">
        <div className="width-48-rem">
          Please note that to stay compliant with RBI guidelines, we have
          discontinued Pay 1/3rd and Pay 1/2 cards for the time being.
        </div>
      </div>

      {/*  */}
      <div className="download">
        <div>Download now to get started</div>
        <div className="download-places">
          <div className="font-18 store">
            <div className="download-places">
              <div style={{ width: "16px", height: "16px", marginTop: "2px" }}>
                <GooglePlayStore />
              </div>
              <span style={{ margin: "0px 16px" }}> Google Play</span>
            </div>
          </div>
          <div className="font-18 store">
            <div className="download-places">
              <div style={{ width: "16px", height: "16px", marginTop: "2px" }}>
                <AppStore />
              </div>
              <span style={{ margin: "0px 16px" }}> App Store</span>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="security">
        <p style={{ color: "rgba(141,141,149,1)" }}>
          Uni maintains the highest level of security standards
        </p>
        <div
          style={{
            fontSize: "18px",
            marginLeft: "1rem",
            height: "30px",
          }}
        >
          <img
            src="https://www.uni.cards/images/pcidss_cert.svg"
            alt="pci logo"
          />
        </div>
      </div>

      {/*  */}
      <Footer />
      {/*  */}
    </div>
  );
};

export default Homepage;
