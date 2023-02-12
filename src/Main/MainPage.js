import UiMain from "../UI/UiMain";
import classes from "./MainPage.module.css";
import profilecircle from "../assets/profilecircle.png";
import mail from "../assets/mail-01.png";
import { useState } from "react";

const MainPage = () => {
  const [animation, showAnimate] = useState(false);

  const animate = () => {
    showAnimate(!animation);
  };

  return (
    <section className={classes.MainPage}>
      <UiMain />
      <div className={classes.text}>
        <h4>
          Turn your best customers <br /> into <span>Loyal fans</span>
        </h4>
        <p>
          Loyalbaze, empowers businesses to offer digital, mobile-first loyalty
          programs to their customers. With our AI Powered platform, you can
          easily create and manage custom loyalty and rewards programs, track
          customer engagement, and gain valuable insights to improve your
          business. Sign up now to get early access.
        </p>
      </div>
      <form action="">
        <div className={classes.details}>
          <div>
            <img src={profilecircle} alt="" />
            <input type="text" placeholder="Tell us your name" />
          </div>
          <div>
            <img src={mail} alt="" />
            <input
              type="email"
              name="email"
              id=""
              placeholder="Enter your email address"
            />
          </div>
        </div>
        <button
          onClick={animate}
          className={animation ? classes.animate : null}
        >
          Get early access
        </button>
        <div className={classes.info}>
          <div className={classes.circles}>
            <span className={classes.g}>G</span>
            <span className={classes.o}>O</span>
            <span className={classes.u}>U</span>
            <span className={classes.m}>M</span>
          </div>
          <div>
            <p>+57 Joined</p>
          </div>
        </div>
      </form>
    </section>
  );
};

export default MainPage;
//
