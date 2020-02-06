export default {
  namespace: 'todo',
  state: {
    todoList: [
      { todoItem: 'aa', id: 1 },
      { todoItem: 'bb', id: 2 }
    ],
    users: [
      { name: 'aa', id: 1 },
      { name: 'bb', id: 2 }
    ]
  },

  reducers: {
    'add'(state, { payload }) {
      return {
        todoList: [...state.todoList, ...payload]
      }
    },
    'delete'(state, { payload }) {
      console.log('payload', payload)
      return {
        todoList: [...state.todoList.filter(item => item.id !== payload.id)],
      }
    },

  },
};
