import React from 'react';

const Todo = ({todo : {name, status}}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{status}</td>
    </tr>
  )
}

export default Todo;
