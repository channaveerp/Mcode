import React from 'react';

function Contact() {
  return (
    <div className='container'>
      <div className='py-4'>
        <h1>Contact Page</h1>
        <form class='row g-3'>
          <div class='col-md-6'>
            <label for='inputEmail4' class='form-label'>
              Name
            </label>
            <input type='text' class='form-control' id='inputEmail4'></input>
          </div>
          <div class='col-md-6'>
            <label for='inputEmail4' class='form-label'>
              Email
            </label>
            <input type='email' class='form-control' id='inputEmail4'></input>
          </div>
          <div class='col-md-6'>
            <label for='inputEmail4' class='form-label'>
              Phone
            </label>
            <input type='tel' class='form-control' id='inputEmail4'></input>
          </div>
          <div class='col-md-6'>
            <label for='inputPassword4' class='form-label'>
              Password
            </label>
            <input
              type='password'
              class='form-control'
              id='inputPassword4'
            ></input>
          </div>
          <div class='col-12'>
            <label for='inputAddress' class='form-label'>
              Address
            </label>
            <input
              type='text'
              class='form-control'
              id='inputAddress'
              placeholder='1234 Main St'
            ></input>
          </div>

          <fieldset class='row mb-3'>
            <legend class='col-form-label col-sm-2 pt-0'>Address type</legend>
            <div class='col-sm-10'>
              <div class='form-check'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='gridRadios'
                  id='gridRadios1'
                  value='option1'
                  checked
                ></input>
                <label class='form-check-label' for='gridRadios1'>
                  Home
                </label>
              </div>
              <div class='form-check'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='gridRadios'
                  id='gridRadios2'
                  value='option2'
                ></input>
                <label class='form-check-label' for='gridRadios2'>
                  Office
                </label>
              </div>
              <div class='form-check disabled'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='gridRadios'
                  id='gridRadios3'
                  value='option3'
                  disabled
                ></input>
                <label class='form-check-label' for='gridRadios3'>
                  Third disabled radio
                </label>
              </div>
            </div>
          </fieldset>
          <div class='col-md-6'>
            <label for='inputCity' class='form-label'>
              City
            </label>
            <input type='text' class='form-control' id='inputCity'></input>
          </div>
          <div class='col-md-4'>
            <label for='inputState' class='form-label'>
              State
            </label>
            <select id='inputState' class='form-select'>
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class='col-md-2'>
            <label for='inputZip' class='form-label'>
              Zip
            </label>
            <input type='text' class='form-control' id='inputZip'></input>
          </div>
          <div class='col-12'>
            <div class='form-check'>
              <input
                class='form-check-input'
                type='checkbox'
                id='gridCheck'
              ></input>
              <label class='form-check-label' for='gridCheck'>
                Agree with our TC's
              </label>
            </div>
          </div>
          <div class='col-12'>
            <button type='submit' class='btn btn-primary'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
