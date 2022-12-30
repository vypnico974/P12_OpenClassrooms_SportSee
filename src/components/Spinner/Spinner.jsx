/* react  */
import React from "react"
import PropTypes from 'prop-types'
/* css  */
import styles from './spinner.module.css'

/**
 * @function Spinner
 * @export
 * @description component that render load spinner
 * @param  {string} title - style class
 * @param  {string} typeLoader - loader type
 * @param  {string} formatting - formatting
 * @return {HTMLElement} component generated HTML
*/
export default function Spinner({title, typeLoader, formatting}) {
  /*  example formatting = "spinnerMedium" */
  return (
    <div className={`${styles.container__spinner} ${styles[formatting]}`}>
        <h1>{title}</h1>
        <div className={`${styles.loader} ${styles[formatting]}`} id={styles[typeLoader]}></div>  
    </div>
  )
}   
Spinner.propTypes = {
  title: PropTypes.string,
  typeLoader: PropTypes.string,
  formatting: PropTypes.string,
}