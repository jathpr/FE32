### Dependencies

`yarn add react-redux redux`  
`yarn add redux-devtools-extension -D`

### Store

```
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';
import { devToolsEnhancer } from 'redux-devtools-extension';

export const store = createStore(rootReducer, devToolsEnhancer());
```

### App

`<Provider store={store}>`

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
