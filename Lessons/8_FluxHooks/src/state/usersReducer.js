export function userReducer(state, action) {
  switch (action.type) {
    case 'set':
      return { users: action.payload };
    case 'add':
      return { users: [...state.users, action.payload] };
    case 'delete':
      return { users: state.users.filter((user) => user.id !== action.payload) };
    case 'update':
      return { users: state.users.map((user) => (user.id !== action.payload.id ? user : action.payload)) };
    default:
      throw new Error();
  }
}
