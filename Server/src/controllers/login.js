const users = require("../utils/users")

const login = (req, res) => {
const {email, password} = req.query

const usernames = users.find(user => user.email === email && user.password === password)

if(usernames) {
    return res.status(200).json({access: true})
} else {
    return res.status(200).json({access: false})
    //! duda: si la respuesta tambien es status 200 o que tipo de error es?
}

}


module.exports = login;