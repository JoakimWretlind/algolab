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
    margin-top: 1.8rem;
    margin-left: ${({ navbar }) => (navbar ? '-3rem' : '0rem')};
    margin-bottom: 5rem;
    display: flex;
    justify-content: flex-end;   
    color: #fff;
    transition: .3s ease-out;
    @media screen and (min-width: 767px){
         margin-left: ${({ navbar }) => (navbar ? '20rem' : '80%')};
    }
`

export const Nav = styled.nav`
    position: fixed;
    padding: 0 3rem;
    top: 0;    
    left: ${({ navbar }) => (navbar ? '0' : '-32rem')};
    background: linear-gradient(-8deg, #333, #222);
    width: 30rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;    
    transition: .7s;
    z-index: 10;
    @media screen and (min-width: 767px){
        padding-left: 5rem;
    }
`

export const NavItem = styled(Link)`
    color: #ffffff;
    cursor: pointer;
    font-size: clamp(2rem, 3vw, 2.2rem);
    margin-bottom: 3rem; 
    padding-left: 1rem;
    border-left: .3rem solid transparent;
    transition: .25s ease-out;
    &:hover {
        color: #99D0E0;
        border-left: .3rem solid #99D0E0;
    }
`;