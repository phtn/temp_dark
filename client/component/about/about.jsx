About = React.createClass({
	render() {
		return (
			<div className="container-fluid">
				
				<div className="col-xs-10">
					<div className="title-div">
						<p className="title-lbl animated slideInLeft">about</p>
					</div>
					<div className="col-xs-6">
						<div className="jumbotron animated slideInLeft">
							<h3>Dark React Template</h3>
							<h6>Created by: <a href='https://twitter.com/LecenaJun'>phtn458</a></h6>
							<p><a className="btn btn-success btn-sm gh animated fadeIn" href="https://github.com/phtn/temp_dark" role="button">view in Github <span className="fa fa-github"></span></a></p>
						</div>
					</div>
					
				</div>
			</div>
		)
	}
});