import React from 'react'

import { Link } from "react-router-dom"

function Projectlist({ listproject }) {


    return (<>
        <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">PROJECT NAME</th>
                            <th scope="col">START DATE</th>
                            <th scope="col">DueDate</th>
                            <th scope="col">createdBY</th>
                        </tr>
                    </thead>

            <tbody>
                {listproject.map((list) => (
                    <tr key={list._id}>

                        <td> <Link to={`/milestone/${list._id}`}>
                            {list.name}
                        </Link>
                        </td>
                        <td >{list.startDate ? list.startDate : "null"}</td>
                        <td >{list.dueDate ? list.dueDate : "null"}</td>
                        <td >{list.createdBY}</td>

                    </tr>
                ))}
            </tbody>
        </table>

    </>
    )
}

export default Projectlist

