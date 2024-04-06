import "./footer.css";
import FooterLogo from "../../assets/logos/FooterLogo";

const Footer = () => {
  return (
    <div className="footer white-color">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
        className="light-color"
      >
        <div style={{ width: "120px", height: "90px" }}>
          <FooterLogo />
        </div>
        <div style={{ width: "250px" }}>
          <p>
            Indiqube Sigma No.3/B, Nexus Koramangala 3rd Block SBI Colony,
            Koramangala, Bengaluru, Karnataka 560034
          </p>
          <p style={{ marginTop: "1rem" }}>
            Contact Us: <a href="tel: 080 68216821"> 080 68216821</a>
          </p>
          <p>
            Email: <a href="mailto: care@uni.club">care@uni.club</a>
          </p>
        </div>
      </div>

      {/*  */}
      <div className="links">
        <div>
          <a href="https://www.sbmbank.co.in/aboutus/grievance-redressal-mechanism.php">
            <u>Grievance Redressal Mechanism</u> - SBM Bank India
          </a>
        </div>
        <div>
          <a
            href="https://www.uni.cards/docs/Uni_CSR_Policy_v1_Sep22.pdf"
            about="_blank"
          >
            <u>CSR Policy</u>
          </a>
        </div>
      </div>
      <div className="spacer-gradient"></div>

      <div className="connect">
        <div className="social-connect">
          <span>Instagram</span>
          <span>LinkedIn</span>
          <span>Twitter</span>
          <span>Facebook</span>
          <span>Careers</span>
        </div>
        <div className="partner-connect">
          <span className="vertical-line">Credit Card KFS</span>
          <span className="vertical-line" style={{ paddingLeft: "0.5rem" }}>
            Credit Card MITCs
          </span>
          <span className="vertical-line" style={{ paddingLeft: "0.5rem" }}>
            Uni T&Cs
          </span>
          <span style={{ paddingLeft: "0.5rem" }}>Lending Partner TnCs</span>
        </div>
      </div>

      {/*  */}
    </div>
  );
};

export default Footer;
