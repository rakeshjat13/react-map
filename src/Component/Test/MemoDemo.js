import React, {useState} from 'react'
import { TestMemo } from './WildCard';

const MemoDemo = () => {
    const [count, setCount] = useState(0);
    const a = 12;
    const [abc, setAbc] = useState('Rakesh');
    return (
            <>
                {console.log("count", count)}
                <h3>Current Count is {count}</h3>
                <TestMemo x={abc} />
                <button onClick={() => setCount(count + 1)}>Click Me</button>
                <button onClick={() => setAbc('Jat')} >Change Props</button>
            </>
    )
}

export default MemoDemo