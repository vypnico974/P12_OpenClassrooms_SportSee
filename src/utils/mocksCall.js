import {USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE}
    from '../__mocks__/mocksData'
import PropTypes from 'prop-types'



/**
 * Mock user infos data
 *
 * @param {number} id User id
 * @returns {object} Response
 */
export const mockUserInfos = async (id) => {
	try {
        const reponse = USER_MAIN_DATA.find((el) => el.id === id)
		//console.log(reponse)
		return {
			error:'',
			firstName: reponse.userInfos.firstName,
			score: (reponse.score) || (reponse.todayScore),
			calorieCount: reponse.keyData.calorieCount,
			proteinCount: reponse.keyData.proteinCount,
			carbohydrateCount: reponse.keyData.carbohydrateCount,
			lipidCount: reponse.keyData.lipidCount
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
			lipidCount:''
		}
	}
}
mockUserInfos.PropTypes = {
    id : PropTypes.number.isRequired
}


/**
 * Mock user activity data
 *
 * @param {number} id User id
 * @returns {object} Response
 */
export const mockUserActivity = async (id) => {
	try {
		const reponse = USER_ACTIVITY.find((el) => el.userId === id)
		return {
			error:'',
			sessions: reponse.sessions
		}
	} catch (e) {
		console.log(e)
		return {
			error:'error',
			sessions: ''
		}
	}
}
mockUserActivity.PropTypes = {
    id : PropTypes.number.isRequired
}


/**
 * Mock user average session data
 *
 * @param {number} id User id
 * @returns {object} Response
 */
export const mockUserAverageSessions = async (id) => {
	try {
		const reponse = USER_AVERAGE_SESSIONS.find((el) => el.userId === id)
		//console.log(reponse)
		return {
			error:'',
			sessions: reponse.sessions
		}
	} catch (e) {
		console.log(e)
		return {
			error:'error',
			sessions: ''
		}
	}
}
mockUserAverageSessions.PropTypes = {
    id : PropTypes.number.isRequired
}


/**
 * Mok user performance data
 *
 * @param {number} id User id
 * @returns {object} Response
 */
export const mockUserPerformance = async (id) => {
	try {
		const reponse = USER_PERFORMANCE.find((el) => el.userId === id)
		return {
			error:'',
			kind: reponse.kind,
			data: reponse.data
		}
	} catch (e) {
		console.log(e)
		return {
			error:'error',
			kind:'',
			data: ''
		}
	}
}
mockUserPerformance.PropTypes = {
    id : PropTypes.number.isRequired
}