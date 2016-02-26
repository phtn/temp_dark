
function renderComponent(component) {
	ReactLayout.render(MainLayout, {
		header: <Nav />,
		sidebar: <Sidebar />,
		main: component
	});
}

FlowRouter.route('/', {
	name: "Root",
	action (params) {
		renderComponent(<Home />)
	}
});

FlowRouter.route('/notes', {
	name: 'Notes',
	action (params) {
		renderComponent(<Notes />)
	}
});

FlowRouter.route('/todo', {
	name: 'Todo',
	action (params) {
		renderComponent(<Todo />)
	}
});

FlowRouter.route('/about', {
	name: 'About',
	action (params) {
		renderComponent(<About />)
	}
});