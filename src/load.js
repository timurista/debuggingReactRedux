/* eslint-disable */
const LOAD = 'userInfo/LOAD'

const reducer = (state = {}, action) => {
    switch (action.type) {
    case LOAD:
        return {
            user: user
        }
    default:
        return state
    }
}

/**
 * Simulates data loaded into this reducer from somewhere
 */
export const load = data => ({ type: LOAD, data })

export default reducer