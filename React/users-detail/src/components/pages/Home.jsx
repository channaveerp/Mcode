import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get('http://localhost:3333/users');
    setUsers(result.data.reverse());
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3000/users/edit/${5}`);
  };
  return (
    <div className='container'>
      <div className='py-4'>
        <h1>Home Page</h1>
      </div>
      <div className='container'>
        <div className='row bg-light text-center border'>
          <div className='col-1 border'>SL NO</div>
          <div className='col-3 border'>Name</div>
          <div className='col-3 border'>Email</div>
          <div className='col-3 border'>Phone</div>
          <div className='col-2 border'>Action</div>
        </div>
        {/*  */}
        {users?.map((user, index) => (
          <div key={user.id} className='row text-center'>
            <div className='col-1 border'>{index + 1}</div>
            <div className='col-2 border'>{user.name}</div>
            <div className='col-3 border'>{user.email}</div>
            <div className='col-3 border'>{user.phone}</div>
            <div className='col-3 border'>
              <div>
                <Link className='btn btn-primary mr-2' to='/'>
                  View
                </Link>
                <Link
                  className='btn btn-outline-primary mr-2'
                  to={`/users/edit/${user.id}`}
                >
                  Edit
                </Link>
                <div
                  className='btn btn-danger mr-2'
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
