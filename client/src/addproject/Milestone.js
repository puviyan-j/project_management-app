import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';
import Milestonelist from '../listproject/Milestonelist';
import { useSelector } from "react-redux";
import { userselect } from '../slice/userslice';

function Milestone() {
    const { id } = useParams();
    const user = useSelector(userselect)

    const [milestonedata, setmilestonedata] = useState({
        name: "",
        dueDadte: "",
        startDate: "",
        projectid: id,
        creater: user.name,
        milestone: "inprocess"
    })

    const [milestonelist, setmilestonelist] = useState([])

    const handlechange = (e) => {
        setmilestonedata({ ...milestonedata, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:5000/api/mail/addmail", milestonedata)
            .then((res) => setmilestonelist([...milestonelist, res.data]))
            .catch((e) => console.log(e))

    }


    const getmilestonelist = () => {

        axios.get(`http://localhost:5000/api/mail/getmile/${id}`)
            .then((res) => { setmilestonelist(res.data) })
            .catch((e) => { console.log(e) })
    }

    useEffect(() => {
        getmilestonelist()
    },
        // eslint-disable-next-line
        []
    )

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='row g-3'>
                    <div className='col-xl-5'>
                        <label>Name</label>
                        <input type='text' className='form-control' name="name" value={milestonedata.name} onChange={handlechange}></input>
                    </div>
                    <div className='col-md'>
                        <div className='row'>

                            <div className='col-sm'>
                                <label>StartDate</label>
                                <input type='date' className='form-control ' name="startDate" value={milestonedata.startDate} onChange={handlechange}></input>
                            </div>

                            <div className='col-sm'>
                                <label>DueDate</label>
                                <input type='date' className='form-control' name="dueDadte" value={milestonedata.dueDadte} onChange={handlechange}></input>
                            </div>

                            <div className='col-sm'>
                                <label>MileStone</label>
                                <select className='form-select' name="milestone" aria-label="Large select example" onChange={handlechange}>
                                    <option value="inprocess">inprocess</option>
                                    <option value="complete">complete</option>
                                </select>
                            </div>

                            <div className='col-sm'>
                                <div className='invisible' >""</div>
                                <input className='btn  btn-primary form-control' type="submit" ></input>
                            </div>

                        </div>
                    </div>


                </div>
            </form>


            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">PROJECT NAME</th>
                        <th scope="col">START DATE</th>
                        <th scope="col">DueDate</th>
                        <th scope='col'>Milestone</th>
                        <th scope='col'>creater</th>
                        <th scope='col'></th>
                        <th scope='col'></th>
                    </tr>
                </thead>
                <tbody>

                    {milestonelist.map((milestonelist) => (
                        <Milestonelist getmilestonelist={getmilestonelist} key={milestonelist._id} parentid={id} milestonelist={milestonelist} />
                    ))}

                </tbody>
            </table>


        </>
    )
}

export default Milestone