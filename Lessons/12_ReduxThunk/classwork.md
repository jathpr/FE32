### Dependencies

`yarn add redux-thunk`

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
import { connect } from 'react-redux'
import { addTodo, getTodos } from '../../store/todosActionCreators'
import { TodoComponent } from './TodoComponent'

const mapStateToProps = (state) => ({
	todos: state.list,
})

const actionCreators = {
	addTodo,
	getTodos,
}

export const Todo = connect(mapStateToProps, actionCreators)(TodoComponent)

```
