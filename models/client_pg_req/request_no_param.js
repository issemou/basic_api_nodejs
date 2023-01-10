client.query('SELECT NOW() as now', (err, res) => {
    if (err) {
        console.log(err.stack)
    } else {
        console.log(res.rows[0])
    }
})
// promise
client
    .query('SELECT NOW() as now')
    .then(res => console.log(res.rows[0]))
    .catch(e => console.error(e.stack))