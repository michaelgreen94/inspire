const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/Mike/todos/',
	timeout: 3000
});

function logError(e) {
	console.log(e)
}


let todos

export default class TodoService {

	getTodos(draw) {
		// console.log("Getting the Todo List")
		todoApi.get('')
			.then((res) => { // <-- WHY IS THIS IMPORTANT????
				todos = res.data.data
				console.log(todos)
				draw(todos)
			})
			.catch(logError)
	}

	addTodo(todo, getTodos) {
		// WHAT IS THIS FOR???
		todoApi.post('', todo)
			.then(function (res) { // <-- WHAT DO YOU DO AFTER CREATING A NEW TODO?
				getTodos()
			})
			.catch(logError)
	}

	toggleTodoStatus(todoId, getTodos) {
		// MAKE SURE WE THINK THIS ONE THROUGH
		//STEP 1: Find the todo by its index **HINT** todoList
		var todo = todos.find(rId => {
			return todoId == rId._id
		}) ///MODIFY THIS LINE
		todo.completed = !todo.completed

		//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed
		todoApi.put(todoId, todo)
			.then(function (res) {
				//DO YOU WANT TO DO ANYTHING WITH THIS?
				let wait = setTimeout(getTodos, 500)
				// getTodos()
			})
			.catch(logError)
	}

	removeTodo(todoId, getTodos) {
		// Umm this one is on you to write.... The method is a DELETE
		todoApi.delete(todoId)
			.then(res => {
				this.getTodos(getTodos)
			})
	}

}