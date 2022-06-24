import styles from "./uiStyles/Header.module.scss";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerText}>
        <h1>
          Guitars for <span>Everyone!</span>
        </h1>
        <p>
          Huge collection of guitars and guitar equipment for beginner,
          intermediate <br /> and pro level players. All of that with low,
          reasonable prices. <br />
          <span> React</span> now and don't miss our weekly sales!
        </p>
      </div>
    </div>
  );
};

export default Header;
