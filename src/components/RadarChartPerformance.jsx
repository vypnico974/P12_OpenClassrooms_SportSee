import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { ResponsiveContainer,Radar,RadarChart,PolarGrid,PolarAngleAxis }
    from 'recharts'

const ContainerRadarChart = styled.div`
  width:258px;
  background: #282D30;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: 5px; 
  margin-top:30px;
  height:263px;
  margin-left:30px;
`    


/** render Radar Chart width User Performance Data
 * @param  {Array} user Performance Data
 * @return {JSX}
 */
export default function RadarChartPerformance({data}) {

     //console.log("data RadarChart:", data)
      return(
        <ContainerRadarChart>
          <ResponsiveContainer width="100%" height={263}>
            <RadarChart
            cx="50%"
            cy="50%"
            data={data.data}
            margin={{ top: 0, right: 30, bottom: 0, left: 40 }}
            >
            <PolarGrid radialLines={false} />
            <PolarAngleAxis
                dataKey="kind"
                tick={{ fontSize: "12", fontWeight: "500", fill: "#FFFFFF" }}
            />
            <Radar
                name="performance"
                dataKey="value"
                stroke="rgba(255, 1, 1, 0.7)"
                fill="rgba(255, 1, 1, 0.7)"
                fillOpacity={0.7}
            />
            </RadarChart>
          </ResponsiveContainer>
        </ContainerRadarChart>
    )
}
RadarChartPerformance.propTypes = {
    data: PropTypes.object.isRequired,
}