import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import style from "./Login.module.css";
import loginImg from "../../../assets/images/login.png";
import google from "../../../assets/icons/google.png";
import fb from "../../../assets/icons/facebook.png";
import apple from "../../../assets/icons/apple.png";
import Carousel from "../../Adds/AuthenticationCarousel/AuthenticationCarousel";
import close from "../../../assets/icons/close-filled.png";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className={style.container}>
      <div className={style.leftPanel}>
        <div className={style.LeftHead}>
          <div className={style.Hbox}>
            <div className={style.closeIco}>
              <img src={close} alt="" />
            </div>
            <p>Login</p>
          </div>
        </div>

        <div className={style.inputBox}>
          <div className={style.nameBox}>
            <input
              type="text"
              placeholder="Phone/Email/Username"
              className={style.input}
            />
          </div>
          {showPassword && (
            <div className={`${style.passWordBox} ${style.passWordBoxVisible}`}>
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                className={style.input}
              />
              <div
                className={style.eyeIcoBox}
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? (
                  <IoMdEyeOff className={style.eyeIco} />
                ) : (
                  <IoMdEye className={style.eyeIco} />
                )}
              </div>
            </div>
          )}
        </div>
        <div className={style.LoginButton}>
          <button onClick={() => setShowPassword(true)}>Login</button>
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
              <span>Terms of Service</span> · <span>Privacy Policy</span> ·
              <span>Content Policy</span>
            </p>
          </div>
        </div>

        <div className={style.carouselBox}>
          <Carousel />
        </div>
      </div>

      <div className={style.rightPanel}>
        <div className={style.SignupButton}>
          <button onClick={() => navigate("/signup")}>Sign Up</button>
        </div>

        <div className={style.imageBox}>
          <img src={loginImg} alt="login" />
        </div>

        <div className={style.textBox}>
          <p className={style.RightHead}> Welcome Back!,</p>
          <div className={style.content}>
            <p>Log in to continue discovering deals and </p>
            <p>enjoying your shopping journey!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
