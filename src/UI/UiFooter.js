import line from "../assets/Line 6.png";
import classes from "./Ui.module.css";
import blueStar1 from "../assets/Highlight 1.png";
import blueStar2 from "../assets/Highlight 2.png";
import star3 from "../assets/Star 3.png";
import star4 from "../assets/Star 4.png";
import star5 from "../assets/Star 5.png";

const UiFooter = () => {
  return (
    <section className={classes.Ui}>
      <div className={classes.fifthCircle}></div>
      <div className={classes.fifthStar}>
        <img src={star3} alt="" />
      </div>
      <div className={classes.sixthStar}>
        <img src={star5} alt="" />
      </div>
      <div className={classes.seventhStar}>
       
        <img src={star4} alt="" />
      </div>
      <div className={classes.blueStar1}>
        <img src={blueStar1} alt="" />{" "}
      </div>
      <div className={classes.blueStar2}>
        <img src={blueStar2} alt="" />{" "}
      </div>
      <div className={classes.line}>
        <img src={line} alt="" />{" "}
      </div>
    </section>
  );
};

export default UiFooter;
