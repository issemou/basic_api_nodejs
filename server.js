/*Charger les données et démarrer le serveur*/
const express = require('express')
const app = express()
const products = require('./databases/data.js')
const products_routes = require('./routes/products.js')

app.listen(5000, () => {
    console.log('server is listening on port 5000')
});

app.use(express.json())
app.use('/api/products', products_routes)

