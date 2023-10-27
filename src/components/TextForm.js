import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClear = () => {
    let newText = "";
    setText(newText);
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  return (
    <>
      <div className=" container mb-3">
        <h1>{props.headline}</h1>
        {/* <label htmlFor="myBox" className="form-label"></label> */}
        <textarea
          value={text}
          name=""
          id="myBox"
          cols="20"
          rows="6"
          className="form-control"
          onChange={handleOnChange}
          placeholder="Enter you text here..."
        ></textarea>
        <button
          className="btn btn-outline-primary mt-2"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>

        <button
          className="btn btn-outline-success mx-2 mt-2"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>

        <button
          className="btn btn-outline-info mx-2 mt-2"
          onClick={handleClear}
        >
          Clear
        </button>
        <button
          className="btn btn-outline-secondary mx-2 mt-2"
          onClick={handleCopy}
        >
          Copy Text
        </button>

        <button
          className="btn btn-outline-danger mx-2 mt-2"
          onClick={handleExtraSpace}
        >
          Remove Extra Spaces
        </button>
      </div>

      <div className="container ">
        <h1>Text summary</h1>
        <p>
          <strong>{text.split(" ").length}</strong> words,{" "}
          <strong>{text.length}</strong> characters
        </p>
        <p>
          {" "}
          <em>{0.008 * text.split(" ").length}</em> minutes read.
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
};

TextForm.defaultProps = { headline: "Form Title" };

export default TextForm;
