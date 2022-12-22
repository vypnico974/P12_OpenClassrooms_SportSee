import {USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE}
    from '../__mocks__/mocksData'
import PropTypes from 'prop-types'



/**
 * Mock user infos
 *
 * @param {number} id User id
 * @returns {object} Response
 */
export const mockUserInfos = async (id) => {
	try {
        const res = USER_MAIN_DATA.find((el) => el.id === id)
		return {data:res}
	} catch (e) {
		console.log(e)
	}
}
mockUserInfos.PropTypes = {
    id : PropTypes.number.isRequired
}


/**
 * Mock user activity 
 *
 * @param {number} id User id
 * @returns {object} Response
 */
export const mockUserActivity = async (id) => {
	try {
		const res = USER_ACTIVITY.find((el) => el.userId === id);
		return {data:res};
	} catch (e) {
		console.log(e);
	}
}
mockUserActivity.PropTypes = {
    id : PropTypes.number.isRequired
}


/**
 * Mock user average session 
 *
 * @param {number} id User id
 * @returns {object} Response
 */
export const mockUserAverageSessions = async (id) => {
	try {
		const res = USER_AVERAGE_SESSIONS.find((el) => el.userId === id)
		return {data:res}
	} catch (e) {
		console.log(e)
	}
}
mockUserAverageSessions.PropTypes = {
    id : PropTypes.number.isRequired
}


/**
 * Mok user performance 
 *
 * @param {number} id User id
 * @returns {object} Response
 */
export const mockUserPerformance = async (id) => {
	try {
		const res = USER_PERFORMANCE.find((el) => el.userId === id)
		return {data:res}
	} catch (e) {
		console.log(e)
	}
}
mockUserPerformance.PropTypes = {
    id : PropTypes.number.isRequired
}