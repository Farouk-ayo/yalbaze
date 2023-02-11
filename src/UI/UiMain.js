import classes from "./Ui.module.css";
import star1 from "../assets/Star 1.png";
import star2 from "../assets/Star 2.png";
import star3 from "../assets/Star 3.png";
import star4 from "../assets/Star 4.png";

import arrow from "../assets/Vectorline.png";

const UiMain = () => {
  return (
    <section className={classes.Ui}>
      <div className={classes.firstCircle}></div>
      <div className={classes.secondCircle}></div>
      <div className={classes.thirdCircle}></div>
      <div className={classes.firstStar}>
        <img src={star2} alt="" />
      </div>
      <div className={classes.secondStar}>
        <img src={star3} alt="" />
      </div>
      <div className={classes.thirdStar}>
        <img src={star4} alt="" />
      </div>
      <div className={classes.fourthStar}>
        <img src={star1} alt="" />
      </div>
      <div className={classes.arrow}>
        <img src={arrow} alt="" />
      </div>
    </section>
  );
};

export default UiMain;
