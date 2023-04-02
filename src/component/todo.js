import React from 'react';

const TodoItem = ({ task, handleDelete }) => {
    return (
        <div className="todo-item">
            <span>{task}</span>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default TodoItem;
