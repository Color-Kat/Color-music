import {RiCloseLine} from "react-icons/ri";

import {logo} from '@assets/index';
import {links} from '@assets/constants';
import {useState} from "react";
import {NavLink} from "react-router-dom";

const NavLinks = ({handleClick}: () => void) => (
    <div className="mt-10">
        {links.map(link => (
            <NavLink
                key={link.name}
                to={link.to}

                className={({isActive}) => (`flex flex-row justify-start items-center my-8 text-lg font-medium hover:text-violet-400 ${isActive ? 'text-[#8b65ea]' : 'text-violet-300'}`)}
                onClick={() => handleClick && handleClick()}
            >
                <link.icon className="w-6 h-6 mr-2"/>
                {link.name}
            </NavLink>
        ))}
    </div>
);

const Sidebar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
                <img src={logo} alt="logo" className="w-full h-14 object-contain"/>

                <NavLinks />
            </div>
        </>
    );
}

export default Sidebar;
