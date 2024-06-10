import React, { useReducer } from 'react';

interface State {
  count: number;
  text: string;
}

interface Action {
  type: string;
  payload?: any;
}

const initialState: State = { count: 0, text: '' };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    case 'setText':
      return { ...state, text: action.payload };
    default:
      return state;
  }
};

const ComplexCounter: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <input
        type="text"
        value={state.text}
        onChange={(e) => dispatch({ type: 'setText', payload: e.target.value })}
      />
      <p>Text: {state.text}</p>
    </div>
  );
};

export default ComplexCounter;
