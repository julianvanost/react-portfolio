import React, { useState, useEffect } from 'react'

const Contact = () => {
  //must bring in useState in order to have a state in React hooks
  //useState returns an array, first being what is in the state, second being a function
  //to access count, syntax woould be countState.count
  //instead of setState, the function is now called setCountState
  const [countState, setCountState] = useState({
    username: '',
    email: '',
    message: '',
    usernameInput: '',
    messageInput: '',
    emailInput: '',
  })

  const handleInputChange = event => {
    setCountState({ ...countState, [event.target.name]: event.target.value })
  }
  const handleSubmit = event => {
    event.preventDefault()
    setCountState({ ...countState, username: countState.usernameInput, email: countState.emailInput, message: countState.messageInput, usernameInput: '', emailInput: '', messageInput: '' })
  }
  useEffect(() => {
  }, [countState.usernameInput])

  return (
    <main className="container mainStyle">
      <div className="row">
        <h1 className="heading col-12">
          Contact
        </h1>
        <div className="col-12">
          <hr></hr>
        </div>
        <div className="col-12">
          <form>
            <div className="row">
              <div className="form-group col">
                <label htmlFor="formGroupExampleInput">Name</label>
                <input
                  className="form-control"
                  id="formGroupExampleInput"
                  onChange={handleInputChange}
                  type="text"
                  name="usernameInput"
                  value={countState.usernameInput}
                  placeholder='Name'
                ></input>
              </div>
              <div className="form-group col">
                <label htmlFor="email">Email</label>
                <input
                  className="form-control"
                  id="email"
                  onChange={handleInputChange}
                  type="text"
                  name="emailInput"
                  value={countState.emailInput}
                  placeholder="example@gmail.com"
                ></input>
              </div>
            </div>
            <div className="form-group">
              <label
                htmlFor="message">Message</label>
              <textarea
                className="form-control"
                onChange={handleInputChange}
                id="message"
                type='text'
                name="messageInput"
                value={countState.messageInput}
                rows="3"
                placeholder="Enter your message here"
              ></textarea>
            </div>
            <br></br>
            <button className='btn btn-outline-primary btn-waves-effect'
              onClick={handleSubmit}
            >Submit</button>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Contact