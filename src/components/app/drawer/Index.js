import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './dist/style.css';
import NavItem from './NavItem';
import NavSubItem from './NavSubItem';
import NavItemGroup from './NavItemGroup';
import { handleDrawerToggleChange } from '../../../actions';

class Drawer extends Component{
    componentDidMount() {
        const slidedrop = document.querySelectorAll(".drawer-navmenu");
        for (const slideitem of slidedrop) {
          const items = slideitem.querySelectorAll(".drawer-item");
          for (const item of items) {
            const head = item.querySelector(".drawer-link");
            head.addEventListener('click', () => {
              for (const otherPanel of items) {
                if (otherPanel !== item) {
                  otherPanel.classList.remove('open');
                }
              }
              item.classList.toggle('open');
            });
          }
        }
    }
    handleDrawerToggle(e){
        this.props.dispatch(handleDrawerToggleChange(!this.props.toggleStatus));
      }
    render(){
        return(
            <aside className={this.props.toggleStatus ? "drawer-wrapper" : "drawer-wrapper closed"}>
                <nav className="drawer-navigation">
                    <ul className="drawer-navmenu">
                        <NavItem navMenuTitle="Task Tracker" navMenuImage={'fttodo.svg'} navMenuIcon={""} navURL="/tasks/todo"></NavItem>
                        <NavItem navMenuTitle="Todos" navMenuImage={'todo.jpeg'} navMenuIcon={""} navURL="/tasks/all"></NavItem>
                    </ul>
                </nav>
            </aside>
        )
    }
}

function mapStateToProps(state) {
    const {toggleStatus} = state.appReducer;
    return {toggleStatus}
}
export default withRouter(connect(mapStateToProps)(Drawer));
