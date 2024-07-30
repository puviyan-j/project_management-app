import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { login } from '../../slice/userslice';

function Login() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [logindata, setlogindata] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setlogindata({ ...logindata, [e.target.name]: e.target.value })
    }


    const handlesubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:5000/api/user/login", logindata)
            .then((res) => {
                
                dispatch(login(res.data))
                navigate("/project")
            })
            .catch((err) => { console.log(err) })
    }

    return (
        <div className='container '>
            <div className='container-fluid vh-100 d-flex justify-content-center align-items-center'>
                <div >
                    <div className='row'>
                        <h2 className='text-center'>Login</h2>
                        <form onSubmit={handlesubmit}>

                            <div className='row g-3 m-1'>
                                <div className='col'>
                                    <input name="email" value={logindata.email} className='form-control' placeholder='Email' type='text' onChange={handleChange}></input>
                                </div>
                            </div>

                            <div className='row g-3 m-1'>
                                <div className='col'>
                                    <input name="password" value={logindata.password} className='form-control' placeholder='Password' type='password' onChange={handleChange}></input>
                                </div>
                            </div>

                            <div className='row g-3 m-1'>
                                <div className='col'>
                                    <input className='w-100 btn btn-primary' type='submit' value={"Signup"}></input>
                                </div>
                            </div>

                        </form>
                        <p className='mt-1 text-center'>Don't have Account <span><Link to="/signup">Signup ?</Link></span></p>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Login