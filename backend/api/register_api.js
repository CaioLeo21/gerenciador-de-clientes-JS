module.exports = app => {

    //const return_id = app.api.A_validation_api.validation

    const register_api = async (req, res) => {
        try {

            const body = req.body

            await app.knex('tbl_clientes').insert(body, {
                id_user: 1
            })

            return res.status(201).send({ message: "Cliente criado!", data: body })

        } catch (error) {
            console.log(error)
            
            return res.status(500).send({ message: "Cliente não cadastrado" })
        }
    }

    return { register_api }
}