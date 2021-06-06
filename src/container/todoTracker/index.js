import React from 'react';
import AddToDo from '../../components/ToDo/addTodo';
import { Route, Switch, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import todoTable from '../../components/ToDo/todoTable';
class TodoTracker extends React.Component {
    render() {
        return (
            <div>
                <div className="dashboard-content-container">
                    <Switch>
                        <Route exact path="/tasks" component={AddToDo} />
                        <Route path="/tasks/todo" component={AddToDo} />
                        <Route path="/tasks/all" component= {todoTable}/>
                    </Switch>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    const {toDo} = state.todoReducer;
    return { toDo}
}

export default withRouter(connect(mapStateToProps)(TodoTracker));