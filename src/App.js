import React, { useState } from 'react';
import TodoItem from './component/todo';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (event) => {
    event.preventDefault();
    const taskInput = event.target.elements.task;
    const newTask = taskInput.value.trim();
    if (newTask !== '') {
      setTasks([...tasks, newTask]);
      taskInput.value = '';
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
      <div className="todo-list">
        <form onSubmit={handleAddTask}>
          <input type="text" name="task" placeholder="Enter task" />
          <button type="submit">Add Task</button>
        </form>
        <div className="todo-items">
          {tasks.map((task, index) => (
              <TodoItem
                  key={index}
                  task={task}
                  handleDelete={() => handleDeleteTask(index)}
              />
          ))}
        </div>
      </div>
  );
};

export default TodoList;