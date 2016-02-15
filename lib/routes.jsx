//import {mount} from 'react-mounter';

function renderComponent(component) {
	ReactLayout.render(MainLayout, {
		header: <Nav />,
		dashboard: <Dashboard />,
		main: component
	});
}

FlowRouter.route('/', {
	name: "Root",
	action (params) {
		renderComponent(<Content />)
	}
});

//FlowRouter.route('/')