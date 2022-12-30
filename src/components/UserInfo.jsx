import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'; 

/* UserInfo component style  */
const Head = styled.header`
  margin-bottom: 40px;
  h1 {
    font-weight: 600;
    font-size:3rem;
    margin-bottom:20px;
  }
`
const Name = styled.span`
  color: #FF0101;
`

/**
 * @function UserInfo
 * @export
 * @description component for render the user name
 * @param {string} name user name
 * @return {HTMLElement} component generated HTML
*/
export default function UserInfo({name}) {

  return (  
    <Head>
      <h1>Bonjour <Name>{name}</Name></h1>
      <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
    </Head>
  )
}
UserInfo.propTypes = {
	name: PropTypes.string,
}