// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ceylon Green Leafy</h1>
        <p>Supplying the freshest Leaves Worldwide</p>
        <nav>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#other">Other</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>
      </header>

      <section id="about" className="section about-section">
        <h2>About Us</h2>
        <p>
          At Green Leaves Export, we specialize in exporting a wide variety of 
          fresh, organic, and sustainable green leaves globally. Our mission is 
          to deliver high-quality products to every corner of the world.
        </p>
      </section>

       <section id="other" className="section other-section">
        <h2>Other</h2>
        <ul>
          <li>Farming</li>
          <li>Supply Chain</li>
        </ul>
      </section>

      <section id="products" className="section products-section">
        <h2>Our Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <h3>Spinach Leaves</h3>
            <p>Rich in iron and nutrients, our spinach leaves are always fresh.</p>
          </div>
          <div className="product-card">
            <h3>Mint Leaves</h3>
            <p>Perfect for teas and culinary uses, our mint leaves are aromatic.</p>
          </div>
          <div className="product-card">
            <h3>Basil Leaves</h3>
            <p>Organic basil leaves ideal for seasoning and sauces.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <h2>Contact Us</h2>
        <p>Get in touch for export inquiries and orders:</p>
        <ul>
          <li>Email: info@greenleavesexport.com</li>
          <li>Phone: +1 234 567 890</li>
        </ul>
      </section>

      <footer className="App-footer">
        <p>© 2024 Green Leaves Export. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

