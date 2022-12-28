import React from 'react'
import styled from 'styled-components'
import {NavLink} from "react-router-dom"
import logo from '../assets/sportSee_logo.svg'


const Head = styled.header ` 
    background: #020203;
    position:relative;
    display: flex;
	width: 100%;
	height: 91px;
	padding: 0 87px 0 29px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    z-index:1;
	img {
		width: 178px;
		margin-right: 149px;
		@media (max-width: 1024px) {
			margin-right: 60px;
		}
 	}
`
const Nav = styled.nav `
    width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	a {
		color: white;
		font-weight: 500;
		font-size: 1.5rem;
        text-decoration: none;
	}
	a:hover{
		color:red;
	}
`

/** render header component with navlink
 * @return {JSX}
 */
export default function Header() {
    return (  
        <Head>            
            <img src={logo} alt="sportSee" aria-label="logo sportSee"/>
            <Nav>
                <NavLink to='/'>Accueil</NavLink>
				<NavLink to='/profil'>Profil</NavLink>
				<NavLink to='/setting'>Réglages</NavLink>
				<NavLink to='/community'>Communauté</NavLink>
            </Nav>
        </Head>
    )
}

