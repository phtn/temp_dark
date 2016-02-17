MainLayout = React.createClass({
	render() {
		return (
			<div>
				{this.props.header}
				<div className="container-fluid"> 
					{this.props.sidebar}
					{this.props.main}
				</div>
			</div>
		)
	}
});