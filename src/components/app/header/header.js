import React, {Component} from 'react';
import { withRouter, NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import './header.css';
import { handleDrawerToggleChange } from '../../../actions/index';

class Header extends Component{
  toggleHeader(e) {
    const navMenu = document.querySelectorAll(".navigation-menu");
    for (let i = 0; i < navMenu.length; i++) {
        navMenu[i].classList.toggle("Navbar__ToggleShow");
    }
}
handleDrawerToggle(e){
    this.props.dispatch(handleDrawerToggleChange(!this.props.toggleStatus));
  }
  componentWillMount(){
  }
    render(){
        return(
            <header className="header-section header-fixed" id="header">
              
                <nav id="navigation-bar" className={this.props.toggleStatus ? "navigation-bar" : "navigation-bar closed"}>
                    <div className="brand-wrapper">
                        <div className="brand-image">
                            {/* <NavLink to="/overview" className="brand-logo"> */}
                                <figure> 
                                    <img src={require('./dist/xenonstack-logo-big.png')} alt="XenonStack" className="logo-md" />
                                    <img src={require('./dist/xenonstack-logo-xs.png')} className="logo-xs" alt="XenonStack" />
                                </figure>
                            {/* </NavLink> */}
                        </div>
                        <div className="drawer-toggle" id="drawer-toggle" onClick={this.handleDrawerToggle.bind(this)}>
                            <i className="material-icons">menu</i>
                        </div>
                    </div>
                    <div className="toggle-topMenu"  onClick={this.toggleHeader.bind(this)} id="toggle-topMenu">
                        <div className="one"></div>
                        <div className="two"></div>
                        <div className="three"></div>
                    </div>
                </nav>
            
        </header>
        )
    }
}

function mapStateToProps(state) {
    const {toggleStatus} = state.appReducer;
    return {toggleStatus}
}

export default withRouter(connect(mapStateToProps)(Header));
