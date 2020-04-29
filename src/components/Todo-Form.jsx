import React from "react";

const TodoForm = () => {
  return (
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
  );
};

export default TodoForm;
