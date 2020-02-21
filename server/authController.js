const bcrypt = require('bcryptjs')

module.exports = {
    login: async (req, res) => {
        const {username, password} = req.body
        const {session} = req
        const db = req.app.get('db')

        let user = await db.check_user([username])
        user = user[0]
        if (!user) {
            return res.status(400).send('Username not found')
        }

        const authenticated = bcrypt.compareSync(password, user.password)
        if (authenticated) {
            delete user.password
            session.user = user
            return res.status(200).send(session.user)
        } else {
            res.status(401).send('Password/username is incorrect')
        }
    },

    register: async (req, res) => {
        const {username, password} = req.body
        const {session} = req
        const db = req.app.get('db')

        let user = await db.check_user([username])
        user = user[0]
        if(user) {
            return res.status(400).send('User already exists')
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        let newUser = await db.register_user([username, hash])
        newUser = newUser[0]
        session.user = newUser
        if(!newUser) {
            return res.status(200).send(session.user)
        }


        
    }
}