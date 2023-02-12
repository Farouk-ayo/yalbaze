import classes from "./Popup.module.css";

const Overlay = (props) => {
  return (
    <section onClick={props.onClick} className={classes.overlay}></section>
  );
};

export default Overlay;
