import React, {createContext, useState} from 'react'
import all_product from '../Components/Assets/all_product'

export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {}

    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0;

    }
    return cart;

}

const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart())
    
    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))

    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))

    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;

        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = all_product.find((products) => products.id === Number(item))
                totalAmount += (itemInfo.new_price * cartItems[item])
            }

        }
        return totalAmount

    }

    const getTotalCartItems = () => {
        let totalItem = 0

        for(const item in cartItems){
            if(cartItems[item] > 0){
                totalItem += cartItems[item]
            }

        }
        return totalItem

    }

    const scrollToTop = () => {
        const scrollToTopAnimation = () => {
          const currentPosition = window.scrollY;
    
          if (currentPosition > 0) {
            window.scrollTo(0, currentPosition - 150);
            requestAnimationFrame(scrollToTopAnimation);

          }

        }
        requestAnimationFrame(scrollToTopAnimation);

    }

    //Register and Login
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        password: ''
    });

    // ฟังก์ชันเมื่อมีการเปลี่ยนแปลงในฟอร์ม
    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

     // ฟังก์ชันเมื่อ Submit ฟอร์ม
    const handleSubmit = async (e) => {

        e.preventDefault();
        console.log(e.target.dataset.type)

        try {
            if(formData.checkbox && formData.fname && formData.lname && formData.email && formData.password){
                const response = await fetch(`http://localhost:5174/register`, {
                     method: "POST", // or 'PUT'
                    headers: {
                    "Content-Type": "application/json",
                },
                    body: JSON.stringify(formData)
                });

                const result = await response.json()

                if(result.status == 'OK'){
                    alert('Sig Up Success 😍')
                    window.location = '/login'
                }
                return;
            }

            else if(!formData.checkbox){
                throw new Error('no checkbox')
            }

            else if(!formData.fname || !formData.lname){
                throw new Error('no name')
            }

            else if(!formData.email){
                throw new Error('no email')
            }

            else if(!formData.password){
                throw new Error('no passaword')
            }

        } 

        catch (error) {

            if(error.message == 'no checkbox'){
                alert('กรุณาติ๊ก checkbox')
            }

            else if(error.message == 'no name'){
                alert('กรุณากรอก ชื่อและนาสกุล ให้ครบถ้วนด้วยครับ')
            }

            else if(error.message == 'no email'){
                alert('กรุณากรอก Email ด้วยครับ')
            }

            else if(error.message == 'no password'){
                alert('กรุณากรอก Password ด้วยครับ')
            }
            
            else{
                alert('เกิดข้อผิดพลาดในการ Sign Up')
            }

        }

    }

    
    const contextValue = {formData, handleChange, handleSubmit, scrollToTop, getTotalCartItems, getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart}

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider