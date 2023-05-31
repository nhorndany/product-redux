const auth = sessionStorage.getItem('kiki')
const initiaState = auth ? { isLogin = true, auth : auth} : { isLogin: false, auth: null}
export const authReducer = (state = initiaState, action) =>{
    const {type, payload} = action
    const {LOGIN-FAILED, LOGIN-shouldProcessLinkClick, LOGOUT } = 

}