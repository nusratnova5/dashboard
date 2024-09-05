import React, { useState } from 'react';
import { BsQuestionCircle } from 'react-icons/bs';
import { FiCalendar, FiHome } from 'react-icons/fi';
import { MdBarChart, MdOutlineContentPaste } from 'react-icons/md';
import { PiCreditCardLight, PiNoteBlankLight, PiNotebook, PiUser } from 'react-icons/pi';
import { AiOutlineThunderbolt } from 'react-icons/ai';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/Images/logo.png";

const infoFirst = [
    {
        icon: <FiHome />,
        title: "Dashboard",
    },
    {
        icon: <MdBarChart className='text-dark-blue' />,
        title: "Users Management",
        to: ""
    },
    {
        icon: <FiCalendar />,
        title: "Calendar",
    },
    {
        icon: <MdOutlineContentPaste />,
        title: "Content Management",
        dropdownItems: [
            { label: "Posts" },
            { label: "Categories" },
            { label: "Tags" }
        ]
    }
];

const pages = [
    {
        icon: <PiUser />,
        title: "Profile",
        dropdownItems: [
            { label: "View Profile" },
            { label: "Edit Profile" },
            { label: "Settings" },
        ]
    },
    {
        icon: <PiNotebook />,
        title: "Invoice",
        dropdownItems: [
            { label: "View Invoices" },
            { label: "Create Invoice" },
        ]
    },
    {
        icon: <PiCreditCardLight />,
        title: "Billing",
    },
    {
        icon: <AiOutlineThunderbolt />,
        title: "Pricing Plans",
    },
    {
        icon: <BsQuestionCircle />,
        title: "FAQs",
    },
    {
        icon: <PiNoteBlankLight />,
        title: "Blank Page",
    },
];

const SideBar = ({ isOpenSidebar, toggleSidebar }) => {
    const [activeButton, setActiveButton] = useState(null);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const handleButtonClick = (title) => {
        setActiveButton(title);
    };
    const handleDropdownClick = (title) => {
        if (activeDropdown === title) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(title);
        }
    };

    return (
        <div className="drawer drawer-end lg:drawer-open z-20">
            <input checked={isOpenSidebar} type="checkbox" className="drawer-toggle" />
            <div className="drawer-side">
                <label onClick={toggleSidebar} aria-label="close sidebar" className="drawer-overlay"></label>
                <img src={logo} className='my-3' alt="Logo" />
                <h1 className='text-light-gray font-medium text-xs pt-3 px-10 uppercase'>Dashboard</h1>
                <ul className="menu pb-5 px-5 w-80 lg:min-h-full bg-white text-white">
                    {infoFirst.map((item, index) => (
                        <NavLink to={`/${item?.to}`} className='text-dark-gray bg-transparent'>
                        <li key={index} className='text-sm font-medium text-dark-gray'>
                            <button
                                onClick={() => item.dropdownItems ? handleDropdownClick(item.title) : null}
                                className='text-dark-gray bg-transparent p-3 flex justify-between w-full'>
                                <div className='flex items-center'>
                                    <span>{item.icon}</span>
                                    <span className='ml-2'>{item.title}</span>
                                </div>
                                {item.dropdownItems && (
                                    activeDropdown === item.title ? <IoIosArrowUp /> : <IoIosArrowDown />
                                )}
                            </button>
                            {item.dropdownItems && activeDropdown === item.title && (
                                <ul className="ml-4 mt-2 space-y-1">
                                    {item.dropdownItems.map((dropdownItem, idx) => (
                                        <li key={idx} className='flex justify-between items-center p-2 hover:bg-gray-200 rounded-md'>
                                            <span>{dropdownItem.label}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    </NavLink>
                        
                    ))}

                    <h1 className='text-light-gray font-medium text-xs pt-5 px-3 uppercase'>Pages</h1>

                    {pages.map((item, index) => (
                        <li key={index} className='text-sm font-medium text-dark-gray'>
                            <button
                                onClick={() => item.dropdownItems ? handleDropdownClick(item.title) : null}
                                className='text-dark-gray bg-transparent p-3 flex justify-between w-full'>
                                <div className='flex items-center'>
                                    <span>{item.icon}</span>
                                    <span className='ml-2'>{item.title}</span>
                                </div>
                                {item.dropdownItems && (
                                    // Use AiOutlineUp for open state and AiOutlineDown for closed state
                                    activeDropdown === item.title ? <IoIosArrowUp /> : <IoIosArrowDown />
                                )}
                            </button>
                            {item.dropdownItems && activeDropdown === item.title && (
                                <ul className="ml-4 mt-2 space-y-1">
                                    {item.dropdownItems.map((dropdownItem, idx) => (
                                        <li key={idx} className='flex justify-between items-center p-2 hover:bg-gray-200 rounded-md'>
                                            <span>{dropdownItem.label}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SideBar;
