import React, {useState} from 'react';
import './dist/todo.css'
import { addToDo, getTodolist} from '../../actions/todoAction';
import { connect } from 'react-redux';
import ToDoList from './todoList';
import Button from '@material-ui/core/Button';

class AddToDo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input:"",
            todoId :1,
        };
    }
    

    updateInput = input => {
        this.setState({input});
        
    }
    handleToDo = (e) => {
        e.preventDefault();
    this.props.dispatch(addToDo({todo: this.state.input, id: this.state.todoId, completed: false, editing:false}));
        this.setState({input: ""});
        this.setState({todoId: ++this.state.todoId})
    }

    render() {
        return (
            <div className="dashboard-content-container">
               <h4 className="todo-headline">Create your tasks for today</h4>
                <div className="input-todo">
                    <form onSubmit={this.handleToDo}>
                <input type="text" value={this.state.input} onChange={e => this.updateInput(e.target.value)} className="input-todoContent"/>
                <button type="button" className="add-todo">Add</button>
                {/* <Button variant="contained" color="primary" className="add-todo" > Add</Button> */}
                </form>
               </div>
               <ToDoList  />
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {todos} = state.todoReducer;
    return {todos}
}

export default connect(mapStateToProps)(AddToDo);