export function Signin(username, password){
    axios.post(URL + "users/signin", {
        username,
        password
    })    
    .then(response => {
        const cookies = new Cookies(null, { path: '/' });
        cookies.set('userToken', response.data.accessToken);
    })
}

export function AddCapsule(message){
    const cookies = new Cookies(null, { path: '/' });
    axios.post(URL + "capsules/user", {data: {'message' : message}, headers: {'auth_temp' : cookies.get("userToken")}})
    .then(response => {
        console.log(response.data);
    })
    .catch(err => {
        console.log(err);
    })
}
