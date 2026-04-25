import { useState } from 'react';

function TodoList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  function handleAdd() {
    setTasks((prev) => [...prev,{id: Date.now(), text: task}]);
    setTask('');
  }
  function handleDelete(id) {
   setTasks((prevs) =>prevs.filter((task) => task.id !== id));
  }

  return (
    <div>
      <input 
        value={task}
        onChange={
          (e) => setTask(e.target.value)
        }
        placeholder="Type a task..."
      />
      <button onClick={handleAdd}>Add</button>
      
      {tasks.map(task => (
        <div key={task.id}>
          <p>{task.text}</p>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;