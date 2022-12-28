import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts'

const ContainerPieChart = styled.div`
position:relative;
width:258px;
height:263px;
margin-left:30px;
margin-top:30px;
position: relative;
background: #FBFBFB;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
border-radius: 5px;
`  

const Title = styled.h2`
    position relative;
    margin-left:120px;
    transform: translate(-70%, 0%);
    font-weight: 500;
    font-size: 0.94rem;
    line-height: 24px;
    color: #20253A;
    font-weight: 700;
`

const Text = styled.p`
background-color: #ffffff;
border-radius: 50%;
color: #74798C;
display: flex;
flex-direction: column;
font-size: 18px;
height: 210px;
justify-content: center;
position: absolute;
text-align: center;
width: 145px;
height: 145px;
top: 50px;
left: 57px;
`

const Score = styled.span`
    color: rgba(0, 0, 0, 0.8);
    font-weight: 700;
    font-size: 26px;
`


/** render radial bar chart width score today 
 * @param  {number} score score today 
 * @return {JSX}
 */
export default function RadialBarChartScore({data}) {

    if (!data) return null
    
    const score =  [
        {
          "fill": "#FF0000",
          "value": data*100
        },
        {
          "fill": "transparent",
          "value": 100
        }
      ]
      return(
        <ContainerPieChart>
             {/* {console.log("score PieChart:", data)} */}
            <Title>Score</Title>
            <ResponsiveContainer width="100%" height={183}>
                <RadialBarChart barSize={15} data={score} endAngle={450} height={250} innerRadius="100%" startAngle={90} width={250}>
                    <RadialBar dataKey="value" />
                </RadialBarChart>
            </ResponsiveContainer>
            <Text>
                <Score>{score[0].value }%<br/></Score>
                de votre<br/> objectif
            </Text>
        </ContainerPieChart>
    )
}
RadialBarChartScore.propTypes = {
    data: PropTypes.number,
}