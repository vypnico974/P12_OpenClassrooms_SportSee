import * as React from "react"
import { Routes, Route } from "react-router-dom"
import styled from 'styled-components'
//components
import Header from './components/Header'
import VerticalNav from './components/VerticalNav'
//pages
import Home from "./pages/Home"
import Error from "./pages/Error"
import User from "./pages/User"
import Community from "./pages/Community"
import Setting from "./pages/Setting"
import Profil from "./pages/Profil"
//CSS
import './styles/normalize.css'
import './styles/global.css'

/* container style  */
const Container = styled.div `
  display: -webkit-box;
`

/**
 * @function App
 * @export
 * @description component that block structure and declaration of the differents
 *  routes for this website
 * @return {HTMLElement} component generated HTML
 */
export default function App() {
  return (
  <>
  <Header />
    <Container> 
      <VerticalNav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/community" element={<Community />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Container>  
  </>
  )
}

