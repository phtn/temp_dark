TodoList = React.createClass({
	render() {
		return (
			<div>
				<span className="label label-danger todo-label animated flipInX">{this.props.todo.title}</span><br/>
			</div>
		)
	}
})