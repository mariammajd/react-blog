import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { registerUser } from '../actions/authentication';
import classnames from 'classnames';

class Register extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirm: '',
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirm: this.state.password_confirm,
            username:this.state.username,
            mobile:this.state.mobile,
            sex:this.state.sex,
            lastname:this.state.lastname

        }
        this.props.registerUser(user, this.props.history);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    render() {
        const { errors } = this.state;
        return(
        <div className="container" style={{ marginTop: '50px', width: '700px'}}>
            <h2 style={{marginBottom: '40px'}}>Registration</h2>
            <form onSubmit={ this.handleSubmit }>
                <div className="form-group">
                    <input
                    type="text"
                    placeholder="Name"
                    className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.name
                    })}
                    name="name"
                    onChange={ this.handleInputChange }
                    value={ this.state.name }
                    />
                    {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
                </div>
                <div className="form-group">
                <input
                type="text"
                placeholder="Last Name"
                className={classnames('form-control form-control-lg', {
                    'is-invalid': errors.lastname
                })}
                name="lastname"
                onChange={ this.handleInputChange }
                value={ this.state.lastname }
                />
                {errors.lastname && (<div className="invalid-feedback">{errors.lastname}</div>)}
            </div> <div className="form-group">
            <input
            type="number"
            placeholder="mobile"
            className={classnames('form-control form-control-lg', {
                'is-invalid': errors.mobile
            })}
            name="mobile"
            onChange={ this.handleInputChange }
            value={ this.state.mobile }
            />
            {errors.mobile && (<div className="invalid-feedback">{errors.mobile}</div>)}
        </div> <div className="form-group">
        <input
        type="text"
        placeholder="username"
        className={classnames('form-control form-control-lg', {
            'is-invalid': errors.username
        })}
        name="username"
        onChange={ this.handleInputChange }
        value={ this.state.username }
        />
        {errors.username && (<div className="invalid-feedback">{errors.username}</div>)}
    </div> <div className="form-group">
    <input
    type="text"
    placeholder="sex"
    className={classnames('form-control form-control-lg', {
        'is-invalid': errors.sex
    })}
    name="sex"
    onChange={ this.handleInputChange }
    value={ this.state.sex }
    />
    {errors.sex && (<div className="invalid-feedback">{errors.sex}</div>)}
</div>
                <div className="form-group">
                    <input
                    type="email"
                    placeholder="Email"
                    className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.email
                    })}
                    name="email"
                    onChange={ this.handleInputChange }
                    value={ this.state.email }
                    />
                    {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                </div>
                <div className="form-group">
                    <input
                    type="password"
                    placeholder="Password"
                    className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.password
                    })}
                    name="password"
                    onChange={ this.handleInputChange }
                    value={ this.state.password }
                    />
                    {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                </div>
                <div className="form-group">
                    <input
                    type="password"
                    placeholder="Confirm Password"
                    className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.password_confirm
                    })}
                    name="password_confirm"
                    onChange={ this.handleInputChange }
                    value={ this.state.password_confirm }
                    />
                    {errors.password_confirm && (<div className="invalid-feedback">{errors.password_confirm}</div>)}
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                        Register User
                    </button>
                </div>
            </form>
        </div>
        )
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(mapStateToProps,{ registerUser })(withRouter(Register))