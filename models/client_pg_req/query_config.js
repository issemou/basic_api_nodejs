const query = {
    text: 'INSERT INTO users(name, email) VALUES($1, $2)',
    values: ['brianc', 'brian.m.carlson@gmail.com'],
}
// callback
client.query(query, (err, res) => {
    if (err) {
        console.log(err.stack)
    } else {
        console.log(res.rows[0])
    }
})
// promise
client
    .query(query)
    .then(res => console.log(res.rows[0]))
    .catch(e => console.error(e.stack))