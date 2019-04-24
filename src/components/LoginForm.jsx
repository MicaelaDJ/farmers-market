import React from 'react';

function LoginForm(){
  return (
    <div>
      <form>
        <input
          type='text'
          id='username'
          placeholder='Username'/>
        <input
          type='text'
          id='password'
          placeholder='Password'/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}


export default LoginForm;
