const bcrypt = require('bcryptjs');

const hashPass = (password) => {
    const hash = bcrypt.hashSync(password, 8)
    console.log(hash)
}
// hashPass('password')

const comparePass = (password, hash) => {
    const isPass = bcrypt.compare(password, hash)
    console.log(isPass)
}
// comparePass('password', '')