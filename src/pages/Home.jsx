import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
//import {getUserInfos}    from '../utils/ApiCall'
//import {mockUserInfos }  from '../utils/mocksCall'


const Main = styled.main`
margin-left: 100px;
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
 
/** render home page
 * @return {JSX}
 */
export default function Home() {
    //console.log(getUserInfos(18))
    // console.log(getUserActivity(12))
    // console.log(getUserAverageSessions(12))
    // console.log(getUserPerformance(12))
    //console.log(mockUserInfos(18))
    // console.log(mockUserActivity(12))
    // console.log(mockUserAverageSessions(12))
    // console.log(mockUserPerformance(12))   
    return ( 
        <Main>
            <Title>Veuillez sélectionner un utilisateur :</Title>
            <NavLink to="user/12"> 👨  L'utilisateur nr 12</NavLink>
            <NavLink to="user/18"> 👩  L'utilisateur nr 18</NavLink>
        </Main>
     )
}

