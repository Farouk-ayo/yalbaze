import UiMain from "../UI/UiMain";
import classes from "./MainPage.module.css";

const MainPage = () => {
  return (
    <section className={classes.MainPage}>
      <UiMain />
      <div className={classes.text}>
        <h2>
          Turn your best customers <br /> into <span>Loyal fans</span>
        </h2>
        <p>
          Loyalbaze, empowers businesses to offer digital, mobile-first loyalty
          programs to their customers. With our AI Powered platform, you can
          easily create and manage custom loyalty and rewards programs, track
          customer engagement, and gain valuable insights to improve your
          business. Sign up now to get early access.
        </p>
      </div>
      <form action=""></form>
    </section>
  );
};

export default MainPage;
//
