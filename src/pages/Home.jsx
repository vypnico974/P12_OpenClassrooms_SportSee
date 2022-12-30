import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

/* home page style  */
const Main = styled.main`
margin-left: 100px;
height:33rem;
  a{
      display:flex;
      flex-direction:column;
      margin-top:1.5em;
      text-decoration:none;
      color:black;
  }
  a:hover{
    color:red;
  }
`
const Title = styled.h1` 
margin: 1em 0em;
`

/**
 * @function User
 * @export
 * @description render home page component who appears for the developement :
 *  choose between two users to simulate the app
 * @return {HTMLElement} component generated HTML
*/
export default function Home() {
  
  return ( 
    <Main>
      <Title>Veuillez sélectionner un utilisateur :</Title>
      <NavLink to="user/12"> 👨  L'utilisateur nr 12</NavLink>
      <NavLink to="user/18"> 👩  L'utilisateur nr 18</NavLink>
    </Main>
  )
}

