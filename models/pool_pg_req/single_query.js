const { Pool } = require('pg')
const pool = new Pool()

pool.query('SELECT * FROM users WHERE id = $1', [1], (err, res) => {
    if (err) {
        throw err
    }
    console.log('user:', res.rows[0])
})


pool
    .query('SELECT * FROM users WHERE id = $1', [1])
    .then(res => console.log('user:', res.rows[0]))
    .catch(err =>
        setImmediate(() => {
            throw err
        })
    )


;(async () => {
    const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [1])
    console.log('user:', rows[0])
})().catch(err =>
    setImmediate(() => {
        throw err
    })
)