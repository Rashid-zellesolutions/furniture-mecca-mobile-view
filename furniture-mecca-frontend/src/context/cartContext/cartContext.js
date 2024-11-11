import { createContext, useState, useEffect, useContext } from "react";

const CartContext = createContext()

export const CartProvider = ({children}) => {

    // initialize cart from local storage
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    })

    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    // save cart to local storage when eer it changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
        // console.log("cart storage", cart)
    }, [cart])

    // Add Items To Cart
    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item.product.uid === product.uid);

            const updatedProduct = {
                ...product,
                totalPrice: product.reguler_price * (existingProduct ? existingProduct.quantity + 1 : 1)
            };
            console.log("updated product price", updatedProduct)

            if (existingProduct) {
                return prevCart.map(item =>
                    item.product.uid === product.uid
                        ? { ...item, quantity: item.quantity + 1, totalPrice: updatedProduct.totalPrice }
                        : item
                );
            } else {
                return [...prevCart, { product: updatedProduct, quantity: 1 }];
            }
        });
    };

    // Remove Cart Item
    const removeFromCart = (uid) => {
        setCart((prevCart) => prevCart.filter(item => item.product.uid !== uid));
    };

    // Increase Product Quantity
    const increamentQuantity = (uid) => {
        setCart((prevCart) => {

            // to insure prevCart is not undefine
            if(!prevCart) return [];

            return prevCart.map(item => 
                item.product.uid === uid ? {...item, quantity: item.quantity + 1} : item
            );
        });
    };

    // Decreament Product Quantity
    const decreamentQuantity = (uid) => {
        setCart((prevCart) => {
            const updateCart = prevCart.map(item => 
                item.product.uid === uid ? {...item, quantity: Math.max(item.quantity - 1, 1)} : item
            );
            return updateCart.filter(item => item.quantity > 0);
        })
    }
    // Calculate total orders price
    const calculateTotalPrice = () => {
        return cart.reduce((total, item) => {

            // Directly use priceTag as a number
            const price = item.product.reguler_price;
            return total + (price * item.quantity);
        }, 0);
    };

    return (
        <CartContext.Provider value={
            {
                cart, 
                addToCart, 
                removeFromCart, 
                increamentQuantity, 
                decreamentQuantity, 
                calculateTotalPrice,
            }
        }>
            {children}
        </CartContext.Provider>
    )

}

export const useCart = () => useContext(CartContext);