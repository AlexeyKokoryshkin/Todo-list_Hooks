import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Todo = props => {

    const [todoName, setTodoName] = useState(""); // внутри функции useState ничего нет, но это массив из двух элементов которые в свою очередь являются функциями [state, setState]
    const [todoList, setTodoList] = useState([]); // отображаем список введенного текста в input

    useEffect( () => {
        axios.get('https://todo-5fb59.firebaseio.com/todo.json')
        .then( result => {
            console.log(result);
            const todoDate = result.data;
            const todoes = [];
            for (const key in todoDate) {
                todoes.push({ id: key, name: todoDate[key].name })
            }
            setTodoList(todoes)
        })
    }, [])

    // Пример использования ComponentWillMount
    /* const mouseMoveHandler = event => {                      
            console.log(event.clientX, event.clientY);
        }

    useEffect( () => {
        document.addEventListener('mousemove', mouseMoveHandler);
        
        return () => {
            document.removeEventListener('mousemove', mouseMoveHandler);
        }
    }, []); */


    const inputChangeHandler = (event) => {
        // console.log(event.target.value);
        setTodoName(event.target.value); // обратились к setState для фиксации изменений в инпуте
    }
    
    const todoAddHandler = () => {
        setTodoList(todoList.concat(todoName))  // можно переписать на ES6 используя спред оператор: (...todoList, todoName)

        axios.post('https://todo-5fb59.firebaseio.com/todo.json', { name: todoName })  // облачная БД на firebase. Первым аргументом задаем куда отправить запрос, а вторым что отправить post запросом
        .then(res => console.log(res))
        .catch(err => console.log(err))
    };

   return <>
        <input onChange={inputChangeHandler} value={todoName} type="text" placeholder="Todo"/>   
        <button onClick={todoAddHandler}>Add</button>
        <ul>
            {todoList.map(todo => (<li key={todo.id}>{todo.name}</li>))}
        </ul>
    </>
}

export default Todo;