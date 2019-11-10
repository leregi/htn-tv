import { LOGIN, REGISTER,LOGOUT } from "../actions/types";

const initialState = {
    token : null,
    isLogged : false
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
            return state;
        case LOGOUT :
            return {
                ...initialState
            };
        default:
            return state;
    }
}