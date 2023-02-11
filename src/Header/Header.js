import classes from "./Header.module.css";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <section className={classes.header}>
      <div className={classes.logo}>
        <img src={logo} alt="" />
      </div>

      <button>Get Priority Access</button>
    </section>
  );
};

export default Header;
