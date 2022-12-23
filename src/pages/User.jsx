
import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router'

import {getData} from '../utils/getData'

import UserInfo from '../components/UserInfo'

import styled from 'styled-components'

const Main = styled.main`
margin-left:80px;
// margin-top:68px;
`


/** render user page : the dashboard
 * @return {JSX}
 */
export default function User() {
   
   // console.log(getData("USER_MAIN_DATA",12))
   const [UserMainData, setUserMainData] = useState([]);
   const { id } = useParams()
   const idCurrent = parseInt(id)
   
   useEffect(() => {
    const data = async () => {
      const request = await getData("USER_MAIN_DATA",idCurrent)
      if (!request) console.log("data error")
      console.log(request)
      setUserMainData(request)
    }
    data()      
    }, [idCurrent])
   if (!UserMainData) return null
    return ( 
        <Main>
            { (UserMainData) && <UserInfo name={UserMainData.firstName} /> }            
        </Main>
        
    )
}