import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Bar, Tooltip, Legend }
        from 'recharts'

        
const ChartTitle = styled.h2`
  font-size: 0.94rem;
  font-weight: 500;
  margin-left: 30px;
`
const ContainerBarChart = styled.div`
background: #FBFBFB;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
border-radius: 5px;
padding-top:20px;
`


/** render Bart Chart width User Activity Data(sessions)
 * @param  {Array} user activity session data
 * @return {JSX}
 */
export default function BarChartActivity({data}) {
  
    
     /** the color legend text using formatter
     * @param  {string} value
     * @return {JSX}
     */
    const renderColorfulLegendText = (value) => {
        return <span style={{ color: "#74798C" }}>{value}</span>
    }
    renderColorfulLegendText.propTypes = {
        value: PropTypes.string,
    }


    return (  
    <ContainerBarChart>
        <ChartTitle>Activité quotidienne</ChartTitle>
       
        <ResponsiveContainer width="100%" height={250}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 20,
            left: 30,
            bottom: 5,
          }}
        > 
        <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#DEDEDE"
            strokeWidth={1.5}
          />
          <XAxis
            dataKey={"day"}
            tickLine={false}
            stroke="#DEDEDE"
            strokeWidth={2}
            tick={{ fill: "#9B9EAC", fontSize: "14", fontWeight: "500" }}
          />
          <YAxis
            dataKey={"kilogram"}
            interval="preserveStart"
            tickCount={3}
            vertical={false}
            tickLine={false}
            axisLine={false}
            orientation="right"
            type="number"
            domain={[67, 83]}
            yAxisId={0}
            tick={{ fill: "#9B9EAC", fontSize: "14", fontWeight: "500" }}
          />
          <YAxis
            dataKey={"calories"}
            hide={true}
            domain={["dataMin - 100", "dataMax +10"]}
            yAxisId={1}
          />
          <Tooltip
            itemStyle={{
              color: "white",
              fontSize: 10,
              fontWeight: 500,
            }}
            // to display the unit and its value
            formatter={(value, name, unit) => [value, unit]}
            // to style the label container
            labelStyle={{ display: "none" }}
            contentStyle={{
              backgroundColor: "#E60000",
              width: "48px",
              height: "63px",
              border: "none",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />

          <Legend
            iconType={"circle"}
            layout="horizontal"
            verticalAlign="top"
            align="right"
            iconSize={8}
            wrapperStyle={{
              right: 45,
              top: -30,
              fontSize: 14,
              fontWeight: 500,
              width: 300,
            }}
            formatter={renderColorfulLegendText}
          />

          <Bar
            dataKey="kilogram"
            fill="#282D30"
            name="Poids(kg)"
            unit={"kg"}
            yAxisId={0}
            barSize={10}
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="calories"
            fill="#E60000"
            name="Calories brûlées (Kcal)"
            unit={"kCal"}
            yAxisId={1}
            barSize={10}
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>

    </ContainerBarChart> )
}
BarChartActivity.propTypes = {
  data: PropTypes.array.isRequired,
}