import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './Redux/Store/Store';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProductProvider } from './context/productsContext/productContext';
import { CartProvider } from './context/cartContext/cartContext';
import { NavigationProvider } from './context/BreadCrumbContext/NavigationContext';
import { OrderProvivder } from './context/orderContext/orderContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OrderProvivder>
    <NavigationProvider>
    <ProductProvider>
      <CartProvider>
        <Provider store={store}>
          <Router>
            <App />
          </Router>
      </Provider>
      </CartProvider>
    </ProductProvider>
    </NavigationProvider>
    </OrderProvivder>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
