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
