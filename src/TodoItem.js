import { useState, useContext } from 'react';
import { Context } from './context';

function TodoItem({ title, id, completed }) {
  const { removeItem, toggleItem } = useContext(Context);

  const cls = ['todo'];
  if (completed) {
    cls.push('completed');
  }

  return (
    <li className={cls.join(' ')}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleItem(id)}
        />
        <span>{title}</span>

        <i className="material-icons red-text" onClick={() => removeItem(id)}>
          delete
        </i>
      </label>
    </li>
  );
}

export { TodoItem };
