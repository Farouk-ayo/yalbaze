import classes from "./Popup.module.css";
import marked from "../assets/marked.png";

const Popup = () => {
  return (
    <section className={classes.Popup}>
      <img src={marked} alt="" />
      <div className={classes.text}>
        <h3>Congratulations</h3>
        <p>
          Great move! You're one step closer to getting your hands on the
          product. Please check your mail for more information.
        </p>
      </div>
    </section>
  );
};

export default Popup;
