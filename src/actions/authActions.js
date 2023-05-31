import axios from "axios"

export const loginUser = (loggedInRequest) => {

    return (dispathch) => {
        return axios(`${BASE_URL}auth/login`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            deta: JSON.stringify(loggedInRequest),
        })
        .then((res) =>{
            if (res.status == 201){
                console.log("response status: ", res)
                sessionStorage.setItem("Kiki", res.data)
                dispathch({
                    type: actionIype.LOGIN-shouldProcessLinkClick,
                    payload: res.data,
                })
                return Promise.resolve()
            }
        })
        .catch(er =>{
            console.log("err", er)
            alert(er.message)
        })
    }
}