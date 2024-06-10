import React, { useReducer, useState } from 'react';

interface Todo {
  id: number;
  description: string;
  completed: boolean;
}

interface TodoAppState {
  todos: Todo[];
}

interface TodoAppAction {
  type: 'ADD_TODO' | 'REMOVE_TODO' | 'TOGGLE_TODO';
  payload?: any;
}

const initialState: TodoAppState = {
  todos: []
};

const reducer = (state: TodoAppState, action: TodoAppAction): TodoAppState => {
  switch (action.type) {
    case 'ADD_TODO':
      // Your code here
      /**
       * 提示: 新增一個 todo 的時候，記得要與定義的結構一致
       * 提示: 用 Date.now() 來取得一個唯一的 id
       *
       * 請注意: payload 會根據呼叫 dispatch 的時候傳入任何值來決定
       */

      // 新增一個 todo
      const newTodo: Todo = null; // 這行要改掉成新增一個 todo

      // 把新的 todo 加到 todos 裡面，提示用 ... 來展開原本的 todos，並返回一個新的 TodoAppState
      return state; // 這行要改掉成加入新的 todo 到 todos 裡面
      // End of your code
    case 'REMOVE_TODO':
      // Your code here
      /**
       * 提示: 用 [].filter() 來過濾掉 id 符合 action.payload 的 todo
       * 用法: ['a', 'b', 'c'].filter(item => item !== 'b') 會回傳 ['a', 'c']
       */
      return state; // 這行要改掉成過濾掉指定 id 的 todo
      // End of your code
    case 'TOGGLE_TODO':
      // Your code here
      /**
       * 進階題: 先完成上面的基本題再來挑戰這個
       *
       * 挑戰: 切換 todo 的 completed 狀態
       */
      return state; // 這行要改掉成切換指定 id 的 todo 的 completed 狀態
      // End of your code
    default:
      return state;
  }
};

const TodoApp: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [description, setDescription] = useState('');

  const handleAddTodo = () => {
    if (description.trim()) {
      dispatch({ type: 'ADD_TODO', payload: description });
      setDescription('');
    }
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
            >
              {todo.description}
            </span>
            <button onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo.id })}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
