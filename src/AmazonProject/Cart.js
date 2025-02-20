import React from "react";
import "./Cart.css";  
import logo from "./assets/amazon-logo1.png";
import name from "./assets/amazoncart.png";

export default class Cart extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      cartCount: 0,
    };
  }
  render() {
    // Array of products with name, price, and image
    const products = [
      { name: "CPU Processor Chip", price: "₹3000", image: "https://5.imimg.com/data5/RN/JR/SE/SELLER-100976058/computer-processor-500x500.jpg" },
      { name: "CPU Cooling Fan ", price: "₹3,500", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQrSz_FEoTTCKGUxY9GW2lFMaNp5fSgDCk49ZKaK4f3S5WrfonLUuIO7UR5jBEuLDzUSDP7SShUTIBW7wbjViLCYgYVAtxoxbgTOmHsDziNfCQWgfp-0BF_&usqp=CAE" },
      { name: "MotherBoard", price: "₹11,400", image: "https://www.ezpzsolutions.in/wp-content/uploads/2023/01/NZXT-N7-B650E-White-Motherboard-1-300x300.jpg" },
      { name: "Graphic Card", price: "₹25,000", image: "https://www.ezpzsolutions.in/wp-content/uploads/2023/05/GB-RTX-4060TI-EAGLE-8GB-1-300x300.jpg" },
      { name: "Memory", price: "₹4,559", image: "https://www.ezpzsolutions.in/wp-content/uploads/2024/07/XPG-Gammix-D35-32GB-1-min-300x300.jpg" },
      { name: "SSD", price: "₹7,089", image: "https://www.ezpzsolutions.in/wp-content/uploads/2021/04/SAMSUNG-980-500GB-M.2-NVME-300x300.jpg" },
      { name: "Power Supply", price: "₹5,375", image: "https://www.ezpzsolutions.in/wp-content/uploads/2022/06/asus-tuf-gaming-650b-main-1-300x300.jpg" },
      { name: "Cabinet", price: "₹11,500", image: "https://www.ezpzsolutions.in/wp-content/uploads/2023/07/TT-CERES-500-TG-WHITE-1-300x300.jpg" },
      { name: "Monitor ", price: "₹37,599", image: "https://www.ezpzsolutions.in/wp-content/uploads/2021/12/GB-M28U-1-300x300.jpg" },
      { name: "Router", price: "₹2,000", image: "https://images.meesho.com/images/products/477166567/fly2y_1200.jpg" },
      { name: "Printer", price: "₹19,499", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRI--LnLp5WYIGxnlempUyEVmu6TH6QaYDe17nkVGU1PWfbYJMdXAjEQr5OQSQXLbrvbo9O_PdUlk3la5-oW31KKABf0c_YXjxnY0e0nCMxzoRnjrXpMU2i" },
      { name: "Keyboard", price: "₹2,500", image: " https://www.ezpzsolutions.in/wp-content/uploads/2021/02/RZ03-03390100-R3M1-1-300x300.jpg" },
      { name: "Mouse", price: "₹4,639", image: "https://www.ezpzsolutions.in/wp-content/uploads/2020/08/hx_mc002b_1-300x300.jpg" },
      { name: "Ports", price: "₹1,149", image: "https://m.media-amazon.com/images/I/61Q+pBh+4sL._AC._SR360,460.jpg" },
      { name: "HeadPhone", price: "₹4,500", image: "https://www.ezpzsolutions.in/wp-content/uploads/2021/11/Razer-Kraken-for-Console-1-300x300.jpg" },
    ];
    return (
             
        <div className="cart-main-container">
          {/* Header  */}
          <div className="cart-container">
            <img src={logo} style={{ height: "80px", width: "180px" }}/>
            <div className="search-container">
              <button type="text">Search</button>
            </div>
            <img src={name} style={{ height: "90px", width: "90px" }} alt="Cart Logo" className="cart-logo" />
          </div>

          {/* Product Section */}
          <h1 className="heading">CPU Parts</h1>
          <div className="product-container">
          {products.map((product, index) => (
            <div key={index} className="product-box">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}