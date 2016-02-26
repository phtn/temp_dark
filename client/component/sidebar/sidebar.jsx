Sidebar = React.createClass({
	
	getInitialState() {
	    return {
	        selected:'home'  
	    };
	},
	isActive(val) {
		return ( val === this.state.selected) ? 'active':'default';
	},
	setFilter(filter) {
	    this.setState({selected : filter})
  	},
  	componentDidMount() {
  	    this.setState({selected : 'home'});
  	},
	render() {
		return (
			<div className="col-xs-2">
				<p className="index-lbl">sidebar</p>
				<ul className="nav nav-pills nav-stacked sidebar-ul">
				  <li role="presentation" className={this.isActive('home')} onClick={this.setFilter.bind(this, 'home')}><a href="/">Home</a></li>
				  <li role="presentation" className={this.isActive('notes')} onClick={this.setFilter.bind(this, 'notes')}><a href="/notes">Notes</a></li>
				  <li role="presentation" className={this.isActive('todo')} onClick={this.setFilter.bind(this, 'todo')}><a href="/todo">Todo</a></li>
				  <li role="presentation" className={this.isActive('about')} onClick={this.setFilter.bind(this, 'about')}><a href="/about">About</a></li>
				</ul>
			</div>
		)
	}
});