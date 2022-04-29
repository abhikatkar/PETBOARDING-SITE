import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addTodo, getError, getLoadding } from "../Redux/Todo/action";

export const Home = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const { todo, loadding, error } = useSelector((store) => store.todo);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    dispatch(getLoadding());
    axios
      .get("http://localhost:3004/data")
      .then(({ data }) => {
        dispatch(addTodo(data));
      })
      .catch(() => dispatch(getError()));
  }

  function sendData() {
    axios
      .post("http://localhost:3004/data", { title: text, status: false })
      .then(() => getData());
  }

  return loadding ? (
    "Loadding..."
  ) : error ? (
    "Error occured"
  ) : (
    <div>
      <h1>Home page</h1>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button onClick={sendData}>save</button>

      {todo.map((e) => {
        return (
          <div>
            <div>{e.title}</div>
            <div>status- {e.id}</div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};
