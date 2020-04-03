
const socket = io()

socket.on('connect', ()=> {
	console.log('connected to server')
	socket.emit('createMessage', {
		from: 'chetan@gmail.com', 
		message: 'yep, that works for me'
	})
})

socket.on('disconnect', ()=> {
	console.log('Disconnected from server')
})

socket.on('newMessage', (message) => {
	console.log('new mail received', message)
})


