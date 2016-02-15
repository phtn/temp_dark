MainLayout = React.createClass({
	render() {
		return (
			<div>
				{this.props.header}
				<div className="container-fluid"> 
					{this.props.dashboard}
					{this.props.main}
				</div>
			</div>
		)
	}
});