import { useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { addUser, resetUser } from "./redux/reducers/userReducer";
import A from "./components/A/A";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [mobNo, setMobNo] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    let payload = {
      name,
      age,
      mobNo,
    };
    dispatch(addUser(payload));
  };
  const reset = () => {
    dispatch(resetUser());
  };
  return (
    <div className="p-5 m-5">
      <h1 className="text-center">Home</h1>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Age
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Mob No
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={mobNo}
            onChange={(e) => setMobNo(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>{" "}
        &nbsp;&nbsp;&nbsp;
        <button type="button" className="btn btn-primary" onClick={reset}>
          Reset
        </button>
      </form>
      <A />
    </div>
  );
}

export default App;
