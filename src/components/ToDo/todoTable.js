import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData} from '../../actions/index';
import './dist/todo.css';


 class todoTable extends Component {

    componentDidMount(){
        this.props.dispatch(getData());
    }

    componentWillUnmount(){
        this.props.dispatch(getData());
    }
    render() {
        return (
            <div>
                {this.props.istodoListLoading ?
                <img src={require('./dist/loader.gif')} className="loader-img"/>: ''}

                {this.props.todoListLoadError ? 
                <h6>Error loading data...Try again.</h6> : ''}
                
                {this.props.todoList.length> 0 && this.props.todoList.map((todo) => (
                    <div className="allTodos" key={todo.id}>
                        <div>{todo.id}</div>
                        <div>{todo.title}</div>
                       {todo.completed === true? <div>completed</div>: <div>In-progress</div> }
                      
                        </div>
                ))}
                   
               
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {todoList} = state.todoReducer;
    const {istodoListLoading} = state.todoReducer;
    const {todoListLoadError} = state.todoReducer;
    return {todoList, istodoListLoading, todoListLoadError}
}

export default connect(mapStateToProps)(todoTable);

