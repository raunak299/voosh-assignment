import styles from "./Page2.module.css";
import formBackground from "../assets/formBackground.webp";
import { useRef, useState } from "react";

function Page2() {
  const emailref = useRef();
  const passwordref = useRef();
  const [login, setLogin] = useState(false);

  const registerUser = (e) => {
    e.preventDefault();
    if (
      emailref.current.value.length === 0 ||
      passwordref.current.value.length === 0
    ) {
      alert("No field can be empty !!");
      return;
    }
    localStorage.setItem("email", emailref.current.value);
    localStorage.setItem("password", passwordref.current.value);
    setLogin(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    setLogin(false);
  };

  return (
    <div
      id="page-2"
      className={styles["page2-container"]}
      style={{ backgroundImage: `url(${formBackground})` }}
    >
      {!login && <h2>Book A Demo Now</h2>}
      {!login && (
        <form onSubmit={registerUser}>
          <div>
            <label>
              Email <span> *</span>
            </label>
            <input
              type="text"
              placeholder="Ex. mail@website.com"
              ref={emailref}
            />
          </div>
          <div>
            <label>
              Password <span> *</span>
            </label>
            <input type="password" ref={passwordref} autoComplete="off" />
          </div>
          <div>{!login && <button>Book Demo</button>}</div>
        </form>
      )}

      {login && <h2>{localStorage.getItem("email")}</h2>}
      {login && (
        <button onClick={logoutHandler} className={styles["logout-btn"]}>
          Logout
        </button>
      )}
    </div>
  );
}

export default Page2;
