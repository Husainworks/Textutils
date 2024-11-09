import React, { useState } from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To Uppercase", "success");
  }

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To Lowercase", "success");
  }

  const handleTitleClick = () =>{
    let newText = text.replace(/\b\w/g, char => char.toUpperCase());
    setText(newText);
    props.showAlert("Converted to Title Case", "success")
  }

  const handleClearText = () => {
    setText("")
    props.showAlert("Cleared", "success");
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied Successfully", "success");
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra spaces successfully", "success");
  }

  return (
    <>
      <div className="container">
        <h1 className='mb-3'>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{ backgroundColor: props.mode === "light" ? "black" : "white", color: props.mode === "light" ? "white" : "black" }}></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-success mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length === 0} className="btn btn-success mx-1 my-1" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length === 0} className="btn btn-success mx-1 my-1" onClick={handleTitleClick}>
          Convert to Titlecase
        </button>
        <button disabled={text.length === 0} className="btn btn-success mx-1 my-1" onClick={handleClearText}>
          Clear Text
        </button>
        <button disabled={text.length === 0} className="btn btn-success mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length === 0} className="btn btn-success mx-1 my-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{text.split(/\s/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
        <p>{0.008 * (text.split(" ").length - 1)} minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing To Preview!"}</p>
      </div>
    </>
  )
}