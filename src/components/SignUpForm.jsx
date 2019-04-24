import React from 'react';

function SignUpForm(){
  return (
    <div>
      <form>
        <input
          type='text'
          id='username'
          placeholder='Username'/>
        <input
          type='text'
          id='email'
          placeholder='Email'/>  
        <input
          type='text'
          id='password'
          placeholder='Password'/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}


export default SignUpForm;
