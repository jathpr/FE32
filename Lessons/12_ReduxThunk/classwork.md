### Dependencies

`yarn add thunk`

### Store

```
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { todos } from './todosReducer'

export const store = createStore(todos, composeWithDevTools(applyMiddleware(thunk)))

```

### Connect store to FC

```
import { SecondComponent } from './Second';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    counter: state.counter.counter,
  };
};

const mapDispatchToProps = (dispatch) => ({
  increment: () => {
    dispatch({ type: 'INCREMENT' });
  },
});

export const Second = connect(mapStateToProps, mapDispatchToProps)(SecondComponent);
```

### Instructions
