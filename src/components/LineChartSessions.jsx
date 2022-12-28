import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { ResponsiveContainer,LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip }
    from 'recharts'


const ContainerLineChart = styled.div`
  background: #FF0000;
  width:258px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: 5px;
  margin-top:30px;
  height:100%;
`    
const ChartTitle = styled.div`
  color: #FFFFFF;
  position: relative;
  font-size: 15px;
  font-weight: 500;
  width: 170px;
`;
const Title = styled.h2`
  font-size: 15px;
  font-weight: 500;
  position: absolute;
  top: 30px;
  left: 30px;
`


/** render Line Chart width User Activity Data(sessions)
 * @param  {Array} user average session data
 * @return {JSX}
 */
export default function LineChartSessions({data}) {

     // console.log("data LineChart:", data)
      return(
        <ContainerLineChart>
          <ChartTitle>
              <Title>Durée moyenne des sessions</Title>
          </ChartTitle>
          <ResponsiveContainer width="100%" height={263}>
            <LineChart
              data={data}
              margin={{
              top: 5,
              right: 10,
              left: -50,
              bottom: 15,
            }}
          >
          <CartesianGrid
            strokeDasharray=""
              vertical={false}
              horizontal={false}
          />
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#FFFFFF", fontSize: "12px", fontWeight: "500" }}
            interval={"preserveStartEnd"}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tick={{ display: "none" }}
            domain={["dataMin-10", "dataMax+50"]}
          />
          <Tooltip
            itemStyle={{ color: "black", fontSize: 10, fontWeight: 500 }}
            formatter={(value, name, unit) => [value, unit]}
            labelStyle={{ display: "none" }}
            contentStyle={{
            width: "40px",
            height: "25px",
            border: "none",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            }}
            cursor={{ stroke: "black", strokeOpacity: 0.3, strokeWidth: 40 }}
            offset={20}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#fff"
            strokeWidth={1.7}
            dot={false}
            activeDot={{ r: 4 }}
            unit={"min"}
          />
        </LineChart>
      </ResponsiveContainer>
    </ContainerLineChart>
    )
}
LineChartSessions.propTypes = {
    data: PropTypes.array.isRequired,
}