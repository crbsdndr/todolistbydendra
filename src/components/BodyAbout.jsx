import React, { useState } from "react";

const TodoList = () => {
  const [getTodos, setTodos] = useState([]);
  const [getNilaiInput, setNilaiInput] = useState("");
  const [getEdit, setEdit] = useState(null);

  const memperbarui = (e) => {
    setNilaiInput(e.target.value);
  };

  const interaksiTombol = (e) => {
    e.preventDefault();
    if (getNilaiInput.trim() !== "") {
      if (getEdit !== null) {
        const todosBaru = [...getTodos];
        todosBaru[getEdit] = getNilaiInput;
        setTodos(todosBaru);
        setEdit(null);
      } else {
        setTodos([...getTodos, getNilaiInput]);
      }
      setNilaiInput("");
    }
  };

  const editTodo = (index) => {
    setNilaiInput(getTodos[index]);
    setEdit(index);
  };

  const hapusTodo = (index) => {
    const confirmation = window.confirm(
      "Apakah Anda yakin ingin menghapus todo ini?"
    );
    if (confirmation) {
      const todosBaru = [...getTodos];
      todosBaru.splice(index, 1);
      setTodos(todosBaru);
    }
  };

  return (
    <div className="induk">
        <h2>By. Dendra</h2>
      <div className="center">
        <main>
          <h1>To-Do List</h1>
          <form onSubmit={interaksiTombol}>
            <input
              type="text"
              placeholder={
                getEdit !== null ? "Edit To-Do disini" : "Masukan To-Do Anda"
              }
              value={getNilaiInput}
              onChange={memperbarui}
            />
            <button type="submit" className="editTambahkan">
              {getEdit !== null ? "Edit" : "Tambahkan"}
            </button>
          </form>
          <ul>
            {getTodos.map((todo, index) => (
              <li key={index}>
                {todo}
                <span>
                  <button onClick={() => editTodo(index)} className="editHapus">
                    Edit
                  </button>
                  <button
                    onClick={() => hapusTodo(index)}
                    className="editHapus"
                  >
                    Hapus
                  </button>
                </span>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
};

export default TodoList;
