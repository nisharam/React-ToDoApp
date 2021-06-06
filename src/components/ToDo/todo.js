import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo, editTodo , updateTodoList, updateTodoStatus} from '../../actions/todoAction';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

class ToDo extends React.Component {
    constructor(props){
        super(props);
        this.state= {completed: this.props.completed}
        this.toggleCheckbox = this.toggleCheckbox.bind(this);
    }
    deleteTodo(id) {
        this.props.dispatch(deleteTodo(id));
    }

    editToDo(todo){
        this.props.dispatch(editTodo(todo));
    }

    toggleCheckbox (e) {
        
        this.setState({
            completed: e.target.checked
        })

        this.props.dispatch(updateTodoStatus({completed:this.state.completed, id: this.props.id,todo: this.props.todo} ))
    }
    render(){
        return(
            <div className="todo-list">
                <input type="checkbox" defaultChecked={this.state.completed} onChange={this.toggleCheckbox} />
                <h5 id="todo-item" className={this.state.completed ? 'completed': 'active-todo'}>{this.props.todo}</h5>
                <button className={this.state.completed ? 'completed, action-buttons-none': 'active-todo , action-buttons'}  onClick={() => this.editToDo(this.props.id)}><EditIcon  /></button>
                <button className={this.state.completed ? 'completed, action-buttons-none': 'active-todo , action-buttons'}  onClick={()=> this.deleteTodo(this.props.id)}><DeleteIcon onClick={()=> this.deleteTodo(this.props.id)} /></button>
            </div>
        )
    }
}
function mapStateToProps(state) {
    const {todos} = state.todoReducer;
    return {todos}
}

export default connect(mapStateToProps)(ToDo);