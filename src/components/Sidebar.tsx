import {RiCloseLine} from "react-icons/ri";

import {logo} from '@assets/index';
import {links} from '@assets/constants';
import React, {useCallback, useState} from "react";
import {NavLink} from "react-router-dom";
import {HiOutlineMenu} from "react-icons/hi";

const NavLinks = ({handleClick}: { handleClick: () => void }) => (
    <div className="mt-10">
        {links.map(link => (
            <NavLink
                key={link.name}
                to={link.to}
                className={({isActive}) => (`flex flex-row justify-start items-center my-8 text-lg font-medium md:hover:text-violet-400 ${isActive ? 'md:text-[#8b65ea] text-violet-100' : 'text-violet-300'}`)}
                onClick={() => handleClick && handleClick()}
                end
            >
                <link.icon className="w-6 h-6 mr-2"/>
                {link.name}
            </NavLink>
        ))}
    </div>
);

const Sidebar = React.memo(() => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <div className="relative md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
                <img src={logo} alt="logo" className="w-full h-14 object-contain"/>

                <NavLinks/>

                <h5 className="absolute bottom-4 text-sm text-center w-full -mx-6 text-gray-500">
                    Made By @ColorKat
                </h5>
            </div>

            <div
                className="absolute md:hidden block top-6 right-3 z-20"
                onClick={() => setMobileMenuOpen(prev => !prev)}
            >
                {mobileMenuOpen ? (
                    <RiCloseLine className="w-6 h-6 text-violet-200 mr-2"/>
                ) : <HiOutlineMenu className="w-6 h-6 text-violet-200 mr-2"/>}
            </div>

            <div
                className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483d8b] backdrop-blur-lg z-20 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}
            >
                <img src={logo} alt="logo" className="w-full h-14 object-contain"/>

                <NavLinks handleClick={() => setMobileMenuOpen(false)}/>

                <h5 className="absolute bottom-4 text-sm text-center w-full -mx-6 text-indigo-900">
                    Made By @ColorKat
                </h5>
            </div>
        </>
    );
});

export default Sidebar;
