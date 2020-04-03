const express = require('express')
const path = require('path')
const app = express()
app.use(express.static(path.join(__dirname, '../public')))


app.get('/', (req, res) => res.json({"message": "Boom!"}))
app.listen(3000, () => console.log('running on PORT 3000'))