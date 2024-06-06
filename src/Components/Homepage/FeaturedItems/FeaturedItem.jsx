const FeaturedItem = ({ item }) => {
    const { name, price, type, photo } = item;

    return (
        <div className="rounded-md border-2 border-slate-400 mx-auto">
            <figure><img className='h-60 w-80' src={photo} alt="Food" /></figure>
            <h2 className="text-xl text-center font-medium my-3">{name}</h2>
        </div>
    );
};

export default FeaturedItem;