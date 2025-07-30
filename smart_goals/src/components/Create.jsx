import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Create() {
  const [values, setValues] = useState({
    name: '',
    targetAmount: 0,
    savedAmount: 0
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/goals', values)
    .then(res => {
        navigate('/'); // navigate back after submission
      })
      .catch(err => console.log(err));
  }

  return (
    <div className='container'>
      <div className='form-container'>
        <h1>Add Goal</h1>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='name'>Goal Name</label>
            <input 
              type='text' 
              name='name' 
              className='form-control' 
              placeholder='Enter goal' 
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
              onChange={e => setValues({...values, TargetAmount: e.target.value})} 
            />
          </div> 
          <div className='form-group'>
            <label htmlFor='save'>Saved Amount</label>
            <input 
              type='number' 
              name='savedAmount' 
              className='form-control' 
              placeholder='Enter Amount'
              onChange={e => setValues({...values, savedAmount: e.target.value})} 
            />
          </div>
          <div className='button-group'>
            <button className='btn btn-submit'>Submit</button>
            <Link to="/" className='btn btn-back'>Back</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Create;