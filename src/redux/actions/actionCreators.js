import { INCREMENT, DECREMENT, ADD, RETRIEVE, LOGIN, REGISTER, LOGOUT } from './types';

export const increment = () =>{ return({ type : INCREMENT }); } 
export const decrement = () =>{ return({ type : DECREMENT }); }
export const add = SETENCE => { return ({ type : ADD, text : SETENCE}); }
export const retrieve = ind => { return ( { type : RETRIEVE, index : ind }); }
export const login = token => { return ({ type : LOGIN, token : token })}