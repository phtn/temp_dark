Meteor.methods({
	insertTodo(title) {
		MyTodos.insert({
			title: title,
			createdAt: new Date(),
			color: 'red'
		})
	},
	updateTodo(id) {
		if (MyTodos.findOne({_id:id}).color !== 'red') {
			MyTodos.update({_id:id}, {$set: {color: 'red'}});
		} else {
			MyTodos.update({_id:id}, {$set: {color: 'grey'}});
		}
		
	},
	removeTodo(id) {
		MyTodos.remove({_id: id})
	},
	removeAllTodo() {
		MyTodos.remove({})
	}
})