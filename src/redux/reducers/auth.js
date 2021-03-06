import { LOGIN, REGISTER,LOGOUT } from "../actions/types";

const initialState = {
    token : null,
    isLogged : false,
    isRegisted: false
}

export default function auth(state = initialState, action) {
    switch (action.type) {
        case LOGIN :
            return {
                ...state,
                token : action.token,
                isLogged : true
            };
        case REGISTER :
            return {
                ...state,
                token : action.token,
                isRegisted : true
            };
        case LOGOUT :
            return {
                ...initialState
            };
        default:
            return state;
    }
}