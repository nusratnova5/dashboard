import React, { useState } from 'react';
import { FaPlus, FaSearch } from 'react-icons/fa';
import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2';

const Search = ({ setSearchQuery }) => {
    const [inputValue, setInputValue] = useState('');
    const handleSearch = () => {
        setSearchQuery(inputValue)
    }
    return (
        <div className='mb-6'>
            <p className='mt-10 font-medium text-xl mb-2'>Users</p>
            <div className='grid grid-cols-1 lg:grid-cols-2 mb-5 h-full gap-10 rounded-lg'>
                <div className="relative items-center p-1 hidden lg:flex">
                    <input
                        type="text"
                        onInput={(e) => setInputValue(e.target.value)}
                        placeholder="Search"
                        className="w-full bg-white border-none pl-12 placeholder-text-sm px-4 py-3 rounded-xl"
                    />
                    <FaSearch className="absolute left-3 top-1/2  transform -translate-y-1/2 text-light-gray" />
                </div>
                <div className='flex gap-2 justify-center items-center'>
                    <button className='btn bg-dark-blue text-white px-3 rounded-md flex justify-center items-center gap-3'>Add User<FaPlus/>
                    </button>
                    <select className="select max-w-xs bg-transparent">
                        <option disabled selected>Sort by </option>
                        <option>Homer</option>
                        <option>Marge</option>
                        <option>Bart</option>
                        <option>Lisa</option>
                        <option>Maggie</option>
                    </select>
                    <select className="select max-w-xs bg-transparent">
                        <option disabled selected>Saved Search</option>
                        <option>Homer</option>
                        <option>Marge</option>
                        <option>Bart</option>
                        <option>Lisa</option>
                        <option>Maggie</option>
                    </select>
                    <HiOutlineAdjustmentsHorizontal className='text-2xl'/>
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