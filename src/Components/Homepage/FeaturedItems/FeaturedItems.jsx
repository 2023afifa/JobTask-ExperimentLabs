import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FeaturedItem from "./FeaturedItem";

const FeaturedItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://homedecorserver.vercel.app/decoritems")
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    const featuredItems = items.slice(0, 4);

    return (
        <div className="my-14">
            <h3 className="text-3xl font-medium mb-5">Our Items</h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-5'>
                {
                    featuredItems?.map((item) => <FeaturedItem key={item.id} item={item}></FeaturedItem>)
                }
            </div>
            <div className='text-center'>
                <Link to="/items">
                    <button className='bg-slate-800 text-slate-200 px-5 py-2 rounded'>See All Items</button>
                </Link>
            </div>
        </div>
    );
};

export default FeaturedItems;