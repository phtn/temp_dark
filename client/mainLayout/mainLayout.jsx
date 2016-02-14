MainLayout = React.createClass({
	render() {
		return (
			<div className="">
				{this.props.header}
				{this.props.main}
			</div>
		)
	}
});