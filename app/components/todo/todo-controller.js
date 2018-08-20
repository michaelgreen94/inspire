import TodoService from "./todo-service.js";

var todoService = new TodoService

// Use this getTodos function as your callback for all other edits
function getTodos() {
	//FYI DONT EDIT ME :)
	todoService.getTodos(draw)
}

function draw(todos) {
	let template = ''
	console.log(todos);
	for (let i = 0; i < todos.length; i++) {
		const todo = todos[i];
		template += `
		<div class="text-pop pb-3">
		<input type="checkbox" name="task">
		${todo.description}
		<i class="fas fa-times" onclick="app.controllers.toDoController.removeTodo('${todo._id}')"></i>
		</div>`
	}
	//WHAT IS MY PURPOSE?
	//BUILD YOUR TODO TEMPLATE HERE
	//DONT FORGET TO LOOP
	document.getElementById('todo').innerHTML = template
}


export default class TodoController {
	constructor() {
		getTodos()

		// IF YOU WANT YOUR TODO LIST TO DRAW WHEN THE PAGE FIRST LOADS WHAT SHOULD YOU CALL HERE???
	}
	// You will need four methods
	// getTodos should request your api/todos and give an array of todos to your callback fn
	// addTodo takes in a todo and posts it to the server
	// toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
	// removeTodo takes in a todoId and sends a delete request to the server
	// **** HINT: Everytime you make a change to any todo don't forget to get the todo list again


	addTodoFromForm(e) {
		e.preventDefault() // <-- hey this time its a freebie don't forget this
		// TAKE THE INFORMATION FORM THE FORM
		var form = e.target
		var todo = {
			// DONT FORGET TO BUILD YOUR TODO OBJECT
			description: form.description.value, //has to be a string
			completed: false, //the server will do this for you
			user: 'Michael' //the server will do this for you
		}
		//PASSES THE NEW TODO TO YOUR SERVICE
		//DON'T FORGET TO REDRAW THE SCREEN WITH THE NEW TODO
		//YOU SHOULDN'T NEED TO CHANGE THIS
		todoService.addTodo(todo, getTodos)
		//^^^^^^^ EXAMPLE OF HOW TO GET YOUR TOODOS AFTER AN EDIT
	}

	toggleTodoStatus(todoId) {
		// asks the service to edit the todo status
		todoService.toggleTodoStatus(todoId, getTodos)
		// YEP THATS IT FOR ME
	}

	removeTodo(todoId) {
		// console.log('removeTodo');
		// ask the service to run the remove todo with this id
		todoService.removeTodo(todoId, getTodos)

		// ^^^^ THIS LINE OF CODE PROBABLY LOOKS VERY SIMILAR TO THE toggleTodoStatus
	}



}