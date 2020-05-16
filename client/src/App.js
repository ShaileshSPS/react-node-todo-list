import React, { Fragment } from 'react';
import './App.css';

//components
import TodoCreate from "./components/create";
import TodoList from "./components/list";

function App() {
  return (
    <Fragment>
      <div className="container">
        <TodoCreate />
        <TodoList />
      </div>
    </Fragment>
  );
}

export default App;
