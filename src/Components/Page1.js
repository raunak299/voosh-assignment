import styles from "./Page1.module.css";
import backgroundpic from "../assets/background.webp";
import logo from "../assets/logo.webp";
import dashboard from "../assets/dashboard.webp";
import logo1 from "../assets/logo1.webp";
import logo2 from "../assets/logo2.webp";
import logo3 from "../assets/logo3.webp";
import logo4 from "../assets/logo4.webp";
import logo5 from "../assets/logo5.webp";
import logo6 from "../assets/logo6.webp";

function Page1() {
  return (
    <div
      className={styles["page1-container"]}
      style={{ backgroundImage: `url(${backgroundpic})` }}
    >
      <div className={styles["page1-details-container"]}>
        <img src={logo} className={styles["logo"]} alt="logo" />
        <div className={styles["page1-title-container"]}>
          <h1>
            Consolidate your restaurants' insights in one place. Unlock growth.
          </h1>
          <p>
            Your one stop solution to view mission-critical data and insights
            from all your locations in one place.
          </p>
          <a href="#page-2">Book Demo</a>
        </div>
        <div className={styles["companies-img-container"]}>
          <div>
            <img src={logo1} alt={logo1} />
            <img src={logo2} alt={logo2} />
            <img src={logo3} alt={logo3} />
          </div>
          <div>
            <img src={logo4} alt={logo4} />
            <img src={logo5} alt={logo5} />
            <img src={logo6} alt={logo6} />
          </div>
        </div>
      </div>
      <div className={styles["dashboard-img-container"]}>
        <img src={dashboard} alt="dashboard" />
      </div>
    </div>
  );
}

export default Page1;
