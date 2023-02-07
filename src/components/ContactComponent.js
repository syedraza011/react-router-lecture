import React, { useState } from "react";

function ContactComponent() {
  const [textContent, setTextContent] = useState('Please reach out by phone or email!');

    return (
      <React.Fragment>
        <h1>Contact Component</h1>

        <div>
          {textContent}
        </div>
      </React.Fragment>
    );
  }

  export default ContactComponent;
