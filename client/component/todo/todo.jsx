Meteor.subscribe('showTodos');

Todo = React.createClass({
	mixins: [ReactMeteorData],
	getMeteorData() {
		return {
			todos: MyTodos.find().fetch().reverse()
		}
	},
	_getTodos() {
		return this.data.todos.map(todo => {
			return (<TodoList key={todo._id} todo={todo} />)
		})
	},
	_handleInsert(event) {
		event.preventDefault;
		var text = ReactDOM.findDOMNode(this.refs.todoInput).value.trim();
		if (event.keyCode === 13) {
			console.log('added: ' + text)
			// Call insert method
			Meteor.call('insertTodo', text)
			// clear input field
			$('#todo-input').val('')
		} 
		
	},
	render() {
		return (
			<div className="container-fluid">
				<div className="col-xs-10">
					<div className="title-div">
						<p className="title-lbl animated slideInLeft">todo</p>
					</div>
					<div className="col-xs-6">
						<div className="input-group input-group-sm add-todo-input animated slideInLeft">
						  <span className="input-group-addon" id="sizing-addon3">Add Todos</span>
						  <input type="text" id="todo-input" ref="todoInput" className="form-control" placeholder="" aria-describedby="sizing-addon3" onKeyUp={this._handleInsert}/>
						</div>
						<div className="todo-list animated slideInUp">
							{this._getTodos()}
						</div>
					</div>

				</div>
			</div>
		)
	}
});


