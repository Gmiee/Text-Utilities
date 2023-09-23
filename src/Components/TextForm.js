import React, { useState } from "react";

const TextForm = (props) => {

  const handleUpCase = () => {
    let newText = Text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case", "success")
  };
  const handlelowCase = () => {
    let newText = Text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case", "success")
  };
  const handlefCase = () => {
    setText('');
    props.showAlert("Textarea Cleared", "success")
  };
  const handleOnchange = (e) => {
    setText(e.target.value);
  };
  const handleSpaces = () => {
    let newText = Text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed", "success")
  };
  const handleCopy = ()=>{
    var text = document.getElementById("myBox")
    text.select();
    text.setSelectionRange(0, 9999)
    navigator.clipboard.writeText(text.value)
    props.showAlert("Text Copied", "success")

  }

  const [Text, setText] = useState("");

  return (
    <>
      <div className="mb-3 mt-3">
        <h2>{props.Heading}</h2>
        <textarea
          className="form-control"
          value={Text}
          onChange={handleOnchange}
          style={{
            backgroundColor: props.mode === `dark` ? `#212529` : `white`,
            color: props.mode === `dark` ? `white` : `black`,
          }}
          id="myBox"
          rows="8"
        ></textarea>
        <button
          onClick={handleUpCase}
          type="button"
          className="btn btn-primary mt-2 mx-1 my-1 px-2"
        >
          UPPER CASE
        </button>
        <button
          onClick={handlelowCase}
          type="button"
          className="btn btn-primary mt-2 mx-1 my-1 px-2"
        >
          Lower Case
        </button>
        <button
          onClick={handlefCase}
          type="button"
          className="btn btn-primary mt-2 mx-1 my-1 px-2"
        >
          Clear Textarea
        </button>
        <button
          onClick={handleSpaces}
          type="button"
          className="btn btn-primary mt-2 mx-1 my-1 px-2"
        >
          Remove Extra Spaces
        </button>
        <button
          onClick={handleCopy}
          type="button"
          className="btn btn-primary mt-2 mx-1 my-1 px-2"
        >
          Copy Text
        </button>
      </div>

      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {Text.split(" ").length} words and {Text.length} Char
        </p>
        <p> {0.008 * Text.split(" ").length} Minutes takes to read </p>
        <h2>Preview</h2>
        <p>{Text}</p>
      </div>
    </>
  );
};
export default TextForm;
