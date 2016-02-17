
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

FlowRouter.route('/documents', {
	name: 'Documents',
	action (params) {
		renderComponent(<Documents />)
	}
});

FlowRouter.route('/about', {
	name: 'About',
	action (params) {
		renderComponent(<About />)
	}
});