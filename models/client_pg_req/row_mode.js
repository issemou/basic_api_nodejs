const query = {
    text: 'SELECT $1::text as first_name, $2::text as last_name',
    values: ['Brian', 'Carlson'],
    rowMode: 'array',
}
// callback
client.query(query, (err, res) => {
    if (err) {
        console.log(err.stack)
    } else {
        console.log(res.fields.map(field => field.name)) // ['first_name', 'last_name']
        console.log(res.rows[0]) // ['Brian', 'Carlson']
    }
})
// promise
client
    .query(query)
    .then(res => {
        console.log(res.fields.map(field => field.name)) // ['first_name', 'last_name']
        console.log(res.rows[0]) // ['Brian', 'Carlson']
    })
    .catch(e => console.error(e.stack))