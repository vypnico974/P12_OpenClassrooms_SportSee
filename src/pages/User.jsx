import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router'
import styled from 'styled-components'
//mock or axios data
import {getData} from '../utils/getData'
//components
import UserInfo from '../components/UserInfo'
import KeyData from '../components/KeyData'
import BarChartActivity from '../components/BarChartActivity'
import LineChartSessions from '../components/LineChartSessions'
import RadarChartPerformance from '../components/RadarChartPerformance'
import RadialBarChartScore from '../components/RadialBarChartScore'
import Spinner from '../components/Spinner/Spinner'
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
  const [isLoadingMain, setIsLoadingMain] = useState(false)
  const [isLoadingActivity, setIsLoadingActivity] = useState(false)
  const [isLoadingAverage, setIsLoadingAverage] = useState(false)
  const [isLoadingPerformance, setIsLoadingPerformance] = useState(false)  
  const { id } = useParams()
  const idCurrent = parseInt(id)
  let performanceData = []


  useEffect(() => {
    setIsLoadingMain(true) //load start
    const data = async () => {
      try{
        const request = await getData("USER_MAIN_DATA",idCurrent)
        setUserMainData(request)
      }
      catch{
        console.log("data error")
      }
      finally{
        setIsLoadingMain(false) //load end
      }
    }
  data()   
  }, [idCurrent])

  useEffect(() => {
    setIsLoadingActivity(true) //load start
    const data = async () => {
      try{
        const request = await getData("USER_ACTIVITY",idCurrent)
        setUserActivityData(request)
      }
      catch{
        console.log("data error")
      }
      finally{
        setIsLoadingActivity(false) //load end
      }
      
    }
  data()    
  }, [idCurrent])  

  useEffect(() => {
    setIsLoadingAverage(true) //load start
    const data = async () => {
      try{
        const request = await getData("USER_AVERAGE_SESSIONS",idCurrent)
        setUserAverageSessionsData(request)
      }
      catch{
        console.log("data error")
      }
      finally{
        setIsLoadingAverage(false) //load end
      }        
    }
  data()    
  }, [idCurrent])

  useEffect(() => {
    setIsLoadingPerformance(true) //load start
    const data = async () => {
      try{
        const request = await getData("USER_PERFORMANCE",idCurrent)
        setUserPerformanceData(request)
      }
      catch{
        console.log("data error")
      }
      finally{
        setIsLoadingPerformance(false) //load end
      }      
    }
  data()    
  }, [idCurrent])


/** 
  * @constant 
  * @type {Array} 
  * @description To change the data in days and show the first letter
  *  of each day of the week
  * @default 
*/
const WeekDaysFirstLetter = ["L", "M", "M", "J", "V", "S", "D"]

/** 
  * @constant 
  * @type {Array}
  * @description To translate categories performance kinds in french
  * @default 
*/
const PerformanceKinds = 
  ["Cardio","Energie","Endurance","Force","Vitesse","Intensité"]


  // if data load, render spinner(loading)
  if ((isLoadingActivity) || (isLoadingMain) ||
  (isLoadingAverage) || (isLoadingPerformance) ) {
    return <Spinner title="" typeLoader="loader-1" formatting="spinnerMedium"/>
  }

  if (userActivityData.sessions){
    //format UserActivityData.sessions.day
    for (let i = 0 ; i < userActivityData.sessions.length ; i ++){
      userActivityData.sessions[i].day = i + 1
    }
  }

  //format replace day value number to string(WeekDaysFirstLetter)
  if (userAverageSessionsData && (userAverageSessionsData.sessions)){
    WeekDaysFirstLetter.forEach((kind, index) => {
      userAverageSessionsData.sessions[index].day = kind
    })
  }
    
  //format replace kind number to string(entitled) 
  if ((userPerformanceData) && (userPerformanceData.data)) {       
    PerformanceKinds.forEach((kind, index) => {
      userPerformanceData.data[index].kind = kind
  })

  performanceData = [
    {
      value: 0,
      kind: "Intensité"
    },
    {
      value: 0,
      kind: "Vitesse"
    },
    {
      value: 0,
      kind: "Force"
    },
    {
      value: 0,
      kind: "Endurance"
    },
    {
      value: 0,
      kind: "Energie"
    },
    {
      value: 0,
      kind: "Cardio"
    },  
  ]

  //allows the display according to the order of the titles : kinds
  userPerformanceData.data.forEach((data,index) => {
    switch (data.kind) {
      case "Intensité":
        performanceData[index].value = data.value  
        break
      case "Vitesse":
        performanceData[index].value = data.value
        break
      case "Force":
        performanceData[index].value = data.value          
        break
      case "Endurance":
        performanceData[index].value = data.value
        break
      case "Energie":
        performanceData[index].value = data.value          
        break
      case "Cardio":
        performanceData[index].value = data.value
        break                   
      default:
        break
      }      
    })
  }    

  // if connection error, render the error page
  if ((userMainData.error) || (userActivityData.error) ||
    (userAverageSessionsData.error) || (userPerformanceData.error) ){
    return (<Error /> )   
  }
      
  return ( 
    <Main>
      { ((userMainData)) &&
         <UserInfo name={userMainData.firstName} /> } 
      <Container>
        <ContainerLeft>
          <div>
            {(userActivityData.sessions) && 
             <BarChartActivity data={userActivityData.sessions}/>  } 

            <ContainerLeftChart>

            {(userAverageSessionsData.sessions) && 
              <LineChartSessions data={userAverageSessionsData.sessions}/> }

              {(performanceData) && 
              <RadarChartPerformance data={performanceData}/> }   

              {(userMainData) && 
              <RadialBarChartScore data={userMainData.score}/> }

            </ContainerLeftChart>            
          </div> 
        </ContainerLeft>

        <ContainerRight>
          
          {(userMainData.calorieCount) &&
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