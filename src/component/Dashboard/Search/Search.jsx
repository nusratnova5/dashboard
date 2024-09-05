import React, { useState } from 'react';
import bgimg from '/images/bg-2.png'
import img from '/images/bg-1.png'
import { FaSearch } from 'react-icons/fa';
import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2';

const Search = ({ setSearchQuery }) => {
    const [inputValue, setInputValue] = useState('');
    const handleSearch = () => {
        setSearchQuery(inputValue)
    }
    return (
        <div className='bg-white mb-6'>
            <div className='grid grid-cols-1 lg:grid-cols-2 m-4 h-full p-5 gap-10 rounded-lg'>
                <div className="relative items-center p-1 hidden lg:flex">
                    <input
                        type="text"
                        onInput={(e) => setInputValue(e.target.value)}
                        placeholder="Search"
                        className="w-full bg-gray border-none placeholder-text-sm px-4 py-3 rounded-xl"
                    />
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                </div>
                <div className='flex'>
                    <button>Add</button>
                    <select className="select max-w-xs">
                        <option disabled selected>Sort by </option>
                        <option>Homer</option>
                        <option>Marge</option>
                        <option>Bart</option>
                        <option>Lisa</option>
                        <option>Maggie</option>
                    </select>
                    <select className="select max-w-xs">
                        <option disabled selected>Saved Search</option>
                        <option>Homer</option>
                        <option>Marge</option>
                        <option>Bart</option>
                        <option>Lisa</option>
                        <option>Maggie</option>
                    </select>
                    <HiOutlineAdjustmentsHorizontal/>
                </div>
            </div>
            <div className="relative items-center p-1 lg:hidden flex mx-9 pb-4">
                <input
                    type="text"
                    placeholder="ZIP code or city name"
                    className="w-full bg-gray border-none placeholder-text-sm px-4 py-3 rounded-xl"
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-dark-blue text-white text-lg font-semibold px-2 md:px-6 py-1 rounded-lg">
                    GO
                </button>
            </div>
        </div>
    );
};

export default Search;