import { ADD_CREDIT_CARD, RETRIEVE_CREDIT_CARD } from '../actions/types';



export default function creditCard(state = [], action) {
    switch(action.type) {
        case ADD_CREDIT_CARD: 
            state.push(action.creditCardInfo);
            return state;
        
        default:
            return state;
        
    }
}