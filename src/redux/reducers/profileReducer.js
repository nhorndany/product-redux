import { actionType } from "../../actions/actionTypes"

const initiaState = {
    profile: {}
}
export const profileleReducer = (state = initiaState, action) => {
    const {type, payload} = action
    switch(type){
        case actionTypes.FETCH-PROFILE:
            return{...state, profile: payload}
            default:
                return state
    }
}