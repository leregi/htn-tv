import { add, retrieve } from '../actions/actionCreators';

const addTodo = text => dispatch(add(text));
const retrieveTodo = ind => dispatch(retrieve(ind));

export default { addTodo, retrieveTodo };