import React, { useEffect, useState } from 'react';
import { nextTodoId } from '../utils';
import Todo from './Todo';

const initialState = {
    id : 1,
    name : '',
    status : ''
};

const Problem1 = () => {

    const [show, setShow] = useState('all');
    const [todos, setTodos] = useState([]);
    const [filteredTodos, setFilteredTodos] = useState([]);
    const [todo, setTodo] = useState({...initialState});

    const handleClick = (val) =>{
        setShow(val);
        
    }
    const handleTodoChange = (event) => {
        setTodo((prev) => ({...prev, [event.target.name] : event.target.value}))
    };

    const handleTodoSubmit = (event) => {
        event.preventDefault();
        setTodos((prev) => ([...prev, {...todo, id : nextTodoId(prev)}]));
        setTodo(initialState);
    }

    useEffect(() => {
        switch(show){
            case 'all':
                const sortedTodos = todos?.sort((a, b) => {
                    const statusOrder = {
                      active: 1,
                      completed: 2
                    };
                  
                    const statusA = a.status;
                    const statusB = b.status;
                  
                    if (statusOrder[statusA] < statusOrder[statusB]) {
                      return -1;
                    } else if (statusOrder[statusA] > statusOrder[statusB]) {
                      return 1;
                    } else {
                      return 0;
                    }
                  });
                setFilteredTodos(sortedTodos);
                return;
            case 'active':
                const activeTodos = todos?.filter(todo => todo?.status === 'active');
                setFilteredTodos(activeTodos);
                return;
            case 'completed':
                const completedTodos = todos?.filter(todo => todo?.status === 'completed');
                setFilteredTodos(completedTodos);   
                return;
            default:
                return todos;     
        }
    }, [show, todos]);

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form onSubmit={handleTodoSubmit} className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input name='name' value={todo.name} onChange={handleTodoChange } type="text" className="form-control" placeholder="Name"/>
                        </div>
                        <div className="col-auto">
                            <input name='status' onChange={handleTodoChange } value={todo.status} type="text" className="form-control" placeholder="Status"/>
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='all' && 'active'}`} type="button" onClick={()=>handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show==='active' && 'active'}`} type="button" onClick={()=>handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='completed' && 'active'}`} type="button" onClick={()=>handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                filteredTodos?.map(todo => <Todo key={todo?.id} todo={todo}/>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;