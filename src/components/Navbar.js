import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';
import { withRouter } from 'react-router-dom';

class Navbar extends Component {
    onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }

    render() {
        const {isAuthenticated, user} = this.props.auth;
        const authLinks = (
            <ul className="navbar-nav ml-auto navbar-right">
                
                <a href="#" className="nav-link" onClick={this.onLogout.bind(this)}>
                <p  className="rounded-circle"
                    style={{ width: '25px',marginBottom:'0px'}} />
                     عزیز  {user.name} به صفحه خود خوش آمدی
            </a>
            <a href="#" className="nav-link" onClick={this.onLogout.bind(this)}>
                <p  className="rounded-circle"
                    style={{ width: '25px',marginBottom:'0px'}} />
                       مدیریت مطالب
            </a><a href="#" className="nav-link" onClick={this.onLogout.bind(this)}>
            <p  className="rounded-circle"
                style={{ width: '25px',marginBottom:'0px'}} />
                   مدیریت اطلاعات
        </a>
        <a href="#" className="nav-link nav-link-left" onClick={this.onLogout.bind(this)}>
                    <img src={user.avatar} alt={user.name} title={user.name}
                        className="rounded-circle"
                        style={{ width: '25px', marginRight: '5px'}} />
                            Logout
                </a>
            </ul>
        )
      const guestLinks = (
        <ul className="navbar-nav ml-auto navbar-right">
            <li className="nav-item ">
                <Link className="nav-link" to="/register">ثبت نام</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/login">ورود</Link>
            </li>
            <li className="nav-item ">
                <Link className="nav-link" to="/">به وبلاگ خوش آمدید</Link>
            </li>
        </ul>
      )
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{margin:'0px'}}>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {isAuthenticated ? authLinks : guestLinks}
                </div>
            </nav>
        )
    }
}
Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Navbar));