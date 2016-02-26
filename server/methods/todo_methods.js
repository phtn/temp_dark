Meteor.methods({
	insertTodo(title) {
		MyTodos.insert({
			title: title,
			createdAt: new Date()
		})
	}
})