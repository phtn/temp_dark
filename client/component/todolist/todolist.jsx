TodoList = React.createClass({
	/*mixins: [ReactMeteorData],
	getMeteorData() {
		return {
			t: MyTodos.find({}).fetch()
		}
	},*/
	

	_handleClick() {
		Meteor.call('updateTodo', this.props.todo._id)
		console.log(this.props.todo.color)
	},
	_getTodoClassName() {
		var c = this.props.todo.color
		var cn = c == 'red' ? 'label label-danger todo-label animated fadeInDown' : 'label label-default todo-label animated fadeInDown'
		return cn
	},
	render() {
		return (
			<div className="todo-list-div">
				<span className={this._getTodoClassName()} onClick={this._handleClick}>{this.props.todo.title}</span>
				<br/>
			</div>
		)
	}
})