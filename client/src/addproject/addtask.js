import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios"
import Tasklist from '../listproject/tasklist';

function Addtask() {
  const { id, parentid } = useParams()
  const [addtask, setaddtask] = useState({
    name: "",
    priority: "",
    startDate: "",
    dueDate: "",
    parentId: parentid,
    tasklistId: id,
  });
  const [taskdata, settaskdata] = useState([]);

  const handlesubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/task/addtask", addtask)
      .then((res) => { settaskdata([...taskdata, res.data]) })
      .catch((err) => { console.log(err.message) })
  }

  const handlechange = (e) => {
    setaddtask({ ...addtask, [e.target.name]: e.target.value })
  }

  const gettask = () => {
    axios.get(`http://localhost:5000/api/task//gettask/${id}`)
      .then((res) => { settaskdata(res.data) })
      .catch((e) => { console.log(e) })
  }

  useEffect(() => {
    gettask()
  },
    // eslint-disable-next-line 
    [])


  return (<>
    <div>
      <form onSubmit={handlesubmit}>
        <div className='row g-3'>
          <div className='col-lg-5'>
            <label>Name</label>
            <input className="form-control" name='name' type='text' onChange={handlechange}></input>
          </div>
          <div className='col'>
            <label>StartDate </label>
            <input className="form-control" name='startDate' type='date' onChange={handlechange}></input>
          </div>
          <div className='col'>
            <label>DueDate</label>
            <input className="form-control" name='dueDate' type='date' onChange={handlechange}></input>
          </div>
          <div className='col-sm'>
            <label>Priority</label>
            <select className="form-select" name='priority' onChange={handlechange}>
              <option>select</option>
              <option value='Low'>Low</option>
              <option value='medium'>Medium</option>
              <option value='High'> High</option>
            </select>
          </div>
          <div className='col-sm'>
            <div className='invisible'>submit</div>          
            <input className="form-control btn btn-primary" type='submit' value="submit"></input>
          </div>

        </div>
      </form>
    </div>

    <table className="table">
      <thead>
        <tr>
          <th scope="col">PROJECT NAME</th>
          <th scope="col">START DATE</th>
          <th scope="col">DueDate</th>
          <th scope="col">Priority</th>

        </tr>
      </thead>
      <tbody>

        {taskdata.map((list) => (
          <Tasklist key={list._id} taskdata={list} />
        ))}

      </tbody>
    </table>



  </>
  )
}

export default Addtask