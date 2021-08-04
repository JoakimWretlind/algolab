import React, { useState } from 'react';
import { GlobalStyle } from '../../globalStyle';
import { NavbarData } from './NavbarData';
import { NavbarMain, NavToggle, Nav, NavItem } from './NavbarStyling'

const Sidebar = () => {
    const [navbar, setNavbar] = useState(false);

    return (
        <>
            <NavbarMain>
                <GlobalStyle />
                <NavToggle to="#" onClick={() => setNavbar(!navbar)}>
                    open
                </NavToggle>
            </NavbarMain>
            <Nav navbar={navbar}>
                <NavToggle to="#" onClick={() => setNavbar(!navbar)}>
                    close
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