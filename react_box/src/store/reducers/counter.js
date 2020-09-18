const initialState = { counter: 0, smth: [] };

export const counter = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };
    default:
      return { ...state };
  }
};
