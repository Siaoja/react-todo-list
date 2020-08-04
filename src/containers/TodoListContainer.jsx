import {connect} from 'react-redux';
import TodoList from '../components/TodoList';

const mapStateToProps = (state) => ({
    todoList: state.todoList
});

const mapDispatchToProps = (dispatch) => ({
    deleteTodo: (index) => {dispatch({type:'DELETE_TODO', index:index})},
    isTodoDone: (isTodoDone, index) => {dispatch({type:'IS_TODO_DONE', isTodoDone: isTodoDone, index: index})}
})

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoListContainer;