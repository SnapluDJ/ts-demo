import React, {useState, useRef, useReducer} from 'react';

interface Todo {
  text: string;
  complete: boolean;
}

type State = Todo[]

type Actions = {type: 'add'; text: string } | {type: 'remove'; idx: number}

const TodoReducer = (state: State, action: Actions ) =>  {
  switch (action.type) {
    case 'add':
      return [...state, {text: action.text, complete: false}]
    case 'remove':
      return state.filter((_, i) => action.idx !== i);
    default: 
      return state;
  }
}


interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text: string;
  ok?: boolean;
  i?: number;
  fn?: (bob: string ) => string;
  obj1?: {
    f1: string
  };
  person: Person;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

interface TextNode {
  name: string
}

const TextField: React.FC<Props> = ({ person, handleChange  }) => {
  const [count, setCount] = useState<number | null>(5)

  const [obj, setObj] = useState<{name: string}>({name: 'dongjie'})

  const [str, setStr] = useState<TextNode>({name: 'dongjie'})

  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  const [todos, dispatch] = useReducer(TodoReducer, [])


  return <div ref={divRef}>
    <input ref={inputRef} onChange={handleChange} />

    <button onClick={() => dispatch({type: 'add', text: 'lalala'})}>+</button>
  </div>
}

export default TextField;