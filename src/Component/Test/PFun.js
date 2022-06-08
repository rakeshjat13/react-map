import React, { useState } from 'react'

export default function PFun() {
    const [user, setUser] = useState("Hello")
  return (
      <>
        {console.log("user", user)}
        <div>PFun</div>
        <ChildNormalFun data={user} />
        <button onClick={() => setUser('Hii!')}>Click Me</button>
      </>
  )
}

const ChildNormalFun = ({data}) => {
    console.log("child func props", data)
    return(
        <>
            <h4>Child Functional Component load {data}</h4>
        </>
    );
}
