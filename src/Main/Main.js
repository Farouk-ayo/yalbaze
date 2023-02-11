import Header from "../Header/Header";
import MainPage from "./MainPage";
import classes from "./Main.module.css"

const Main = () => {
  return (
    <section className={classes.main}>
      <Header />
      <MainPage />
    </section>
  );
};

export default Main;
