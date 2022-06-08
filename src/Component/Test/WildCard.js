import React from 'react'


export default function WildCard(props) {
    console.log("wildcard component", props)
  return (
    <div>
        <h3>WildCard Component</h3>
        <TestComponent val={props.data}/>
    </div>
  )
}

export const TestComponent = (props) => {
    console.log("test component", props)
    return(
        <>
            <h4>Child Component</h4>
        </>
    )
}

export const TestMemo1  = (props) =>{
    console.log("test Memo", props);
    return(<>
            <h4>Test Memo component {props.x}</h4>
    </>)
}

export const TestMemo = React.memo(TestMemo1)