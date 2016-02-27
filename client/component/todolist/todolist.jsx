TodoList = React.createClass({
	
	_handleDone() {
		Meteor.call('updateTodo', this.props.todo._id)
		//console.log(this.props.todo._id)

	},
	_getTodoClassName() {
		var c = this.props.todo.color
		var cn = c == 'red' ? 'label label-danger todo-label animated fadeInDown' : 'label label-default todo-label animated fadeInDown'
		return cn
	},
	_showRemove() {
		if(this.props.todo.color == 'grey') {
			return (<RemoveTodo id={this.props.todo._id}/>)	
		}
	},
	render() {
		return (
			<div className="todo-list-div">
				<span className={this._getTodoClassName()} onClick={this._handleDone}>{this.props.todo.title}</span>
				{this._showRemove()}
				<br/>
			</div>
		)
	}
})