import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const Register = ({setAlert, register }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        password2: '',
        email: '',
        firstname: '',
        lastname: '',
        gender: '',
        country: ''
    });

    const { username, password, password2, email, firstname, lastname, gender, country } = formData;
    
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = e => {
        console.log(formData);
        e.preventDefault();
        if(password !== password2){
          setAlert('Passwords do not match', 'danger'); 
        }else{
            register({username, email, password,  firstname, lastname, gender, country });
        }
    }

    return (
        <Fragment>
            <form onSubmit={e=> onSubmit(e)}>
                <div className="form-group">
                    <label >Username</label>
                    <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={e=>onChange(e)}
                    className="form-control"                  
                    placeholder="Enter Username"
                    />                   
                </div>
                <div className="form-group">
                    <label >Password</label>
                    <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={e=>onChange(e)}
                    className="form-control"                   
                    placeholder="Password"
                    />
                </div>
                <div className="form-group">
                    <label >Confirm Password</label>
                    <input
                    type="password"
                    name="password2"
                    value={password2}
                    onChange={e=>onChange(e)}
                    className="form-control"                   
                    placeholder="Password"
                    />
                </div>
                <div className="form-group">
                    <label >Email address</label>
                    <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={e=>onChange(e)}
                    className="form-control"
                    placeholder="Enter email"
                    />                  
                </div>
                <div className="form-group">
                    <label >Firstname</label>
                    <input
                    type="text"
                    className="form-control"
                    name="firstname"
                    value={firstname}
                    onChange={e=>onChange(e)}
                    placeholder="Enter Firstname"
                    />
                   
                </div>
                <div className="form-group">
                    <label >Lastname</label>
                    <input
                    type="text"
                    className="form-control"
                    name="lastname"
                    value={lastname}
                    onChange={e=>onChange(e)}                   
                    placeholder="Enter Lastname"
                    />                    
                </div>
                <div className="form-group">
                    <label >Gender</label>
                    <input
                    type="text"
                    name="gender"
                    value={gender}
                    onChange={e=>onChange(e)}
                    className="form-control"
                    id="exampleInputEmail1"                   
                    />                  
                </div>
                <div className="form-group">
                    <label >Country</label>
                    <input
                    type="text"
                    name="country"
                    value={country}
                    onChange={e=>onChange(e)}
                    className="form-control"
                    id="exampleInputEmail1"                   
                    />            
                   
                </div>

                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
                </form>

        </Fragment>
    )
}
Register.prototype = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired
}

export default connect(null, { setAlert, register })(Register);
