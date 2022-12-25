import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router'

import {getData} from '../utils/getData'

import UserInfo from '../components/UserInfo'
import KeyData from '../components/KeyData'
import BarChartActivity from '../components/BarChartActivity'

import styled from 'styled-components'

import caloriesIcon from '../assets/caloriesIcon.svg'
import proteinIcon from '../assets/proteinIcon.svg'
import fatIcon from '../assets/fatIcon.svg'
import carbsIcon from '../assets/carbsIcon.svg'

const Main = styled.main`
margin-left:80px;
@media screen and (max-width: 1300px) {
  margin-left:10px;
}
`

const Container = styled.div`
display:flex;
flex-direction: row;
  @media screen and (max-width: 1300px) {
    flex-direction: column;
  }
`

const ContainerLeft = styled.div`
width: 800px;
margin-top: 77px;
  @media screen and (max-width: 1300px) {
    width: 850px;
  }
`
const ContainerRight = styled.div`
width: 100px;
  @media screen and (max-width: 1300px) {
    width: 850px;
}
`

const AsideKeyData = styled.aside`
padding:0;
margin-top:75px;
width:300px;
@media screen and (max-width: 1300px) {
   display:flex;
   margin-top:25px;
   width:60%;
}
`

const ContainerKeyData = styled.div`
margin-left: 31px;
background: #FBFBFB;
box-shadow: 0px 2px 4px rgb(0 0 0 / 2%);
padding-left: 32px;
padding-top:15px;
border-radius: 5px;
margin-bottom:25px;
width: 258px;
height:124px;
}
`


/** render user page : the dashboard
 * @return {JSX}
 */
export default function User() {
   
   // console.log(getData("USER_MAIN_DATA",12))
  // console.log(getData("USER_ACTIVITY",12))
   const [UserMainData, setUserMainData] = useState([]);
   const [UserActivityData, setUserActivityData] = useState([]);
   const { id } = useParams()
   const idCurrent = parseInt(id)
   
   useEffect(() => {
    const data = async () => {
      const request = await getData("USER_MAIN_DATA",idCurrent)
      if (!request) console.log("data error")
     // console.log(request)
     setUserMainData(request)
    }
    data()  
 
    }, [idCurrent])

    useEffect(() => {
      const data = async () => {
        const request = await getData("USER_ACTIVITY",idCurrent)
        if (!request) console.log("data error")
       // console.log(request)
        setUserActivityData(request)
      }
      data()  
   
      }, [idCurrent])

  if ((!UserMainData) || (!UserActivityData))  return null

  if (UserActivityData.sessions){
    //format UserActivityData.sessions.day
    for (let i = 0 ; i < UserActivityData.sessions.length ; i ++){
      UserActivityData.sessions[i].day = i + 1
    }
  //  console.log('format day: ',UserActivityData.sessions)
  }


  return ( 
     <Main>
      { (UserMainData) && <UserInfo name={UserMainData.firstName} /> } 
      <Container>
        <ContainerLeft>
          {(UserActivityData.sessions) && (<BarChartActivity data={UserActivityData.sessions}/>)}
        </ContainerLeft>
        <ContainerRight>
          <AsideKeyData>
            <ContainerKeyData>
              <KeyData
                    icon={caloriesIcon}
                    info={`${UserMainData.calorieCount}kCal`}
                    text="Calories"
                />
            </ContainerKeyData>
            <ContainerKeyData>
            <KeyData
                  icon={proteinIcon}
                  info={`${UserMainData.proteinCount}g`}
                  text="Proteines"
                />
            </ContainerKeyData>
            <ContainerKeyData>
              <KeyData
                    icon={carbsIcon}
                    info={`${UserMainData.carbohydrateCount}g`}
                    text="Glucides"
                  />
            </ContainerKeyData>
            <ContainerKeyData>
              <KeyData
                    icon={fatIcon}
                    info={`${UserMainData.lipidCount}g`}
                    text="Lipides"
                  />
            </ContainerKeyData> 
          </AsideKeyData>
        </ContainerRight>
    </Container>
  </Main>
  )
}