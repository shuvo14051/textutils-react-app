import React from "react";

function Contact(props) {
  const myStyle = {
    backgroundColor: props.mode === "dark" ? "#13466e" : "white",
    color: props.mode === "dark" ? "white" : "#042743",
  };

  return (
    <div className="container mt-5 ">
      <div className="offset-md-3">
        <h2 className="text-center mb-4">Contact Us</h2>
        <form>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder="Enter your first name"
                style={myStyle}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder="Enter your last name"
                style={myStyle}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              id="phoneNumber"
              placeholder="Enter your phone number"
              style={myStyle}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email address"
              style={myStyle}
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              className="form-control"
              id="country"
              placeholder="Enter your country"
              style={myStyle}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              id="message"
              rows="5"
              placeholder="Enter your message"
              style={myStyle}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-block my-3 ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
