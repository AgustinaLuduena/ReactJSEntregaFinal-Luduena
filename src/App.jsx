import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
//Context
import { ProductProvider } from "./context/ProductContext";
// Pages
import HomePage from "./pages/HomePage/HomePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ShopPage from "./pages/ShopPage/ShopPage";
import ProductDetailPage from "./pages/DetailPage/ProductDetailPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";

const App = () => {
  return (
    <Router>
      <ProductProvider>
        <div className="App">
          <NavBar />
          <Header> 
            <div>
              <p style={ {marginTop : 15, fontSize: 25 }}>¡Próximamente nuevos ingresos!</p>
            </div>
          </Header>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/detail/:id" element={<ProductDetailPage />} />
            <Route path="/product-category/:category" element={<CategoryPage />} />
            <Route path="/product-category/:category/detail/:id" element={<ProductDetailPage />} />
          </Routes>
          <Footer />
        </div>
      </ProductProvider>
    </Router>

  );
};

export default App;