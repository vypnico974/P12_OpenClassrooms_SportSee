import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// recharts components
import { ResponsiveContainer, RadialBarChart, RadialBar} from 'recharts'

/* RadialBarChart component style  */
const ContainerRadialBarChart = styled.div`
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
    transform: translate(-60%, 80%);
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

/**
 * @function RadialBarChartScore
 * @export
 * @description render radial bar chart with score today
 * @see for more info RadialBarChart
 * {@link https://recharts.org/en-US/api/RadialBarChart RadialBarChart}
 * @param  {number} score - score today 
 * @return {HTMLElement} component generated HTML
*/
export default function RadialBarChartScore({data}) {

   // data = 1

    // if data undefined or not number
    if ((!data) || (isNaN(data))) return null
    
    // to define colored circle part and transparent circle part
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
        <ContainerRadialBarChart>
            <Title>Score</Title>
            <ResponsiveContainer width="100%" height={183}>
                <RadialBarChart barSize={10} data={score} endAngle={450} height={250} innerRadius="100%" startAngle={90} width={250}>
                    <RadialBar dataKey="value" />
                </RadialBarChart>
            </ResponsiveContainer>
            <Text>
                <Score>{score[0].value }%<br/></Score>
                de votre<br/> objectif
            </Text>
        </ContainerRadialBarChart>
    )
}
RadialBarChartScore.propTypes = {
    data: PropTypes.number,
}