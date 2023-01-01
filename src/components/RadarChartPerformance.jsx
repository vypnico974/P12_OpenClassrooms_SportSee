import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// recharts components
import { ResponsiveContainer,Radar,RadarChart,PolarGrid,PolarAngleAxis}
    from 'recharts'

/*  radar chart style */    
const ContainerRadarChart = styled.div`
  width:258px;
  background: #282D30;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: 5px; 
  margin-top:30px;
  height:263px;
  margin-left:30px;
`    

/**
 * @function RadarChartPerformance
 * @export
 * @description component that render radar chart with user performance data
 * @param  {Object} data
 * @param {string} data.error - error data
 * @param {Array} data.kind - performance kind
 * @param {Object} data.data - performance data
 * @param {number} data.data.value - performance value
 * @param {string} data.data.kind - performance kind name
 * @return {HTMLElement} component generated HTML
*/
export default function RadarChartPerformance({data}) {

  if (!data) return null
 
  return(
    <ContainerRadarChart>
      <ResponsiveContainer width="100%" height={263}>
        <RadarChart
          cx="50%"
          cy="50%"
          data={data}
          margin={{ top: 0, right: 30, bottom: 0, left: 50 }}
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
          fillOpacity={0.9}
        />
        </RadarChart>
      </ResponsiveContainer>
    </ContainerRadarChart>
  )
}
RadarChartPerformance.propTypes = {
    data: PropTypes.array,
}