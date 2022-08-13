const SET_EMAIL = 'SET-EMAIL';
const SET_PASSWORD = 'SET-PASSWORD';

let defaultState = {
        email:'',
        password: ''
}

let AuthRedusers = (state = defaultState, action) => {
    switch (action.type) {
        case SET_EMAIL:
            return {
                ...state,
                email: action.email
            }
        case SET_PASSWORD:
            return {
                ...state,
                password: action.password
            } 
        default:
            return state;
    }
}

export let AddEmailUsers = (email) => ({type: SET_EMAIL, email});
export let AddPasswordUsers = (password) => ({type: SET_PASSWORD, password})
export default AuthRedusers;