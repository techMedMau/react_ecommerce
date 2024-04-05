import React from 'react';

const Search = ({ onSearch }) => {
    return (
        <div className='mt-10 mb-5'>
            <input type="text" placeholder="Search..." onChange={(e) => onSearch(e.target.value)} className="h-14 w-96 pr-8 pl-5 rounded z-0 shadow outline-none focus:outline-slate-500"/>
        </div>
    );
};

export default Search;