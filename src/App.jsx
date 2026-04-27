import { useState, useEffect } from 'react';

function TodoList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  function handleAdd() {
    if (!task.trim()) return;
    setTasks((prev) => [...prev, { id: Date.now(), text: task.trim(), done: false }]);
    setTask('');
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') handleAdd();
  }

  function handleToggle(id) {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }

  function handleDelete(id) {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }

  function handleClearCompleted() {
    setTasks((prev) => prev.filter((t) => !t.done));
  }

  const filtered = tasks.filter((t) => {
    if (filter === 'active') return !t.done;
    if (filter === 'completed') return t.done;
    return true;
  });

  const remaining = tasks.filter((t) => !t.done).length;

  return (
    <div id="todo-container">
      <div id="input-container">
        <input
          id="todo-input"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add a new task..."
        />
        <button id="add-btn" onClick={handleAdd}>Add</button>
      </div>

      <div id="list-container">
        <ul id="task-list">
          {filtered.length === 0 && (
            <p id="empty-message">No tasks to show.</p>
          )}
          {filtered.map((t) => (
            <li key={t.id} className={t.done ? 'done' : ''}>
              <input
                type="checkbox"
                checked={t.done}
                onChange={() => handleToggle(t.id)}
              />
              <span>{t.text}</span>
              <button className="icon-btn" onClick={() => handleDelete(t.id)}>✕</button>
            </li>
          ))}
        </ul>
      </div>

      <div id="footer">
        <span id="task-count">{remaining} item{remaining !== 1 ? 's' : ''} left</span>
        <div id="filter-buttons">
          {['all', 'active', 'completed'].map((f) => (
            <button
              key={f}
              className={`filter-btn${filter === f ? ' active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
        <button id="clear-completed" onClick={handleClearCompleted}>
          Clear completed
        </button>
      </div>
    </div>
  );
}

export default TodoList;
