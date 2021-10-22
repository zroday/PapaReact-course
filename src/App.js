import React from "react";
import Product from "./Product";

function App() {
  return (
    <div>
      <h1>Welcome to my App</h1>
      <Product
        name="Amazon Echo"
        description="Your AI assistant"
        price={59.99}
      />
      <Product
        name="Iphone 12 Pro max"
        description="The best iphone"
        price={1200}
      />
      <Product
        name="Macbook Pro"
        description="Your Favourite Computer"
        price={2500}
      />
      <Product
        name="Google Home"
        description="Your AI assistant"
        price={59.99}
      />
      {/* Product name,description,price */}
      {/* Product name,description,price */}
      {/* Product name,description,price */}
      {/* Product name,description,price */}
    </div>
  );
}

export default App;
