export const nextTodoId = (todos) => {
    let nextId = todos.reduce((acc, curr) => Math.max(acc, curr.id), -1);
    return ++nextId;
};