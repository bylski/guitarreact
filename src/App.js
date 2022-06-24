
import "./srcStyles/App.scss";
import Navbar from "./Components/UI/Navbar";
import Header from "./Components/UI/Header";
import Products from "./Components/Products/Products";
import CartProvider from "./store/CartProvider";
import CartModal from "./Components/Cart/CartModal/CartModal";
import Footer from "./Components/UI/Footer";

function App() {
  return (
    <CartProvider>
      <CartModal />
      <Navbar />
      <Header />
      <Products />
      <Footer/>
    </CartProvider>
  );
}

export default App;
