const initialState = { counter: 1 };

export const mult = (state = initialState, action) => {
  switch (action.type) {
    case 'MULTIPLY':
      return { counter: state.counter * 2 };
    default:
      return state;
  }
};
