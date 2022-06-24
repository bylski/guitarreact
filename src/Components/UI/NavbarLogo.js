import { Fragment } from "react";
import styles from "./uiStyles/Navbar.module.scss";

const NavbarLogo = () => {
  return (
    <div className={styles["navbar-logo"]}>
      <a style={{textDecoration: 'none'}}href="/"><h1>
        Guitar<span>React</span>
      </h1></a>
      <svg
                xmlns="http://www.w3.org/2000/svg" fill="#20cef9"
                viewBox="-2 0 16 16">
                <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z" />
                <path  d="M12 3v10h-1V3h1z" />
                <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z" />
                <path
                    d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z" />
            </svg>
    </div>
  );
};

export default NavbarLogo;
