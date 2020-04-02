
import React from 'react'
// import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="page-header">
            <h1>Home</h1>
          </div>
          <div className="row">
            <div className="col-md-3">
              <img src={require("../../images/profilePicture.jpg")} alt="Julian Van Ost Profile" className="img-thumbnail"></img>
            </div>
            <div className="col-md-9">
              <p>
                Greetings and Welcome to my new page! My name is Julian and I hope you enjoy the content on this site.
              </p>
              <p>
                Please feel free to click, type, smash some links, inpect... Please, I only ask, please do not abuse my page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home