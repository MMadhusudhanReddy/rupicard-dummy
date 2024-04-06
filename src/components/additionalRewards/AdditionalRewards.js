import "./additionalRewards.css";

const AdditionalRewards = () => {
  return (
    <div className="additional-rewards">
      <div className="additional1">
        <div className="width-50">
          <span className="white-color">
            We’ve all heard of instant groceries, now say hello to
          </span>
          <div className="uni-gradient"> instant credit.</div>
          <div
            className="white-color additional-secondary-font"
            style={{ marginTop: "1rem" }}
          >
            0% hassle, 100% paperless. Get your <br /> Uni Card instantly.
          </div>
        </div>
        <div className="width-50">
          <div className="mobile-img">
            <img
              src="https://www.uni.cards/images/nx-wave/app_screen_1.webp"
              loading="lazy"
              alt="mobile"
              width={"100%"}
              height={"100%"}
              style={{ objectFit: "contain", margin: "0px 60px" }}
            />
          </div>
        </div>
      </div>

      {/* additional reward 2 */}
      <div className="additional1">
        <div className="width-50">
          <span className="white-color">With Uni,</span>
          <br />
          <div className="uni-gradient">you’re always in control.</div>
          <div
            className="white-color additional-secondary-font"
            style={{ marginTop: "1rem" }}
          >
            Set your own payment limits. Choose how and where you spend. Lock
            and unlock your card. All right from the app.
          </div>
        </div>
        <div className="width-50">
          <div className="mobile-img">
            <img
              src="https://www.uni.cards/images/nx-wave/app_screen_2.webp"
              loading="lazy"
              alt="mobile"
              width={"100%"}
              height={"100%"}
              style={{ objectFit: "contain", margin: "0px 60px" }}
            />
          </div>
        </div>
      </div>

      {/* additional rewards 3 */}
      <div className="reward-box-section">
        <div className="reward-box">
          <div style={{ width: "112px", height: "112px", margin: "24px 0px" }}>
            <img
              src="https://www.uni.cards/images/nx-wave/whatsapp_bubble.webp"
              loading="lazy"
              alt="whatsapp-img"
              width={"100%"}
              height={"100%"}
            />
          </div>
          <div className="reward-content">
            <div className="white-color additional-secondary-font">
              Help, just a WhatsApp away. Anytime, Anyday.
            </div>
            <div
              className="white-color additional-secondary-font"
              style={{
                marginTop: "1rem",
                fontSize: "18px",
                lineHeight: "1.75rem",
              }}
            >
              During hectic work hours. On lazy sunday mornings. In the thick of
              night. Anytime.
            </div>
          </div>
        </div>
        <div className="reward-box">
          <div style={{ width: "112px", height: "112px", margin: "24px 0px" }}>
            <img
              src="https://www.uni.cards/images/nx-wave/rupee_bubble.webp"
              loading="lazy"
              alt="whatsapp-img"
              width={"100%"}
              height={"100%"}
            />
          </div>
          <div className="reward-content">
            <div className="white-color additional-secondary-font">
              No hidden charges, no last minute surprises.
            </div>
            <div
              className="white-color additional-secondary-font"
              style={{
                marginTop: "1rem",
                fontSize: "18px",
                lineHeight: "1.75rem",
              }}
            >
              100% money back guarantee if a charge is applied without your
              knowledge.
            </div>
          </div>
        </div>
        <div className="reward-box">
          <div style={{ width: "112px", height: "112px", margin: "24px 0px" }}>
            <img
              src="https://www.uni.cards/images/nx-wave/antivirus_bubble.webp"
              loading="lazy"
              alt="whatsapp-img"
              width={"100%"}
              height={"100%"}
            />
          </div>
          <div className="reward-content">
            <div className="white-color  additional-secondary-font">
              Super secure. Because we care about your money.
            </div>
            <div
              className="white-color additional-secondary-font"
              style={{
                marginTop: "1rem",
                fontSize: "18px",
                lineHeight: "6.5rem",
              }}
            >
              <img
                src="https://www.uni.cards/images/pcidss_cert.svg"
                alt="pci logo"
              />
            </div>
          </div>
        </div>
      </div>

      {/*  */}
    </div>
  );
};

export default AdditionalRewards;
