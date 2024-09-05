import React, { useState } from 'react';
import { BsExclamationSquare, BsQuestionCircle } from 'react-icons/bs';
import { FiCalendar, FiHome, FiUsers } from 'react-icons/fi';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { LuSettings } from 'react-icons/lu';
import { MdBarChart, MdFavoriteBorder, MdOutlineContentPaste } from 'react-icons/md';
import { RiSearchLine } from 'react-icons/ri';
import { TiThLargeOutline } from 'react-icons/ti';
import { Link, NavLink } from 'react-router-dom';
import avatar from '/images/user.png'
import logo from "../../assets/Images/logo.png"
import { PiCreditCardLight, PiNoteBlankLight, PiNotebook, PiUser } from 'react-icons/pi';
import { AiOutlineThunderbolt } from 'react-icons/ai';

const infoFirst = [
    {
        icon: <FiHome/>,
        title: "Dashboard",
    },
    {
        icon: <MdBarChart/>,
        title: "Users Management",
    },
    {
        icon: <FiCalendar/>,
        title: "Calender",
    },
    {
        icon: <MdOutlineContentPaste/>,
        title: "Content Management",
    }
]
const pages = [
    {
        icon: <PiUser/>,
        title: "Profile",
    },
    {
        icon: <PiNotebook/>,
        title: "Invoice",
    },
    {
        icon: <PiCreditCardLight/>,
        title: "Billing",
    },
    {
        icon: <AiOutlineThunderbolt/>,
        title: "Pricing Plans",
    },
    {
        icon: <BsQuestionCircle/>,
        title: "FAQs",
    },
    {
        icon: <PiNoteBlankLight/>,
        title: "Blank Page",
    },
]

const SideBar = ({ isOpenSidebar, toggleSidebar }) => {
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (title) => {
        setActiveButton(title);
    };
    return (
        <div className="drawer drawer-end lg:drawer-open z-20">
            <input checked={isOpenSidebar} type="checkbox" className="drawer-toggle" />
            <div className="drawer-side">
                <label onClick={toggleSidebar} aria-label="close sidebar" className="drawer-overlay"></label>
                <img src={logo} className='my-3'></img>
                <h1 className='text-light-gray font-medium text-xs'>Dashboard</h1>
                <ul className="menu p-0 w-80 lg:min-h-full  bg-white text-white">
                    <li>
                        <div className='flex lg:hidden flex-col items-end bg-dark-blue gap-0 rounded-none'>
                            <img src={avatar} alt="User Avatar" className="rounded-full w-12 h-12" />
                            <h1 className='text-lg'>sagar soni</h1>
                            <p className='text-dark-black'>sagar@gmail.com</p>
                        </div>
                    </li>
                    {infoFirst?.map((item) => {
                        return <li className=''>
                            <NavLink to={`/${item?.to}`} className='text-dark-gray bg-transparent p-3'>
                                <p className=' texl-xl'>{item?.icon}</p>
                                <p className=''>{item?.title}</p>
                            </NavLink>
                        </li>
                    })}
                    <hr className='text-dark-gray m-3' />
                    {pages?.map((item) => {
                        return <li className=''>
                            <NavLink to={`/${item?.to}`} className='text-dark-gray bg-transparent p-3'>
                                <p className='texl-xl'>{item?.icon}</p>
                                <p className=''>{item?.title}</p>
                            </NavLink>
                        </li>
                    })}
                    <li>
                        <NavLink to='therapists'><p className='text-dark-gray'>Add therapists</p></NavLink>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default SideBar;