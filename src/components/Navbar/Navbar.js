import React, { useState } from 'react';
import { GlobalStyle } from '../../globalStyle';
import { NavbarData } from './NavbarData';
import * as FaIcons from 'react-icons/fa';
import { NavbarMain, NavToggleOpen, NavToggleClose, Nav, NavItem } from './NavbarStyling'

const Sidebar = () => {
    const [navbar, setNavbar] = useState(false);

    return (
        <>
            <NavbarMain navbar={navbar}>
                <GlobalStyle />
                <NavToggleOpen >
                    <FaIcons.FaBars onClick={() => setNavbar(!navbar)} />
                </NavToggleOpen>
            </NavbarMain>
            <Nav navbar={navbar}>
                <NavToggleClose to="#">
                    <FaIcons.FaTimes onClick={() => setNavbar(!navbar)} />
                </NavToggleClose>
                {NavbarData.map((item, index) => {
                    return <NavItem to={item.path} key={index} onClick={() => setNavbar(!navbar)}>
                        {item.title}
                    </NavItem>
                })}
            </Nav>

        </>
    )
}

export default Sidebar