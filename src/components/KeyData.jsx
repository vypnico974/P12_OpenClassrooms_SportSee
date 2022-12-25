import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'



const Container = styled.div`
    display:flex;
    margin:auto;
`
    
const Infos = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:24px;
    @media screen and (max-width: 1300px) {
        margin-left:5px;
    }
`

const InfosData = styled.p`
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: #282D30;
    margin-bottom:2px;
`

const InfosText = styled.p`
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #74798C;
`
/** render icon with User Main Data(keyData)
 * @param  {string} icon
 * @param  {string} info
 * @param  {string} text
 * @return {JSX}
 */
export default function KeyData({icon,info,text}) {
    return (  
    <Container>
        <img src={icon} alt="calories icon"/>
        <Infos>
            <InfosData>{info}</InfosData>
            <InfosText>{text}</InfosText>
        </Infos>
    </Container> )
}

KeyData.propTypes = {
  icon: PropTypes.any,
  info: PropTypes.string,
  text: PropTypes.string,
}