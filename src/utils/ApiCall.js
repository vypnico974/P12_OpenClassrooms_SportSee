import axios from 'axios'
import PropTypes from 'prop-types'
// Api URL
const baseURL = 'http://localhost:3000/'

/**
 * @function getUserInfos
 * @export
 * @async
 * @description component that axios data and return response user infos data
 * @param {number} id user id
 * @returns {object} response user infos data
*/
export const getUserInfos = async (id) => {
	try {
		const reponse = await axios.get(`${baseURL}user/${id}`)
		//console.log(reponse)
		return  {
			error:'',
			firstName: reponse.data.data.userInfos.firstName,
			score: (reponse.data.data.score) || (reponse.data.data.todayScore),
			calorieCount: reponse.data.data.keyData.calorieCount,
			proteinCount: reponse.data.data.keyData.proteinCount,
			carbohydrateCount: reponse.data.data.keyData.carbohydrateCount,
			lipidCount: reponse.data.data.keyData.lipidCount
		}			
		} catch (e) {
			console.log(e)
		return {
			error:'error',
			firstName : '',
			score: '',
			calorieCount: '',
			proteinCount: '',
			carbohydrateCount: '',
			lipidCount:'',
		}	
	}
}
getUserInfos.PropTypes = {
    id : PropTypes.number.isRequired
}


/**
 * @function getUserActivity
 * @export
 * @async
 * @description component that axios data and return response user activity data
 * @param {number} id user id
 * @returns {object} response user activity data
*/
export const getUserActivity = async (id) => {
	try {
		const reponse = await axios.get(`${baseURL}user/${id}/activity`)
		return {
			error:'',
			sessions: reponse.data.data.sessions
		}
	} catch (e) {
		console.log(e)
		return {
			error:'error',
			sessions: ''
		}
	}
}
getUserActivity.PropTypes = {
    id : PropTypes.number.isRequired
}


/**
 * @function getUserActivity
 * @export
 * @async
 * @description component that axios data and return response user average session data
 * @param {number} id user id
 * @returns {object} response user average session data
*/
export const getUserAverageSessions = async (id) => {
	try {
		const reponse = await axios.get(`${baseURL}user/${id}/average-sessions`)
		return {
			error:'',
			sessions: reponse.data.data.sessions
		}
	} catch (e) {
		console.log(e)
		return {
			error:'error',
			sessions: ''
		}
	}
}
getUserAverageSessions.PropTypes = {
    id : PropTypes.number.isRequired
}


/**
 * @function getUserActivity
 * @export
 * @async
 * @description component that axios data and return response user performance data
 * @param {number} id - user id
 * @returns {object} response user performance data
*/
export const getUserPerformance = async (id) => {
	try {
		const reponse = await axios.get(`${baseURL}user/${id}/performance`)
		return {
			error:'',
			kind: reponse.data.data.kind,
			data: reponse.data.data.data
		}
	} catch (e) {
		console.log(e)
		return {
			error:'error',
			kind: '',
			data:''
		}
	}
}
getUserPerformance.PropTypes = {
    id : PropTypes.number.isRequired
}