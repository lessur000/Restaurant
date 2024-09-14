import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ItemProvider from "./components/Home/ItemContext.jsx";
import SidebarProvider from "./components/Menu/SidebarContext.jsx";
import CartProvider from "./components/Menu/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SidebarProvider>
    <CartProvider>
      <ItemProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ItemProvider>
    </CartProvider>
  </SidebarProvider>
);
