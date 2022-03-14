import React from "react"

const Counter = ({num}) => {


    const [count,setCount] = React.useState(num);

    const changeCount= (value) => {
    setCount(count+value)
    }

    const changeCountDouble= (value) => {
        setCount(count*value)
        }

    return (
        <>
        <h2> Number : {count}</h2>
            <button onClick={()=> changeCount(+1)}>increment</button>       
            <button onClick={()=> changeCount(-1)}>decrement</button>       
            <button onClick={()=> changeCountDouble(2)}>double</button>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
        </>
    )
}

export {Counter}

                                                                                                                                                                                