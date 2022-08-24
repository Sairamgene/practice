import React from 'react'



function Login() {
  return (
    <div>
      <div>
      <label style={{ color: 'blue' }}>user name</label>
      <input type='text' placeholder='enter your username'></input>
</div>

      <div>
      <label>Password</label>
      <input type='password' placeholder='enter your password'></input>
</div>
<button type='submit'>Login</button>

    </div>
  )
}

export default Login