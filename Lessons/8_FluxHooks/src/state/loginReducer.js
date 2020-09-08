export function loginReducer(state, action) {
  switch (action.type) {
    case 'set':
      console.log(action.payload);
      return action.payload;
    default:
      throw new Error();
  }
}
