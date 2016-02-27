RemoveTodo = React.createClass({
	_handleRemove() {
		Meteor.call('removeTodo', this.props.id)
		console.log('removed: ' + this.props.id)
	},
	render() {
		return (
			<span className="remove-todo fa fa-remove animated slideInLeft" onClick={this._handleRemove}></span>
		)
	}
});