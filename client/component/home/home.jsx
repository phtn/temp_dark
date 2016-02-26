Home = React.createClass({
	getDefaultProps() {
	    return {
	        title: 'title-lbl animated fadeInLeft'   
	    };
	},
	componentWillUnmount() {
	    return {
	    	title: 'title-lbl animated fadeOutUp'
	    }  
	},
	render() {
		var titleClass = this.props.title;
		return (
			<div className="container-fluid">
				 
				<div className="col-xs-10">
					<div className="title-div">
						<p className={titleClass}>home</p>
					</div>
					<div className="col-xs-4 text-center">
						<div className="panel panel-default panel-pad">
						  <div className="panel-body">
						    <span className="panel-number">1</span>
						  </div>
						</div>
					</div>
					<div className="col-xs-4 text-center">
						<div className="panel panel-default panel-pad">
						  <div className="panel-body">
						    <span className="panel-number">2</span>
						  </div>
						</div>
					</div>
					<div className="col-xs-4 text-center">
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