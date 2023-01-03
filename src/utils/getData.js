/* data api  */
import {getUserInfos, getUserActivity, getUserAverageSessions, getUserPerformance}
    from './apiCall'
/* data mock  */    
// import {mockUserInfos, mockUserActivity, mockUserAverageSessions, mockUserPerformance }
//     from './mocksCall'

import PropTypes from 'prop-types'


/**
 * @function getData
 * @export
 * @async
 * @description component that mock or axios data and return data object based on two parameters
 * @param {string} type - data type selection
 * @param {number} id - user id 
 * @return {Object} The data from the endpoint
 * 
*/
export const getData = async (type, id) => {
  let data = []

  switch (type) {
    case "USER_ACTIVITY":
      data = await getUserActivity(id)
      break
    case "USER_PERFORMANCE":
      data = await getUserPerformance(id)
      break
    case "USER_AVERAGE_SESSIONS":
      data = await getUserAverageSessions(id)
      break
    case "USER_MAIN_DATA":
      data = await getUserInfos(id)
     // console.log("data getUserInfos : ", data )
      break

        // case "USER_ACTIVITY":
        //     data = await mockUserActivity(id)
        //     break
        //   case "USER_PERFORMANCE":
        //     data = await mockUserPerformance(id)
        //     break
        //   case "USER_AVERAGE_SESSIONS":
        //     data = await mockUserAverageSessions(id)
        //     break
        //   case "USER_MAIN_DATA":
        //     data = await mockUserInfos(id)
        //     //console.log(data)
        //     break
    
        default : return []
    }
  return data
}
getData.PropTypes = {
    type : PropTypes.string.isRequired,
    id : PropTypes.number.isRequired,
}