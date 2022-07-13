import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
background: #f17f42;
height: 80px;
display: flex;
justify-content: space-between;
`
export const NavLink = styled(Link)`
color: #fff;
display:flex;
align-items: center;
text-decoration: none;
padding: 0 10px;
height: 100%;
cursor: pointer;

&.active {
    color: #3bd88a;
}
@media screen and (max-width: 768px){
    color: #fff;
    justify-content: center;
    &.active{
        color: #177d38;
    }
}
`
export const Bars =styled(FaBars)`
display: none;
color: #000;

@media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate (-100%, 75%);
    font-size: 50px;
    cursor: pointer;
}
`
export const NavMenu = styled.div`
display: flex;
align-items: center;

@media screen and (max-width: 768px){
    position: absolute;
    background: #f17f42;
    top: ${({open}) => (open ? "80px" : "-480px")};
    width: 100%;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: all 0.2s ease-in-out;
    font-size: 26px
}
`
export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-left: 200px;
margin-right:20px;

@media screen and (max-width: 768px){
    align-items: center;
    justify-content: center;
    margin: 0;
}
`
export const NavBtnLink = styled(Link)`
border-radius: 25px;
background: #3bd88a;
padding: 10px 20px;
color: #fff;
border: none;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #177d38;
}
@media screen and (max-width: 768px){
    justify-content: center;
    align-items: center;
    padding: 0;
}
`