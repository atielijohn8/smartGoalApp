import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Read() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  
  useEffect(() => {
    axios.get(`http://localhost:3000/goals/${id}`)
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, [id]);

  return (
    <div className="container">
      <div className="detail-container">
        <h3>Goal Details</h3>
        <div className="detail-group">
          <strong>Name: {data.name}</strong>
        </div>
        <div className="detail-group">
          <strong>Target Amount: {data.targetAmount}</strong>
        </div>
        <div className="detail-group">
          <strong>Saved Amount: {data.savedAmount}</strong>
        </div>
        <div className="button-group">
          <Link to={`/Update/${id}`} className="btn btn-edit">Edit</Link>
          <Link to="/" className="btn btn-back">Back</Link>
        </div>
      </div>
    </div>
  );
}

export default Read;