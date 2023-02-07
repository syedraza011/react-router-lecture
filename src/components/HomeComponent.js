import React, { useState } from "react";

function HomeComponent() {
  const [textContent, setTextContent] = useState('Welcome to our website!');
    return (
      <React.Fragment>
        <h1>Home Component</h1>

        <div>
          {textContent}
        </div>
      </React.Fragment>
    );
  }

  export default HomeComponent;
