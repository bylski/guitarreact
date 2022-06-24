import styles from "./uiStyles/Navbar.module.scss";
import Cart from "../Cart/CartBtn/CartBtn";
import ProductSearcher from "../InputForms/ProductSearcher";
import NavbarLogo from "./NavbarLogo";


const Navbar = () => {


  return (
    <div className={styles.navbar}>
      <NavbarLogo/>
      <ProductSearcher/>
      <Cart/>
    </div>
  );
};

export default Navbar;
