import React from 'react';
// import {getTodoList } from '../../selectors/todoSelector';
import {getTodo} from '../../actions/todoAction';
import { connect } from 'react-redux';
import  ToDo from './todo';
import EditComponent from './editTodo';
class ToDoList extends React.Component {
componentDidMount(){
    this.props.dispatch(getTodo(this.props.todos))
}
    render() {
        return(
            <div>
                {this.props.todos.map( (todo) => (
                    <div key={todo.id}>
                        {todo.editing ? <EditComponent todo={todo}/> :
                    <ToDo  todo={todo.todo} completed={todo.completed} id={todo.id}/> }
                    </div>
                ))} 
            </div>
        )
    }
}
function mapStateToProps(state) {
    const {todos} = state.todoReducer;
    return {todos}
}

export default connect(mapStateToProps)(ToDoList);

