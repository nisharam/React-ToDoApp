import React, { Component } from 'react';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/app/header/header';
import Drawer from '../components/app/drawer/Index';
import PageNotFound from '../components/page-not-found/page-not-found';
import Footer from '../components/app/footer/footer';
import TodoTracker from '../container/todoTracker/index';


class RouteComponent extends Component {
    render() {
        return (
                <div className="dashboard-wrappper">
                    <Header />
                    <Drawer/>
                    
                    <div className={this.props.toggleStatus ? "dashboard-content-body" : "dashboard-content-body closed"}>
                        <main className="main-content-wrapper">
                            <Switch>
                                <Route path="/tasks" component={TodoTracker} />
                                <Route exaxct path="/" component={PageNotFound} />
                            </Switch>
                        </main>
                    </div>
                    <Footer />
                </div>
        )
    }
}
function mapStateToProps(state) {
    const {toggleStatus} = state.appReducer;
    const {auth} = state.LoginReducer;
    return {toggleStatus,auth}
}

export default withRouter(connect(mapStateToProps)(RouteComponent));