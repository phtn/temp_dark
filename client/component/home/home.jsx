Home = React.createClass({
	getDefaultProps() {
	    return {
	    	//
	    };
	},
	componentWillMount() {
	    //  
	},
	render() {
		return (
			<div className="container-fluid">
				 
				<div className="col-xs-10">
					<div className="title-div">
						<p className="title-lbl animated fadeInLeft">home</p>
					</div>
					<div className="col-xs-4 text-center">
						<div className="panel panel-default panel-pad panel-one animated flipInX">
						  <div className="panel-body">
						    <span className="panel-number">1</span>
						  </div>
						</div>
					</div>
					<div className="col-xs-4 text-center">
						<div className="panel panel-default panel-pad panel-two animated flipInX">
						  <div className="panel-body">
						    <span className="panel-number">2</span>
						  </div>
						</div>
					</div>
					<div className="col-xs-4 text-center">
						<div className="panel panel-default panel-pad panel-three animated flipInX">
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