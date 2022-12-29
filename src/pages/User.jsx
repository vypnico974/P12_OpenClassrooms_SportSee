import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router'
import styled from 'styled-components'
//mock or axios data
import {getData} from '../utils/getData'
//components
import UserInfo from '../components/UserInfo'
import KeyData from '../components/keyData'
import BarChartActivity from '../components/BarChartActivity'
import LineChartSessions from '../components/LineChartSessions'
import RadarChartPerformance from '../components/RadarChartPerformance'
import RadialBarChartScore from '../components/RadialBarChartScore'
//page
import Error from './Error'
//pictures
import caloriesIcon from '../assets/caloriesIcon.svg'
import proteinIcon from '../assets/proteinIcon.svg'
import fatIcon from '../assets/fatIcon.svg'
import carbsIcon from '../assets/carbsIcon.svg'


/* user page style  */
const Main = styled.main`
margin-left:80px;
@media screen and (max-width: 1300px) {
  margin-left:10px;
}`

const Container = styled.div`
display:flex;
flex-direction: row;
  @media screen and (max-width: 1300px) {
    flex-direction: column;
  }
`
const ContainerLeft = styled.div`
width: 835px;
margin-top: 77px;
`
const ContainerLeftChart = styled.div`
display:flex;
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

/**
 * @function User
 * @export
 * @description component that render user page : the dashboard
 * @return {HTMLElement} component generated HTML
*/
export default function User() {
    
  const [userMainData, setUserMainData] = useState([])
  const [userActivityData, setUserActivityData] = useState([])
  const [userAverageSessionsData, setUserAverageSessionsData] = useState([])
  const [userPerformanceData, setUserPerformanceData] = useState([])
  const { id } = useParams()
  const idCurrent = parseInt(id)


  useEffect(() => {
    const data = async () => {
      const request = await getData("USER_MAIN_DATA",idCurrent)
      if (!request) console.log("data error")
    //  console.log(request)
      setUserMainData(request)
  }
  data()   
  }, [idCurrent])

  useEffect(() => {
    const data = async () => {
      const request = await getData("USER_ACTIVITY",idCurrent)
      if (!request) console.log("data error")
       //console.log(request)
        setUserActivityData(request)
    }
  data()    
  }, [idCurrent])

  useEffect(() => {
    const data = async () => {
      const request = await getData("USER_AVERAGE_SESSIONS",idCurrent)
      if (!request) console.log("data error")
      //  console.log(request)
        setUserAverageSessionsData(request)
    }
  data()    
  }, [idCurrent])

  useEffect(() => {
    const data = async () => {
      const request = await getData("USER_PERFORMANCE",idCurrent)
      if (!request) console.log("data error")
     // console.log(request)
      setUserPerformanceData(request)
    }
  data()    
  }, [idCurrent])


  if (userActivityData.sessions){
    //format UserActivityData.sessions.day
    for (let i = 0 ; i < userActivityData.sessions.length ; i ++){
      userActivityData.sessions[i].day = i + 1
    }
  }

  if (userAverageSessionsData && (userAverageSessionsData.sessions)){
    //To change the data in days and show the first letter of each day of the week
    const WeekDaysFirstLetter = ["L", "M", "M", "J", "V", "S", "D"]
    WeekDaysFirstLetter.forEach((kind, index) => {
      userAverageSessionsData.sessions[index].day = kind
    })
  }
    
  if ((userPerformanceData) && (userPerformanceData.data)) {       
    //To translate categories performance kinds in french
    const PerformanceKinds = 
        ["Cardio","Energie","Endurance","Force","vitesse","Intensité"]
    PerformanceKinds.forEach((kind, index) => {
      userPerformanceData.data[index].kind = kind
    })
  }    

  // if connection error, render the error page
  if ((userMainData.error) || (userActivityData.error) ||
    (userAverageSessionsData.error) || (userPerformanceData.error) ){
    return <Error />    
  }
      
  return ( 
    <Main>
      { ((userMainData) && (!userMainData.error)) &&
         <UserInfo name={userMainData.firstName} /> } 
      <Container>
        <ContainerLeft>
          <div>
            {((userActivityData.sessions) && (!userActivityData.error)) && 
             <BarChartActivity data={userActivityData.sessions}/>  } 

            <ContainerLeftChart>

              {((userAverageSessionsData.sessions) && 
              ((!userAverageSessionsData.error))) && 
              <LineChartSessions data={userAverageSessionsData.sessions}/> }

              {((userPerformanceData) && 
              ((!userPerformanceData.error)) && 
              (userAverageSessionsData.sessions)) && 
              <RadarChartPerformance data={userPerformanceData}/> }   

              {((userMainData) && 
              ((!userMainData.error))) && 
              <RadialBarChartScore data={userMainData.score}/> } 

            </ContainerLeftChart>            
          </div> 
        </ContainerLeft>

        <ContainerRight>
          
          {(userMainData.calorieCount !== undefined) &&
          (
          <div>
            <AsideKeyData>
              <ContainerKeyData>              
                <KeyData
                      icon={caloriesIcon}
                      info={`${userMainData.calorieCount}kCal`}
                      text="Calories"
                  />
              </ContainerKeyData>
              <ContainerKeyData>
                <KeyData
                  icon={proteinIcon}
                  info={`${userMainData.proteinCount}g`}
                  text="Proteines"
                />
              </ContainerKeyData>
              <ContainerKeyData>
              <KeyData
                icon={carbsIcon}
                info={`${userMainData.carbohydrateCount}g`}
                text="Glucides"
              />
              </ContainerKeyData>
              <ContainerKeyData>
                <KeyData
                  icon={fatIcon}
                  info={`${userMainData.lipidCount}g`}
                  text="Lipides"
                />
              </ContainerKeyData>
            </AsideKeyData>
          </div>)}     
        </ContainerRight>
      </Container>
    </Main>
  )
}