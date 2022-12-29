import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
//pictures
import yogaIcon from '../assets/yoga.svg'
import bikeIcon from '../assets/bike.svg'
import swimIcon from '../assets/swim.svg'
import bodybuildingIcon from '../assets/bodybuilding.svg'

/* VerticalNav component style  */
const Container = styled.div `
    overflow: hidden;
    position:relative;
`

const Nav = styled.div `
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    width : 117px;
    height: 100%;
    background: #020203;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin:auto;
    width: 64px;
    position:absolute;
    top:10%;
    left:26px;
    a{
        display: flex;
        height: 64px;
        width: 64px;
        margin-bottom: 20px;
        cursor:default;
    }
    
`

const NavText = styled.p ` 
    transform: rotate(270deg);
    position: absolute;
    bottom: 100px;
    left:-50px;
    width:200px;
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 24px;
    color:white;
    margin:auto;
`

/**
 * @function VerticalNav
 * @export
 * @description rental vertical navigation component with navlink 
 * @return {HTMLElement} component generated HTML
*/
export default function VerticalNav() {
    return ( 
        <Container>
            <Nav>
                <Wrapper>
                    <NavLink to='#'><img src={yogaIcon} alt="icone yoga" /></NavLink>
                    <NavLink to='#'><img src={swimIcon} alt="icone natation" /></NavLink>
                    <NavLink to='#'><img src={bikeIcon} alt="icone vélo" /></NavLink>
                    <NavLink to='#'><img src={bodybuildingIcon} alt="icone musculation" /></NavLink>
                </Wrapper>
                <NavText>Copiryght, SportSee 2020</NavText>
            </Nav>
        </Container>
    )
}

