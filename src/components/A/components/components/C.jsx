import React from "react";
import { useSelector } from "react-redux";

function C() {
  const name = useSelector((state) => state.user.name);
  const age = useSelector((state) => state.user.age);
  const mobNo = useSelector((state) => state.user.mobNo);

  return (
    <div>
      <h4>C Component</h4>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Mob No: {mobNo}</p>
    </div>
  );
}

export default C;
