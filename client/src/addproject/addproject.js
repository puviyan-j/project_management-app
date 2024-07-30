import React, { useEffect, useState } from 'react'
import Projectlist from '../listproject/Projectlist';
import axios from 'axios';
import { useSelector } from "react-redux";
import { userselect } from '../slice/userslice';
import { useNavigate } from 'react-router-dom';

function Addproject() {
    const user = useSelector(userselect)
    const navigate = useNavigate();

    const [project, setproject] = useState({
        createdBY: user?.name,
        name: "",
        startDate: "",
        dueDate: ""
    })
    const [listproject, setlistproject] = useState([]);

    const handleref = () => {
        axios.get("http://localhost:5000/api")
            .then((res) => { setlistproject(res.data) })
            .catch((e) => { console.log(e.message) })
    }

    useEffect(() => {
        handleref()

        if (!user) {
            navigate("/")
        }
    }, []);


    const handlechange = (e) => {
        setproject({ ...project, [e.target.name]: e.target.value });

    }
    const handlesubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/addproject", project).then((res) => { handleref() }).catch((e) => {

        })
    }

    // console.log(project)
    return (
        <>
            <div className='container-fluid'>
                <form onSubmit={handlesubmit}>
                    <div className='row g-3'>
                        <div className='col-lg-6'>
                            <input name="name" placeholder='Add New Project ' className='form-control' value={project.name} onChange={handlechange} type='text'></input>
                        </div>
                        <div className='col-lg-4'>
                            <div className='row g-3'>

                                <div className='col-sm-6'>
                                    <input name="startDate" className='form-control' value={project.startDate} onChange={handlechange} type="date"></input>
                                </div>
                                <div className='col-sm-6'>
                                    <input name="dueDate" className='form-control' value={project.dueDate} onChange={handlechange} type="date"></input>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-2'>
                            <input className="btn btn-primary btn-md  form-control" type='submit' value="add"></input>
                        </div>
                    </div>
                </form>
            </div>


            <Projectlist listproject={listproject} />
        </>
    )
}

export default Addproject