Home = React.createClass({
	render() {
		return (
			<div className="container-fluid text-center">
				<div className="title-div">
					<p className="title-lbl animated fadeInUp">home</p>

				</div> 
				<div className="col-xs-10">
					<div className="col-xs-4">
						<div className="panel panel-default panel-pad">
						  <div className="panel-body">
						    <span className="panel-number">1</span>
						  </div>
						</div>
					</div>
					<div className="col-xs-4">
						<div className="panel panel-default panel-pad">
						  <div className="panel-body">
						    <span className="panel-number">2</span>
						  </div>
						</div>
					</div>
					<div className="col-xs-4">
						<div className="panel panel-default panel-pad">
						  <div className="panel-body">
						    <span className="panel-number">3</span>
						  </div>
						</div>
					</div> 
					
				</div>
			</div>
		)
	}
});