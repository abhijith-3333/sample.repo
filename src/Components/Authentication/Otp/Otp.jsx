import { useRef } from "react";
import style from "./Otp.module.css";
import otpImg from "../../../assets/images/OTP_Group.png";

const Otp = () => {
  const inputRefs = useRef([]);

  const handleInput = (e, index) => {
    const value = e.target.value;
    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus(); // Move to next box
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && !e.target.value) {
      inputRefs.current[index - 1].focus(); // Move back on Backspace
    }
  };

  return (
    <div className={style.container}>
      <div className={style.leftSection}>
        <div className={style.imgBox}>
          <img src={otpImg} alt="OTP Illustration" />
        </div>
      </div>

      <div className={style.rightSection}>
        <div className={style.rightHead}>
          <p>Enter OTP</p>
        </div>

        <div className={style.rightMsg}>
          <p>We have sent you an access code via email</p>
          <p>for verification</p>
        </div>

        <div className={style.otpContainer}>
          {[...Array(4)].map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              className={style.otpBox}
              ref={(el) => (inputRefs.current[index] = el)}
              onInput={(e) => handleInput(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          ))}
        </div>

        <div className={style.verifyBtn}><button>verify</button></div>

        {/* <p> Didn't Receive the OTP?</p> */}

        <p> Resend Code </p>

        <p>Or</p>

        <p> Go with Password </p>


      </div>
    </div>
  );
};

export default Otp;
