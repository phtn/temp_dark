SignIn = React.createClass({
	render() {
		return (
			<div className="container-fluid">
				
				<div className="col-xs-10">
					<div className="title-div">
						<p className="title-lbl animated slideInLeft">sign in with</p>
					</div>
					<div className="col-xs-6">
						<button type="button" className="btn btn-danger animated fadeIn sign-btn" id="google"><span className="sign-icon fa fa-google"></span>Google</button> <br/>
						<button type="button" className="btn btn-primary animated fadeIn sign-btn" id="facebook"><span className="sign-icon fa fa-facebook"></span>facebook</button>
					</div>
					
				</div>
			</div>
		)
	}
})