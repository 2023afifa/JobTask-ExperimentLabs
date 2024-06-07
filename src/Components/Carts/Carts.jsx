import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { MdDeleteOutline } from "react-icons/md";
import Navbar from "../Homepage/Navbar/Navbar";
import Footer from "../Homepage/Footer/Footer";

const Carts = () => {
    const cart = useLoaderData();
    console.log(cart);
    const { user } = useContext(AuthContext);
    const personCart = cart.filter(c => c.useremail === user.email);
    const [items, setItems] = useState(personCart);

    const totalPrice = () => {
        const sum = items.reduce((acc, item) => {
            const price = parseFloat(item.price);
            return acc + price;
        }, 0);
        return sum.toFixed(2);
    };

    const total = totalPrice();

    const handleDelete = id => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'rgb(239 68 68)',
            cancelButtonColor: 'rgb(0 0 0)',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://homedecorserver.vercel.app/carts/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your cart has been deleted.',
                                'success'
                            )
                            const remaining = items.filter(i => i._id !== id);
                            setItems(remaining);
                        }
                    })
            }
        })
    }


    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-screen">
                <h2 className="text-3xl text-center text-slate-800 font-semibold mb-5">All Items</h2>
                <h3 className="text-xl font-bold mb-3">Total Price: {total}</h3>
                {
                    personCart.length === 0 ?
                        <>
                            <h3 className="text-center text-3xl text-slate-500 font-medium italic mb-20">Your Cart Is Empty</h3>
                        </>
                        :
                        <div className="overflow-x-auto">
                            <table className="table table-zebra">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Price</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        items.map((item, index) => <tr key={item._id}>
                                            <th>{index + 1}</th>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.photo} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <td>{item.name}</td>
                                            <td>{item.type}</td>
                                            <td>{item.price}</td>
                                            <td>
                                                {
                                                    <MdDeleteOutline onClick={() => handleDelete(item._id)} className="text-2xl text-red-500" />
                                                }
                                            </td>
                                        </tr>)
                                    }

                                </tbody>
                            </table>
                        </div>
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Carts;