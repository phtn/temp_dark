Meteor.publish('showTodos',() => {
	return MyTodos.find();
});