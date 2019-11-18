import { ADD_CREDIT_CARD, RETRIEVE_CREDIT_CARD } from '../actions/types';


const initialState = {
    cardNumber: "",
    name: "",
    cardExpiry: "",
    cardCVC: ""
}

export default function creditCard(state = initialState, action) {
    switch(action.type) {
        case ADD_CREDIT_CARD: {
            state.push(action.creditCardInfo);
            return state;
        }
    }
}