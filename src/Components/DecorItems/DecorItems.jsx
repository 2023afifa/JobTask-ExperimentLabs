import { useEffect, useState } from "react";
import DecorItem from "./DecorItem";
import Navbar from "../Homepage/Navbar/Navbar";
import Footer from "../Homepage/Footer/Footer";

const DecorItems = () => {
    const [items, setItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        fetch("https://homedecorserver.vercel.app/decoritems")
            .then(res => res.json())
            .then(data => {
                setItems(data);
                setFilteredData(data);
            })
    }, [])


    useEffect(() => {
        const searchItem = items.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredData(searchItem);
    }, [searchTerm, items]);


    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-screen">
                <div className='flex justify-center items-center gap-5 mb-10'>
                    <h2 className='text-lg md:text-2xl'>Search Items Here</h2>
                    <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} type="text" placeholder="Type here" className="input input-bordered border-slate-700 w-full max-w-md" />
                </div>
                {
                    filteredData.length === 0 ?
                        <>
                            <h2 className='w-full text-center text-xl lg:pt-20'>No Items Found</h2>
                        </>
                        :
                        <div className='grid lg:grid-cols-4 gap-5 my-10'>
                            {
                                filteredData?.map((item) => <DecorItem key={item.id} item={item}></DecorItem>)
                            }
                        </div>
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DecorItems;