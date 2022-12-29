import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

/* error page style  */
const Main = styled.main`
  color: red;
  margin-left : auto;
  margin-right : auto;
  min-height : 530px;
  a{
      margin-top:1em;
      display:flex;
      flex-direction:column;
      color:red;
    }
`
const Title = styled.h1`
font-size: 8rem;
`

/**
 * @function Error
 * @export
 * @description render error page
 * @return {HTMLElement} component generated HTML
*/
export default function Error() {
  
  return (
    <Main>
	  	<Title>404</Title>
			<p>Oups! La page que vous demandez n'existe pas.</p>
			<Link to='/'>Retourner sur la page d’accueil.</Link>
	  </Main>
  )
}
