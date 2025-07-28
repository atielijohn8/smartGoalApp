import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link, useNavigate} from 'react-router-dom'

function Home() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:3000/goals')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, []);
    
     const handleDelete = (id) => {
        const confirm = window.confirm("would you like to delete");
        if(confirm){
            axios.delete("http://localhost:3000/goals/"+id)
            .then(res => {
                navigate('/');
            }).catch(err => console.log(err));
        }
    }
    return (
        <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
            <h1>List of Goals</h1>
            <div className="w-75 rounded bg-white border shadow p-3">
                <div className="d-flex justify-content-end">
                    <Link to='/create' className="btn-btn-success">Add +</Link>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>name</th>
                            <th>TargetAmount</th>
                            <th>SavedAmount</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((d) => (
                            <tr key={d.id}>
                                <td>{d.id}</td>
                                <td>{d.name}</td>
                                <td>{d.targetAmount}</td>
                                <td>{d.savedAmount}</td>
                                <td>
                                    <div className="d-flex gap-2">
                                        <Link to={`/read/${d.id}`} className="btn btn-primary btn-sm">Read</Link>
                                        <Link to={`update/$d.id`} className="btn btn-primary btn-sm">Edit</Link>
                                        <button onClick={e => handleDelete(d.id)} className="btn btn-danger btn-sm">Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

   
}

export default Home;