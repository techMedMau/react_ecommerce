import React, { useContext, useState } from "react";
import { ProductContext } from '../contexts/ProductContext'
import Product from "../components/Product";
import Search from "../components/Search";

const Home = () => {
    const { products } = useContext(ProductContext)
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    return <div>
        <section className="py-16">
            <div className="container mx-auto">
                <Search onSearch={handleSearch} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
                    {products.filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase())).map(product => { return (<Product product={product} key={product.id} />) })}
                </div>
            </div>
        </section>
    </div>;
};

export default Home;