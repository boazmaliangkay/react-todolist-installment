import React from "react";
import "./styles.css";
import Paper from "./components/Paper";

export default function App() {
  return (
    <Paper>
      <section className="header">
        <button className="header-btn main-black-color">Add</button>
        <h1 className="header-title">Todo Lists</h1>
        <button className="header-btn main-red-color">Clear</button>
      </section>

      <section className="add">
        <form className="add-form">
          <input
            type="text"
            placeholder="Write"
            className="add-input main-black-color"
          />
          <button className="add-btn main-black-color">Add</button>
        </form>
      </section>

      <section className="todos">
        <div className="todo">
          <span className="todo-text">React</span>
        </div>
        <div className="todo">
          <span className="todo-text">React</span>
        </div>
        <div className="todo">
          <span className="todo-text">React</span>
        </div>
        <div className="todo">
          <span className="todo-text">React</span>
        </div>
        <div className="todo">
          <span className="todo-text">React</span>
        </div>
        <div className="todo">
          <span className="todo-text">React</span>
        </div>
        <div className="todo">
          <span className="todo-text">React</span>
        </div>
        <div className="todo">
          <span className="todo-text">React</span>
        </div>
        <div className="todo">
          <span className="todo-text">React</span>
        </div>
      </section>
    </Paper>
  );
}
