import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import './dist/style.css';

class Footer extends Component{
    render(){
        return(
            <div className="footer-flex">
          <footer className="footer">
             <p>© 2021 XenonStack Dashbaord.Developed by Nisha Ram.</p>
          </footer>
          </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}
export default withRouter(connect(mapStateToProps)(Footer));
