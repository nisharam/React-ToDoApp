import React from 'react';
import { connect } from 'react-redux';
import { updateTodoList} from '../../actions/todoAction';
import CheckIcon from '@material-ui/icons/Check';
class EditComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input:"",
        };
    }

    updateToDo(data){
        const updatedTodo = this.getTitle.value;
        this.props.dispatch(updateTodoList({id: data.id, todo: updatedTodo}));


    }

    render() {
        return (
            <div>
                <div className="todo-list">
                    <form onSubmit={()=> this.updateToDo(this.props.todo)}>
                <input className="edit-todo" type="text" defaultValue={this.props.todo.todo} ref={(input) => this.getTitle = input} />
                <button className="action-buttons" ><CheckIcon  /></button>
                </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {todos} = state.todoReducer;
    return {todos}
}

export default connect(mapStateToProps)(EditComponent);