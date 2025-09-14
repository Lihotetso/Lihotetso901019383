import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductFile";
import Customer from "./components/Customer";
import Report from "./components/Report";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

// Local API (only works in development)
const API_URL = "http://localhost:4000/api/products";

function App() {
  const [products, setProducts] = useState([
    // ✅ Mock data for GitHub Pages
    { id: 1, name: "Coffee", category: "Beverage", price: 20, quantity: 10 },
    { id: 2, name: "Sandwich", category: "Food", price: 35, quantity: 5 },
  ]);

  const [activeSection, setActiveSection] = useState("Dashboard");

  // ✅ Fetch only when running locally
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      fetch(API_URL)
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch(() => console.warn("Could not fetch API, using mock data"));
    }
  }, []);

  const addProduct = (product) => {
    setProducts((products) => [
      ...products,
      {
        ...product,
        id: products.length ? Math.max(...products.map((p) => p.id)) + 1 : 1,
      },
    ]);
  };

  const updateProduct = (id, updated) => {
    setProducts((products) =>
      products.map((p) => (p.id === id ? { ...p, ...updated } : p))
    );
  };

  const deleteProduct = (id) => {
    setProducts((products) => products.filter((p) => p.id !== id));
  };

  const handleDashboardNav = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="main-layout">
      <Sidebar active={activeSection} onSelect={setActiveSection} />
      <main className="content">
        <h1 className="system-title">Wings Cafe Inventory System</h1>

        {activeSection === "Dashboard" && (
          <Dashboard onNavigate={handleDashboardNav} />
        )}

        {activeSection === "Inventory" && (
          <section className="product-management">
            <h2>Inventory</h2>
            <ProductForm addProduct={addProduct} />
            <ProductList
              products={products}
              updateProduct={updateProduct}
              deleteProduct={deleteProduct}
            />
          </section>
        )}

        {activeSection === "Sales" && (
          <section className="product-management">
            <h2>Sales</h2>
            <ProductForm addProduct={addProduct} />
            <ProductList
              products={products}
              updateProduct={updateProduct}
              deleteProduct={deleteProduct}
              sellProduct={(id, currentQty) => {
                const qty = Number(currentQty);
                if (qty > 1) {
                  const prod = products.find((p) => p.id === id);
                  updateProduct(id, { quantity: qty - 1 });
                } else {
                  deleteProduct(id);
                }
              }}
              showSellButton={true}
            />
          </section>
        )}

        {activeSection === "Customers" && (
          <section style={{ marginTop: 32 }}>
            <h2>Customers</h2>
            <Customer />
          </section>
        )}

        {activeSection === "Reports" && (
          <section style={{ marginTop: 32 }}>
            <h2>Reports</h2>
            <Report products={products} />
          </section>
        )}

        {activeSection === "AboutUs" && (
          <section style={{ marginTop: 32 }}>
            <AboutUs />
          </section>
        )}

        {activeSection === "ContactUs" && (
          <section style={{ marginTop: 32 }}>
            <ContactUs />
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
