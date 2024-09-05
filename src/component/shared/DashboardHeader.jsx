import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import avatar from '/images/user.png'
import { SlArrowDown } from 'react-icons/sl';
import { IoNotificationsOutline } from 'react-icons/io5';
import { HiMiniArrowRightEndOnRectangle } from 'react-icons/hi2';
import { Link, useNavigate } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
// import {flag} from '../../assets/Images/flag.png'

const DashboardHeader = ({ toggleSidebar }) => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await signOut();
        navigate('/login');
    };

    return (
        <div className="navbar bg-white fixed px-2 py-0 lg:px-10 z-10 top-0 left-0 lg:left-80 w-auto right-0">
            <div className="flex-1">
                <div className="hidden lg:inline-block dropdown dropdown-end">
                    <div className='flex justify-center items-center gap-2'>
                        <div className="relative w-full max-w-md mx-auto">
                            <input
                                type="text"
                                onInput={(e) => setInputValue(e.target.value)}
                                placeholder="Search"
                                className="w-full bg-gray-200 border border-gray-300 placeholder-gray-500 pl-12 pr-4 py-2 rounded-xl"
                            />
                            <BiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
                        </div>
                    </div>
                </div>
                <div className="lg:hidden flex-1 p-4">
                    <Link to={'/'} className="btn bg-transparent border-none shadow-none text-3xl text-sky-blue flex-nowrap">E-Therapists</Link>
                </div>
            </div>
            <div className="flex-none gap-2">
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label onClick={toggleSidebar} className="btn bg-transparent border-0 shadow-transparent drawer-button lg:hidden">
                        <FontAwesomeIcon icon={faBars} />
                    </label>

                </div>
                <div className='flex justify-center items-center gap-3 '>
                <select className="select max-w-xs">
                        <option disabled selected>Sort by </option>
                        <option>Homer</option>
                        <option>Marge</option>
                        <option>Bart</option>
                        <option>Lisa</option>
                        <option>Maggie</option>
                    </select>
                </div>

            </div>
        </div>
    );
};

export default DashboardHeader;