import { useNavigate } from "react-router-dom"; // Import useNavigate
import style from "./Signup.module.css";
import welcome from "../../../assets/images/amico.png";
import google from "../../../assets/icons/google.png";
import fb from "../../../assets/icons/facebook.png";
import apple from "../../../assets/icons/apple.png";
import flag from "../../../assets/icons//flag ind.png";
import Carousel from "../../Adds/AuthenticationCarousel/AuthenticationCarousel";
import close from "../../../assets/icons/close-filled.png";

const Signup = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className={style.container}>
      <div className={style.leftPanel}>
        <div className={style.loginBtn}>
          <button onClick={() => navigate("/login")}>Login</button> {/* Navigate to login page */}
        </div>

        <div className={style.imageBox}>
          <img src={welcome} alt="" />
        </div>

        <div className={style.textBox}>
          <p className={style.leftHeading}> Hi there,</p>

          <div className={style.content}>
            <p>Sign up now to explore amazing deals,</p>
            <p>unique products, and a vibrant shopping</p>
            <p>experience!</p>
          </div>
        </div>
      </div>

      <div className={style.rightPanel}>
        <div className={style.rightHeading}>
          <div className={style.Hbox}>
            <div className={style.closeIco}>
              <img src={close} alt="" />
            </div>
            <p>Create Your Account</p>
          </div>
        </div>

        <div className={style.inputBox}>
          <div className={style.nameBox}>
            <input type="text" placeholder="Name" className={style.input} />
          </div>
          <div className={style.pnoBox}>
            <img src={flag} alt="" />
            <p>+91</p>
            <div className={style.verticalLine}></div>
            <input
              type="text"
              placeholder="Phone number"
              className={style.input}
            />
          </div>
        </div>
        <div className={style.signupBtn}>
          <button>Signup</button>
        </div>

        <div className={style.divider}>
          <div className={style.dividerBox}>
            <div className={style.HrLine}></div>
            <p>Or Continue with</p>
            <div className={style.HrLine}></div>
          </div>
        </div>

        <div className={style.iconSet}>
          <img src={google} alt="" />
          <img src={fb} alt="" />
          <img src={apple} alt="" />
        </div>

        <div className={style.footer}>
          <div className={style.footerBox}>
            <p>By continuing, you agree to our</p>
            <p>
              <span>Terms of Service</span> · <span>Privacy Policy</span> ·{" "}
              <span>Content Policy</span>
            </p>
          </div>
        </div>

        <div className={style.carouselBox}>
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default Signup;
