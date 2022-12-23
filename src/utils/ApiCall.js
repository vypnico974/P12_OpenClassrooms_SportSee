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
		const reponse = await axios.get(`${baseURL}user/${id}`)
		//console.log(reponse)
		return  {
			error:'',
			firstName: reponse.data.data.userInfos.firstName,
			score: (reponse.data.data.score*100) || (reponse.data.data.todayScore*100),
			calorieCount: reponse.data.data.keyData.calorieCount,
			proteinCount: reponse.data.data.keyData.proteinCount,
			carbohydrateCount: reponse.data.data.keyData.carbohydrateCount,
			lipidCount: reponse.data.data.keyData.lipidCount
		}			
		} catch (e) {
		return {
			error:'error',
			// firstName : '',
			// score: '',
			// calorieCount: '',
			// proteinCount: '',
			// carbohydrateCount: '',
			// lipidCount:'',
		}	
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