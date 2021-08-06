import React, { useState } from 'react';
import { GlobalStyle } from '../../globalStyle';
import { NavbarData } from './NavbarData';
import * as FaIcons from 'react-icons/fa';
import { NavbarMain, NavToggle, Nav, NavItem } from './NavbarStyling'

const Sidebar = () => {
    const [navbar, setNavbar] = useState(false);

    return (
        <>
            <NavbarMain>
                <GlobalStyle />
                <NavToggle to="#" >
                    <FaIcons.FaBars onClick={() => setNavbar(!navbar)} />
                </NavToggle>
            </NavbarMain>
            <Nav navbar={navbar}>
                <NavToggle to="#">
                    <FaIcons.FaTimes onClick={() => setNavbar(!navbar)} />
                </NavToggle>
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