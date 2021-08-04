import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarMain = styled.div`
    position: fixed;
    margin-left: 8rem;
    z-index: 10;
`
export const NavToggle = styled(Link)`
    font-size: 3rem;
    width: min-content;
    margin: 3rem 0 0 0;
    margin-left: ${({ navbar }) => (navbar ? '10rem' : '60%')};
    display: flex;
    justify-content: flex-end;   
    color: green;
    transition: .3s ease-out;
`

export const Nav = styled.nav`
    position: fixed;
    padding: 0 3rem;
    top: 0;    
    left: ${({ navbar }) => (navbar ? '0' : '-32rem')};
    background: #333;    
    width: 30rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;    
    transition: .7s;
    z-index: 10;
`

export const NavItem = styled(Link)`
    color: #ffffff;
    cursor: pointer;
    margin-bottom: 3rem;    
`;