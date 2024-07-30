import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Tasklist({ taskdata }) {

  const { _id, name, startDate, dueDate, priority } = taskdata;

  const [comment, setcomment] = useState("");
  const [allcomment, setallcomment] = useState([])

  const handlesent = (e) => {

    e.preventDefault();
    
    axios.post("http://localhost:5000/api/comment/addcomment",
      {
        taskid: _id,
        userid: "ljladsjcljdsnlc",
        comment: comment
      })
      .then((res) => {
        setallcomment([...allcomment, res.data]);
        setcomment("")
      })
      .catch((e) => console.log(e))

  }


  useEffect(() => {
    axios.get(`http://localhost:5000/api/comment/addcomment/${_id}`)
      .then((res) => { setallcomment(res.data) })
      .catch((e) => { console.log(e) })
  },
   // eslint-disable-next-line 
   [])




  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{startDate}</td>
        <td>{dueDate}</td>
        <td>{priority}</td>
      </tr>

      <tr>
        <td colSpan={4}>
          <form onSubmit={handlesent}>
            <input type="text" value={comment} onChange={(e) => setcomment(e.target.value)} className="form-control" placeholder="Add Comments" ></input>
          </form>
        </td>
      </tr>

      <tr >
        <td colSpan={4}>
          <div >
            {allcomment.map((list) => (
              <p key={list._id}>{list.comment}</p>
            ))}
          </div>
        </td>
      </tr>


    </>


  )
}

export default Tasklist