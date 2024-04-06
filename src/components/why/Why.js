import "./why.css";

const Why = () => {
  return (
    <div className="why">
      <div className="reason1">
        <span>Earn 1% assured cashback</span>
        <span className="light-font"> on your spends. Get </span>
        <span>5X more value than cashback </span>
        <span className="light-font">
          at the Uni Store. Enjoy round the clock
        </span>
        <span> Whatsapp support.</span>
        <span className="light-font"> And it's</span>
        <span> lifetime free</span>
        <span className="light-font">; no joining fee, no annual charges.</span>
      </div>

      <div className="down-arrow-parent">
        <div className="down-arrow">
          <img
            src="https://uni.cards/images/down_arrow.svg"
            loading="lazy"
            alt="down-arrow"
          />
        </div>
      </div>

      <div className="reason2">
        <div className="width-50">
          <span>1% assured cashback on your spends.</span>
          <span className="light-font">
            The more you spend, the more you earn.
          </span>
          <div className="light-font caution">
            Not applicable on fuel purchase, rent & wallet transfers, ATM
            withdrawals & international transactions.
          </div>
        </div>
        <div style={{ width: "450px", height: "450px" }}>
          <img
            width={"100%"}
            height={"100%"}
            style={{ objectFit: "contain" }}
            src="https://www.uni.cards/images/one_percent_cashback.png"
            alt="one-percent-cashbook"
          />
        </div>
      </div>

      <div className="reason2">
        <div style={{ width: "450px", height: "450px" }}>
          <img
            width={"100%"}
            height={"100%"}
            style={{ objectFit: "contain" }}
            src="https://www.uni.cards/images/five_x_rewards.png"
            alt="one-percent-cashbook"
          />
        </div>
        <div className="width-50">
          <span>5x more value than your cashback,</span>
          <span className="light-font"> only at the Uni Store.</span>
        </div>
      </div>

      <div className="reason2">
        <div className="width-50">
          <div>Zero Forex Markup.</div>
          <span className="light-font">
            Go international, without any fees.
          </span>
        </div>
        <div style={{ width: "450px", height: "450px" }}>
          <img
            width={"100%"}
            height={"100%"}
            style={{ objectFit: "contain" }}
            src="https://www.uni.cards/images/forex_globe.png"
            alt="one-percent-cashbook"
          />
        </div>
      </div>

      <div className="reason2" style={{ flexDirection: "column" }}>
        <div>
          <span>Lifetime </span>
          <span className="green-color">free. </span>
          <span>No joining fee.</span>
        </div>
        <div> No annual charges. </div>
      </div>

      {/*  */}
    </div>
  );
};

export default Why;
