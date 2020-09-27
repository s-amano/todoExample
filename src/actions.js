let nextTodoId = 0;
export const addTodo = (text) => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  text,
});

export const toggleTodo = (id) => {
  return {
    type: "TOGGLE_TODO",
    id,
  };
};
