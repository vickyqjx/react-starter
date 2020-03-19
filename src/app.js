import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

class HelloMessage extends React.Component {
  render() {
    return (<div>
      Hello {this.props.name}
      <Example />
    </div>);
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<HelloMessage name="Vicky" />, mountNode);
