module.exports = app => {

    const bcrypt = require('bcrypt')

    const validation_api = async (req, res) => {
        try {

            const body = req.body

            const user = await app.knex('tbl_users').where({ username: body.username }).select('username', 'senha').first()

            const password = bcrypt.compareSync(body.senha, user.senha)

            if(user.username == body.username && password){
                return res.status(200).send({ message: "Usuário validado!" })             
            }            
            return res.status(400).send({ message: "Usuário não validado!" })

        } catch (error) {
            console.log(error)

            return res.status(500).send({ message: "Ocorreu um erro!" })
        }
    }

    // async function return_id (body) {

    //     const id = await app.knex('tbl_users').where({ username: body.username }).select('id_user').first()

    //     return id.id_user 
    // }

    return { validation_api }
}