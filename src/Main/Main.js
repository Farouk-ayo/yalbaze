import Header from "../Header/Header";
import MainPage from "./MainPage";
import classes from "./Main.module.css"
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <section className={classes.main}>
      <Header />
      <MainPage />
      <Footer/>
    </section>
  );
};

export default Main;
