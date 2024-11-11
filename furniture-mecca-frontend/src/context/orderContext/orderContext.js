import { createContext, useContext, useState, useEffect } from "react";

const OrderContext = createContext();

export const useOrder = () => useContext(OrderContext);

export const OrderProvivder = ({children}) => {
    const [order, setOrder] = useState(() => {
        const savedOrders = localStorage.getItem('order');
        return savedOrders ? JSON.parse(savedOrders)
        : {
            allProtected: false,
            protectedPrice: 0,
            products: [],
        }
    });

    const toggleProtectedProducts = (value) => {
        setOrder((prevOrder) => ({
            ...prevOrder, 
            allProtected: true,
            protectedPrice: value ? 199 : 0
        }))
    };

    const addProductsToOrder = (product) => {
        setOrder((prevOrder) => ({
            ...prevOrder,
            products: [...prevOrder.products, ...product.products],  // Append products
            allProtected: product.allProtected || prevOrder.allProtected,
            protectedPrice: product.protectedPrice || prevOrder.protectedPrice,
        }));
    };

      useEffect(() => {
        localStorage.setItem("order", JSON.stringify(order));
    }, [order]);

    return (
        <OrderContext.Provider value={{
            order,
            toggleProtectedProducts,
            addProductsToOrder
        }}>
            {children}
        </OrderContext.Provider>
    );
}