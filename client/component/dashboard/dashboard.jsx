Dashboard = React.createClass({
	render() {
		return (
			<div className="col-xs-2">
				<p className="index-lbl">sidebar</p>
				<ul className="nav nav-pills nav-stacked dash-ul">
				  <li role="presentation" className="active"><a href="#">Home</a></li>
				  <li role="presentation"><a href="#">Guide</a></li>
				  <li role="presentation"><a href="#">Samples</a></li>
				  <li role="presentation"><a href="#">Developer</a></li>
				</ul>
			</div>
		)
	}
});