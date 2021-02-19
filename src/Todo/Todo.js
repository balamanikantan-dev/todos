import React, { useState, useEffect } from 'react'

const Todo = () => {
    const [car, setCar] = useState("")
    const [list, setList] = useState([])
    const carHandler = (event) => {
        setCar(event.target.value)

    }
    const pressHandler = (event) => {
        console.log(event)
        if (event.charCode === 13) {

            setList(prev => {
                return [...prev, { title: car, completed: false }]
            })
            // setList(car)
        }



    }
    const clickHandler = (index) => {
        const a = [...list]
        a.splice(index, 1)
        setList(a)
    }
    useEffect(() => {
        console.log(list)
    }, [list])

    return (
        <div>
            <h1>todos</h1>
            <label for="type something"></label>
            <input id="type something" type="text" onKeyPress={pressHandler} onChange={carHandler} placeholder="What needs to be done?"></input>
            <ul>
                {list.map((listitem, index) => {
                    return <li style={{ textDecoration: listitem.completed ? "line-through" : "none" }}>
                        <input onChange={(event) => {
                            console.log(event.target.checked)
                            const a = [...list]
                            a[index].completed = event.target.checked;
                            setList(a)
                        }} defaultChecked={listitem.completed} type="checkbox" id="vehicle1" name="vehicle1" ></input>
                        {listitem.title} <button onClick={() => clickHandler(index)}></button></li>
                })}
            </ul>


        </div >
    )
}
export default Todo