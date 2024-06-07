import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import Navbar from "../Homepage/Navbar/Navbar";
import Footer from "../Homepage/Footer/Footer";


const Signup = () => {

    const { createUser } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;
        console.log(name, photo, email, password);

        setErrorMessage("");

        if (password.length < 6) {
            setErrorMessage("Password should be at least 6 characters");
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                navigate("/");

                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo,
                })
                    .then(() => {
                        console.log("Profile updated");
                    })
                    .catch()
                const user = { email, name, photo };
                fetch("https://homedecorserver.vercel.app/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            console.log("User added to database");
                        }
                    })
            })

            .catch(error => {
                console.error(error);
                setErrorMessage(error.message);
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="card max-w-xl shadow-xl bg-slate-300 my-10 mx-auto rounded-sm">
                <h2 className="text-center text-3xl text-slate-700 font-bold pt-10">Register Here</h2>
                <p className="text-center">If you already have an account <Link to="/login"><span className="text-blue-700 font-semibold">Login</span></Link> here</p>
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered rounded-sm" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered rounded-sm" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered rounded-sm" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" name="photo" placeholder="photo" className="input input-bordered rounded-sm" required />
                    </div>
                    {
                        errorMessage && <p className="text-center text-red-500">{errorMessage}</p>
                    }
                    <div className="mt-4 mx-auto">
                        <button className="btn normal-case border-none text-lg font-semibold bg-slate-600 text-white rounded-sm hover:bg-slate-500">Register</button>
                    </div>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Signup;