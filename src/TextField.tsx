import React, {useState, useRef} from 'react';

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
}

interface TextNode {
  name: string
}

const TextField: React.FC<Props> = ({ person  }) => {
  const [count, setCount] = useState<number | null>(5)

  const [obj, setObj] = useState<{name: string}>({name: 'dongjie'})

  const [str, setStr] = useState<TextNode>({name: 'dongjie'})

  const inputRef = useRef<HTMLInputElement>(null);

  return <div>
    <input ref={inputRef} />


  </div>
}

export default TextField;