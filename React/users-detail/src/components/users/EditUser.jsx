import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditUser() {
  const navigate = useNavigate();
  const { id } = useParams();
  const initUserData = {
    name: '',
    phone: '',
    email: '',
    password: '',
    address: {
      type: '',
      street: '',
      city: '',
      state: '',
      zipcode: '',
    },
    isChecked: false,
  };

  const [user, setUser] = useState(initUserData);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setUser({ ...user, [name]: type === 'checkbox' ? checked : value });
  };

  const userData = {
    name: user.name,
    phone: user.phone,
    email: user.email,
    password: user.password,
    address: {
      type: user.type ?? 'home',
      street: user.street,
      city: user.city,
      state: user.state,
      zipcode: user.zipcode,
    },
    isChecked: user.isChecked,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3333/users/${id}`, userData);
    console.log('USERDATA', userData);
    setUser(initUserData);
    navigate('/');
  };

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get('http://localhost:3333/users/' + id);
    console.log(result.data);
    setUser(result.data);
  };
  return (
    <div className='container'>
      <div className='py-4'>
        <h1>EditUser Page</h1>
        <form onSubmit={(e) => handleSubmit(e)} class='row g-3'>
          <div class='col-md-6'>
            <label for='inputEmail4' class='form-label'>
              Name
            </label>
            <input
              onChange={(e) => handleChange(e)}
              type='text'
              name='name'
              class='form-control'
              id='inputEmail4'
              value={user.name}
            ></input>
          </div>
          <div class='col-md-6'>
            <label for='inputEmail4' class='form-label'>
              Email
            </label>
            <input
              onChange={(e) => handleChange(e)}
              name='email'
              type='email'
              class='form-control'
              id='inputEmail4'
              value={user.email}
            ></input>
          </div>
          <div class='col-md-6'>
            <label for='inputEmail4' class='form-label'>
              Phone
            </label>
            <input
              onChange={(e) => handleChange(e)}
              type='tel'
              name='phone'
              class='form-control'
              id='inputEmail4'
              value={user.phone}
            ></input>
          </div>
          <div class='col-md-6'>
            <label for='inputPassword4' class='form-label'>
              Password
            </label>
            <input
              onChange={(e) => handleChange(e)}
              type='password'
              name='password'
              class='form-control'
              id='inputPassword4'
              value={user.password}
            ></input>
          </div>
          <div class='col-12'>
            <label for='inputAddress' class='form-label'>
              Address
            </label>
            <input
              onChange={(e) => handleChange(e)}
              type='text'
              name='street'
              class='form-control'
              id='inputAddress'
              placeholder='1234 Main St'
              value={user.address.street}
            ></input>
          </div>

          <fieldset class='row mb-3'>
            <legend class='col-form-label col-sm-2 pt-0'>Address type</legend>
            <div class='col-sm-10'>
              <div class='form-check'>
                <input
                  onChange={(e) => handleChange(e)}
                  class='form-check-input'
                  type='radio'
                  name='type'
                  id='gridRadios1'
                  value={user.address.type}
                  checked
                ></input>
                <label class='form-check-label' for='gridRadios1'>
                  Home
                </label>
              </div>
              <div class='form-check'>
                <input
                  onChange={(e) => handleChange(e)}
                  class='form-check-input'
                  type='radio'
                  name='type'
                  id='gridRadios2'
                  value={user.address.type}
                ></input>
                <label class='form-check-label' for='gridRadios2'>
                  Office
                </label>
              </div>
            </div>
          </fieldset>
          <div class='col-md-6'>
            <label for='inputCity' class='form-label'>
              City
            </label>
            <input
              onChange={(e) => handleChange(e)}
              type='text'
              name='city'
              class='form-control'
              id='inputCity'
              value={user.address.city}
            ></input>
          </div>
          <div class='col-md-4'>
            <label for='inputState' class='form-label'>
              State
            </label>
            <select
              onChange={(e) => handleChange(e)}
              id='inputState'
              name='state'
              class='form-select'
              value={user.address.state}
            >
              <option selected>Choose...</option>
              <option value='Maharastra'>Maharastra</option>
              <option value='Karnataka'>Karnataka</option>
              <option value='Keral'>Keral</option>
              <option value='Andra'>Andra</option>
            </select>
          </div>
          <div class='col-md-2'>
            <label for='inputZip' class='form-label'>
              Zip
            </label>
            <input
              onChange={(e) => handleChange(e)}
              type='text'
              name='zipcode'
              class='form-control'
              id='inputZip'
              value={user.address.zipcode}
            ></input>
          </div>
          <div class='col-12'>
            <div class='form-check'>
              <input
                onChange={(e) => handleChange(e)}
                class='form-check-input'
                type='checkbox'
                id='gridCheck'
                name='isChecked'
              ></input>
              <label class='form-check-label' for='gridCheck'>
                Agree with our TC's
              </label>
            </div>
          </div>
          <div class='col-12'>
            <button type='submit' class='btn btn-warning'>
              Update User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditUser;
