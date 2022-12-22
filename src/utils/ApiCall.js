import axios from 'axios'
import PropTypes from 'prop-types'


const baseURL = 'http://localhost:3000/'


/**
 * Get user infos
 *
 * @param {number} id User id
 * @returns {object} Response
 */
export const getUserInfos = async (id) => {
	try {
		const res = await axios.get(`${baseURL}user/${id}`)
		return res.data
	} catch (e) {
		console.log(e)
	}
}
getUserInfos.PropTypes = {
    id : PropTypes.number.isRequired
}


/**
 * Get user activity 
 *
 * @param {number} id User id
 * @returns {object} Response
 */
export const getUserActivity = async (id) => {
	try {
		const res = await axios.get(`${baseURL}user/${id}/activity`)
		return res.data
	} catch (e) {
		console.log(e)
	}
}
getUserActivity.PropTypes = {
    id : PropTypes.number.isRequired
}



/**
 * Get user average session 
 *
 * @param {number} id User id
 * @returns {object} Response
 */
export const getUserAverageSessions = async (id) => {
	try {
		const res = await axios.get(`${baseURL}user/${id}/average-sessions`)
		return res.data
	} catch (e) {
		console.log(e)
	}
}
getUserAverageSessions.PropTypes = {
    id : PropTypes.number.isRequired
}



/**
 * Get user performance 
 *
 * @param {number} id User id
 * @returns {object} Response
 */
export const getUserPerformance = async (id) => {
	try {
		const res = await axios.get(`${baseURL}user/${id}/performance`);
		return res.data;
	} catch (e) {
		console.log(e);
	}
}
getUserPerformance.PropTypes = {
    id : PropTypes.number.isRequired
}