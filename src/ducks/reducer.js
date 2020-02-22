const initialState = {
    username: '',
    profile_pic: '',
    user_id: 0,
}


const GET_USER = "GET_USER"
const LOGOUT = "LOGOUT"

export function getUser(userObj) {
    return {
        type: GET_USER,
        payload: userObj
    }
}

export default function reducer(state = initialState, action) {
    const {type, payload} = action
    switch (type) {
        case GET_USER:
        return {...state, username: payload, profile_pic: payload}
        default:
        return state
    }
}