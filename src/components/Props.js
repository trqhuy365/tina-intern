import React from "react";

const Hello = (props) => {
  return (
    <React.Fragment>
      <h1>Hello {props.name}</h1>
      {props.children}
    </React.Fragment>
  );
};

const Greet = () => {
  alert("Greeting!");
};
export const PropsView = () => {
  return (
    <React.Fragment>
      <Hello name="Huy" />
      <Hello name="Vinh">
        <button onClick={() => Greet()}>Hi</button>
      </Hello>
      <Hello name="Khanh">
        <p>Children props</p>
      </Hello>
    </React.Fragment>
  );
};
