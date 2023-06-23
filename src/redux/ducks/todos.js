const ADD_TODO = "todos/ADD_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";

export const addTodo = (title, content) => ({
  type: ADD_TODO,
  payload: { title, content },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

const initialState = {
  todos: [],
  selectedTodo: null,
};

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        id: generateId(),
        title: action.payload.title,
        content: action.payload.content,
        completed: false,
      };
      return { ...state, todos: [...state.todos, newTodo] };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    default:
      return state;
  }
}

const generateId = () => {
  const timestamp = Date.now().toString();
  const randomId = Math.random().toString(36).substr(2, 5);
  return timestamp + randomId;
};
