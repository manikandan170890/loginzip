import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const { username, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(username, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
    return (
                <Fragment>
                <div id="login">
                <h3 className="text-center text-white pt-5">Login form</h3>
                <div className="container">
                    <div
                    id="login-row"
                    className="row justify-content-center align-items-center"
                    >
                    <div id="login-column" className="col-md-6">
                        <div id="login-box" className="col-md-12">
                        <form id="login-form" className="form" action method="post">
                            <h3 className="text-center text-info">Login</h3>
                            <div className="form-group">
                            <label htmlFor="username" className="text-info">
                                Username:
                            </label>
                            <br />
                            <input
                                type="text"
                                name="username"
                                id="username"
                                value={username}
                                onChange={e=>onChange(e)}
                                className="form-control"
                            />
                            </div>
                            <div className="form-group">
                            <label htmlFor="password" className="text-info">
                                Password:
                            </label>
                            <br />
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="form-control"
                                value={password}
                                onChange={e=>onChange(e)}
                            />
                            </div>
                            <div className="form-group">
                            <input
                                type="submit"
                                name="submit"
                                className="btn btn-info btn-md"
                                defaultValue="submit"
                            />
                            </div>
                          
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
        </div>
        </Fragment>
    )
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };
  
  const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
  });
  
  export default connect(mapStateToProps, { login })(Login);
