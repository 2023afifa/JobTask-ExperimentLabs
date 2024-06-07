import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div className='relative'>
                <img className='mx-auto rounded-2xl' src="https://i.ibb.co/rQK6SC1/banner.jpg" />
                <div className='absolute inset-0 bg-black bg-opacity-20 rounded-2xl'></div>
                <div className='absolute top-5 md:top-10 lg:top-40 max-w-xs md:max-w-md lg:max-w-lg ml-3 lg:ml-10'>
                    <h1 className='text-2xl md:text-4xl lg:text-6xl text-slate-200 font-semibold mb-5'>Transform Your Home into a Sanctuary of Style. Make Your Home a Haven with Our Exquisite Decor. </h1>
                    <Link to="/items">
                        <button className='bg-slate-200 text-lg font-medium px-2 py-1 md:px-5 md:py-2 rounded hidden md:block'>View Items</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;