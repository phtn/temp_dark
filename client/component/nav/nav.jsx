Nav = React.createClass({
	render() {
		return (
			<nav className="navbar navbar-default">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <a className="navbar-brand" href="/">
			        <h3 className="brand animated fadeIn">
			        	<span className="fa fa-code brand-icon" ></span>
			        	Dark React Template
			        </h3>
			        
			      </a>
			    </div>
			    <div className="nav navbar-nav navbar-right">
			    	<h3 className="sign-in"><a href='/sign'> Sign In </a></h3> 
			    </div> 
			  </div>
			</nav>
		)
	}
});