import React, {ChangeEvent, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/connect";


export const Todos = observer(() => {
    console.log('todo')
    const {todo}=useStore()

    const [value, setValue] = React.useState('')
    console.log(value)
    useEffect(()=>{
        todo.fetchTodos()
    },[])
    const onChangeAddTodo = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)

    }
    const addTodoHandler = () => {
        todo.addTodo(value)
        setValue('')
    }

    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>

            <input style={{width:300}} value={value} onChange={onChangeAddTodo}/>
            <button style={{width:200}} onClick={addTodoHandler}> add todos</button>
            {todo.todos.map(t => {
                const onBlurInput = () => {
                    todo.updateTitle(t.id, value)
                }
                return <div style={{textAlign: "center", margin: 10}} key={t.id}>

                    <span style={{padding: 6, backgroundColor: "aqua"}}>{t.id}</span>
                    <span style={{padding: 6, backgroundColor: "aqua"}}> {t.title.text}</span>
                    <input value={value} onChange={onChangeAddTodo} onBlur={onBlurInput} type="text"/>
                    <input type="checkbox" defaultChecked={t.completed} onChange={() => todo.toggleCheckedTodo(t.id)}/>
                    <button onClick={() => todo.removeTodo(t.id)}>x</button>
                </div>
            })}
            <div>
                <h1>todo from server</h1>
                {todo.todoFromServer.map(t=>{
                    return <div key={t.id}>
                    {t.title}
                    <input type="checkbox" defaultChecked={t.completed} />
                </div>})}
            </div>
        </div>
    );
});

