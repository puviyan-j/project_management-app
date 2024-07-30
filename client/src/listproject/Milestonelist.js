import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

function Milestonelist({ milestonelist, parentid, getmilestonelist }) {

    const [edit, setedit] = useState(true);
    const [milestonedata, setmilestonedata] = useState({
        milestone: "inprocess",
        startDate: '',
        dueDadte: ""
    })

    const handlechange = (e) => {
        setmilestonedata({ ...milestonedata, [e.target.name]: e.target.value })
    }

    const handledelete = () => {
        axios.delete(`http://localhost:5000/api/mail/getmile/delete/${milestonelist._id}`)
            .then((res) => { getmilestonelist();  })
            .catch((e) => { console.log(e) })
    }

    const handleupdate = () => {
        axios.put(`http://localhost:5000/api/mail/getmile/update/${milestonelist._id}`, milestonedata)
            .then((res) => {
                setedit(true);
                getmilestonelist();
            })
            .catch((e) => { console.log(e) })
    }

    return (
        <tr>

            <td><Link to={`/task/${milestonelist._id}/${parentid}`}>
                {milestonelist?.name}
            </Link></td>

            <td>{edit ? <>{milestonelist?.startDate}</> : <input name="startDate" value={milestonedata.startDate} onChange={handlechange} className='form-control-sm' type='date'></input>}</td>
            <td>{edit ? <>{milestonelist?.dueDadte}</> : <input name="dueDadte" value={milestonedata.dueDadte} onChange={handlechange} className='form-control-sm' type='date'></input>}</td>
            <td>{edit ? <>{milestonelist?.milestone}</> : <select name="milestone" onChange={handlechange} value={milestonedata.milestone} className='form-select-sm'>
                <option value={"inprocess"}>inprocess</option>
                <option value={'complete'}>complete</option>
            </select>}</td>
            <td>{milestonelist?.creater}</td>


            {edit ?
                <>
                    <td> <button className='btn btn-sm btn-outline-primary' onClick={() => (setedit(!edit))}>Edit</button> </td>
                    <td> <button className='btn btn-sm btn-outline-primary' onClick={handledelete}>delete</button> </td>
                    {/* onClick={handledelete} */}
                </>
                :
                <>
                    <td>
                        <button onClick={handleupdate} className='btn btn-sm btn-outline-primary'> update
                        </button>
                    </td>
                    <td>
                        <button className='btn btn-sm btn-outline-primary'
                            onClick={() => (setedit(!edit))}>cancel
                        </button>
                    </td>
                </>
            }
        </tr>
    )
}

export default Milestonelist