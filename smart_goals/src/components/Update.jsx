import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Update() {
  const { id } = useParams();
  const [values, setValues] = useState({
    name: '',
    targetAmount: 0,
    savedAmount: 0
  });
  
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/goals/${id}`)
      .then(res => {
        setValues(res.data);
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleUpdate = (event) => {
    event.preventDefault();
    axios.put('http://localhost:3000/goals', values)
      .then(res => {
        navigate('/'); // navigate back after submission
      })
      .catch(err => console.log(err));
  }

  return (
    <div className='container'>
      <div className='form-container'>
        <h1>Update Goal</h1>
        <form onSubmit={handleUpdate}>
          <div className='form-group'>
            <label htmlFor='name'>Goal Name</label>
            <input 
              type='text' 
              name='name' 
              className='form-control' 
              placeholder='Enter goal'
              value={values.name}
              onChange={e => setValues({...values, name: e.target.value})}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='Target'>Target Amount</label>
            <input 
              type='number' 
              name='targetAmount' 
              className='form-control' 
              placeholder='Enter Amount'
              value={values.targetAmount}
              onChange={e => setValues({...values, targetAmount: e.target.value})}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='save'>Saved Amount</label>
            <input 
              type='number' 
              name='savedAmount' 
              className='form-control' 
              placeholder='Enter Amount'
              value={values.savedAmount}
              onChange={e => setValues({...values, savedAmount: e.target.value})}
            />
          </div>
          <div className='button-group'>
            <button className='btn btn-submit'>Update</button>
            <Link to="/" className='btn btn-back'>Back</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Update;