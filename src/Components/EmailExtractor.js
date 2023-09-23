import React, { useState } from "react";

const EmailExtractor = (props) => {
  const [emails, setemails] = useState([]);

  const receivePastedEmails = (event) => {
    const passedText = event.clipboardData.getData("Text");
    const collectedEmails = passedText.match(
      /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/g
    );
    setemails(collectedEmails);
  };

  const newMails= ()=>{
    let text = emails
    navigator.clipboard.writeText(text);
    props.showAlert("Email Copied", "success")
  }
  return (
    <>
      <div className="container my-2">
        <h2>Email Extractor</h2>
        <textarea
          onPaste={(event) => receivePastedEmails(event)}
          className="form-control"
          style={{
            backgroundColor: props.mode === `dark` ? `#212529` : `white`,
            color: props.mode === `dark` ? `white` : `black`,
          }}
          id="exampleFormControlTextarea1"
          rows="9"
          placeholder="Paste your text here to extract emails"
        ></textarea>
      </div>

      <div className="text" id="Mails">
        {emails.map((email,index) =><li key={index}>{email}</li>

        )}
      </div>

        <button type="button" onClick={newMails} className="btn btn-primary mt-3">Copy Email</button>

    </>
  );
};

export default EmailExtractor;
