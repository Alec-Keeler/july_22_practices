const bcrypt = require('bcryptjs');

const hashPass = (password) => {
    const hash = bcrypt.hashSync(password, 17)
    console.log(hash)
}
// hashPass('password')
// $2a - algorithm
// $08 - cost factor
// $cK/oxlXuLSiAqFLnmg - salt (first 22 characters)
// 9G1OqOtizk0vkFbRfpWdOeI6cHXu2oZ71z6 - hash (salt + string)

const comparePass = (password, hash) => {
    const isPass = bcrypt.compareSync(password, hash)
    console.log(isPass)
}
comparePass('password', '$2a$08$/nho8xmbyi/jN9oBj3sLuuT8soxRjDdWKqXQHFGak7ugrWdobOuG.')