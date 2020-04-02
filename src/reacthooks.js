import React, { useState, useEffect } from 'react'

const Contact = () => {
  //must bring in useState in order to have a state in React hooks
  //useState returns an array, first being what is in the state, second being a function
  //to access count, syntax woould be countState.count
  //instead of setState, the function is now called setCountState
  const [countState, setCountState] = useState({
    username: '',
    email: '',
    usernameInput: '',
    emailInput: '',
  })


  const handleInputChange = event => {
    setCountState({ ...countState, [event.target.name]: event.target.value })
  }
  const handleSubmit = event => {
    event.preventDefault()
    setCountState({ ...countState, username: countState.usernameInput, email: countState.emailInput, usernameInput: '', emailInput: '' })
  }

  // useEffect is a function that takes in a function and an array. You pass the variables in your state in your array, and whatever is wrriten in the function will run whenever any of the variables listed in the array are updated

  // by Default, this always runs at the very beginning because the state needs to be initialized.
  // if nothing is passed in the array, then it will run onece at the beginning of the, similar to a componentDidMount()
  useEffect(() => {

  }, [countState.usernameInput])
  return (
    <>
      <h1>Sign In Form</h1>
      <form>
        <label htmlFor="username">Username</label>
        <input onChange={handleInputChange} type="text" name="usernameInput" value={countState.usernameInput}></input>
        <br></br>
        <label htmlFor="email">Email</label>
        <input onChange={handleInputChange} type="text" name="emailInput" value={countState.emailInput}></input>
        <br></br>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </>
  )
}

export default Contact