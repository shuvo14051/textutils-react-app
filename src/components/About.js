import React from "react";

function About() {
  const myStyle = {
    width: 250,
    height: 100,
  };
  return (
    <>
      <div className="container bg-secondary text-white p-5 text-center my-5">
        <h2>About Us</h2>
        <p>
          "Textutils" is a versatile web application developed using React.js,
          designed to streamline text analysis and manipulation tasks. This
          user-friendly tool empowers users to effortlessly manage their text
          content with a range of useful features. With "Textutils," users have
          the power to seamlessly switch between upper and lower case
          formatting, providing flexibility in how text is presented. Need to
          refine the cleanliness of your text? "Textutils" can efficiently
          eliminate excessive spaces, ensuring a polished and well-organized
          output. For those keen on detailed analysis, the application offers
          precise character and word counting capabilities. This feature is
          particularly valuable for tasks that require specific text length
          constraints or for those seeking to gain insight into the structure
          and composition of their content. "Textutils" is an intuitive and
          powerful tool, designed with user convenience in mind. Whether you're
          a content creator, writer, or anyone dealing with text processing,
          "Textutils" simplifies the task at hand, offering a seamless and
          efficient experience. Say goodbye to manual text adjustments and hello
          to a smarter, more streamlined approach with "Textutils"!
        </p>
      </div>

      <div className="container my-5 text-center">
        <h3 className="my-4">Meet Out Team</h3>
        <div className="row">
          <div className="col">
            <div className="card">
              {/* <img
                className="card-img-top"
                src="hary.png"
                alt="Card image cap"
                style={myStyle}
              /> */}
              <div className="card-body">
                <h5 className="card-title">Coder Harry</h5>
                <p className="card-text">
                  Coder Hary is a senior developer with a wealth of experience
                  and a deep understanding of software development. With a track
                  record of delivering high-quality code and successfully
                  leading projects, Coder Hary brings a level of expertise that
                  is invaluable to the team. Their problem-solving skills and
                  ability to mentor junior developers make them a valuable asset
                  to the company.
                </p>
                <a href="#" className="btn btn-dark btn-block">
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              {/* <img
                className="card-img-top"
                src="shuvo.png"
                alt="Card image cap"
                style={myStyle}
              /> */}
              <div className="card-body">
                <h5 className="card-title">Younus Ahamed Shuvo</h5>
                <p className="card-text">
                  Younus Ahamed Shuvo, on the other hand, is a promising junior
                  developer who shows great potential and a strong enthusiasm
                  for learning. Their dedication to honing their skills and
                  their willingness to take on challenges is commendable. With
                  the guidance and mentorship of senior developers like Coder
                  Hary, Younus Ahamed Shuvo has the opportunity to grow into a
                  skilled developer.
                </p>
                <a href="#" className="btn btn-dark">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
