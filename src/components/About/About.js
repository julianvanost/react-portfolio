import React from 'react'


const About = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="page-header">
            <h1>About Me</h1>
          </div>
          <div class="row">
            <div class="col-md-3">
              <img src={require("../../images/profilePicture.jpg")} alt="Julian Van Ost Profile" className="img-thumbnail"></img>
            </div>
            <div class="col-md-9">
              <p>
                Julian has experience in front-end web development, using HTML, CSS, jQuery, and more. Most of his
                experience in previous jobs pertained to a tech stack that was outdated by at least a few years. He is
                currently working on catching up and mastering the new technologies as well as learning the newer
                frameworks. Another goal is to become proficient in full-stack development for web applications.
            </p>
              <p>
                In the long run, Julian intends on working his hardest on developing these skills in order to continue a
                career in web design and development.
            </p>
              <p>
                As of January 2020, he is proud to be taking a web development bootcamp at the esteemed Univeristy of California Irvine. He hopes to Zot-Zot his way to becoming an official Anteater during this journey.
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About