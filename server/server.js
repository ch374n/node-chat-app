const express = require('express')
const path = require('path')
const app = express()
const http = require('http')
const server = http.createServer(app) 
const socketIO = require('socket.io') 

const io = socketIO(server) 

app.use(express.static(path.join(__dirname, '../public')))




io.on('connection', (socket) => {
	console.log('client connected');

	socket.on('disconnect', () => {
		console.log('client disconnected')
	})


	socket.emit('newMessage', {
		from: 'chetan@gmail.com', 
		text: 'whats up', 
		createdAt: 12345
	})


	socket.on('createMessage', (message) => {
		console.log('createMail', message)
	})
})

server.listen(3000, () => console.log('running on PORT 3000'))