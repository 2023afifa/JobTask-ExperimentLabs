import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DecorItem = ({ item }) => {
    const { name, price, type, photo } = item;
    const { user } = useContext(AuthContext);

    const handleAddToCart = (photo, name, price, type) => {
        if (!user) {
            toast.error("Please login first");
            return;
        }
        const username = user.displayName;
        const useremail = user.email;
        const userphoto = user.photoURL;

        const newProduct = { name, type, price, photo, username, useremail, userphoto };
        console.log(newProduct);

        fetch("https://homedecorserver.vercel.app/carts", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast("Added to cart successfully");
                }
            })
            .catch(error => {
                console.error("Error adding to cart:", error);
                toast.error("Failed to add to cart");
            });
    }

    return (
        <div>
            <div className="card rounded-none shadow-md mx-auto">
                <figure><img className="h-60 w-80" src={photo} alt="Decor" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{name}</h2>
                    <div className="flex justify-between items-end">
                        <div className="text-lg">
                            <p>{type}</p>
                            <p>$ {price}</p>
                        </div>
                        <button onClick={() => handleAddToCart(photo, name, price, type)}><FaShoppingCart className="text-2xl" /></button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default DecorItem;