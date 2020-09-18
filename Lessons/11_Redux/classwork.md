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

### Instructions

1. установить зависимости
2. создать редюсер с обработчиком 1 экшена
3. создать стор на основе этого редюсера
4. подключить стор к приложению (провайдер)
5. создать компонент отображающий данные из стейта
6. подключить эти данные к компоненту
7. подключить к компоненту возможность влиять на стейт
8. установить Redax devtools extension в браузере
