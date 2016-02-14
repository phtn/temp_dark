//import {mount} from 'react-mounter';

function renderLayout(component) {
	ReactLayout.render(Main, {
		dashboard: <Dashboard />,
		main: <Main />
	});
}

function renderComponent(component) {
	// ReactLayout.render()
}

FlowRouter.route('/', {
	name: "Home",
	action (params) {
		ReactLayout.render(MainLayout, {
			header: <Nav />,
			main: <Main/>
		});
	}
});