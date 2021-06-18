const bcrypt = require('bcrypt')

const encryptPassword = (password) => {
    const salt = bcrypt.genSaltSync(10)

    return bcrypt.hashSync(password, salt)
}

module.exports = encryptPassword