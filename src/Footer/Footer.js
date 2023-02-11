import UiFooter from "../UI/UiFooter";
import classes from "./Footer.module.css";
import house from "../assets/house2.png";
import call from "../assets/call.png";

const Footer = () => {
  return (
    <section className={classes.Footer}>
      <UiFooter />
      <div className={classes.footerpage}>
        <div className={classes.firstSection}>
          <div className={classes.prior}>
            <h4>Priority Access</h4>
            <p>
              Get ready to revolutionize the way you interact with your
              customers and drive sales with Loyalbaze. Skip the waitlist and
              get exclusive priority access to LoyalBaze. Limited slots
              available. Please tell us a bit about your business and needs and
              of our consultants will be in touch Immediately!
            </p>
          </div>
          <form
            action="
       "
            className={classes.bookForm}
          >
            <h5>Book a Consultation with us</h5>
            <div className={classes.input}>
              <input type="text" placeholder="Enter your full name" />
              <input type="email" placeholder="Enter your work email" />
              <input type="number" placeholder="Mobile number" />
              <input type="text" placeholder="Company Name" />

              <select name="" id="" type="text" placeholder="Select Country">
                <option value="">Select Country</option>
                <option value="">Nigeria</option>
                <option value="">Denmark</option>
                <option value="">Finland</option>
              </select>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className={classes.mssg}
                placeholder="Drop a message....."
              ></textarea>
              <button>Send Request</button>
            </div>
          </form>
        </div>
        <hr />
        <footer>
          <div className={classes.address}>
            <img src={house} alt="" />
            <address>
              2nd Floor, The Garnet Building, KM14 Lekki Epe Expressway,Lagos,
              Nigeria.
            </address>
          </div>
          <p>Loyalbaze is almost here.</p>
          <div className={classes.phone}>
            <img src={call} alt="" />
            <p>+2349036189485</p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
