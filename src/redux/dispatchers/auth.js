import { login } from '../actions/actionCreators';
const log = authData => dispatch(login(authData));
export default { log, };