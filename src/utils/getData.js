// import {getUserInfos, getUserActivity, getUserAverageSessions, getUserPerformance}
//     from './ApiCall'
import {mockUserInfos, mockUserActivity, mockUserAverageSessions, mockUserPerformance }
    from './mocksCall'

import PropTypes from 'prop-types'


/**
   * 
   * @param {string} type 
   * @param {number} id 
   * @returns {Array}
*/
export const getData = async (type, id) => {
    let data = []

    switch (type) {
      // case "USER_ACTIVITY":
      //   data = await getUserActivity(id)
      //   break
      // case "USER_PERFORMANCE":
      //   data = await getUserPerformance(id)
      //   break
      // case "USER_AVERAGE_SESSIONS":
      //   data = await getUserAverageSessions(id)
      //   break;
      // case "USER_MAIN_DATA":
      //   data = await getUserInfos(id)
      //  // console.log(data)
      //   break

        case "USER_ACTIVITY":
            data = await mockUserActivity(id)
            break
          case "USER_PERFORMANCE":
            data = await mockUserPerformance(id)
            break
          case "USER_AVERAGE_SESSIONS":
            data = await mockUserAverageSessions(id)
            break;
          case "USER_MAIN_DATA":
            data = await mockUserInfos(id)
            //console.log(data)
            break
    
        default : return []
    }
    return data
}
getData.PropTypes = {
    type : PropTypes.string.isRequired,
    id : PropTypes.number.isRequired,
}