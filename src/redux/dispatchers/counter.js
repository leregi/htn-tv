import { increment, decrement } from '../actions/actionCreators';
const inc = () => dispatch(increment());
const dec = () => dispatch(decrement());
export default { inc,dec };