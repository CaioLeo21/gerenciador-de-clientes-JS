module.exports = app => {
    const update_api = async (req, res) => {
        try {
            const id = req.params.id
            const body = req.body
            const data = await app.knex('tbl_clientes').where({ id_cliente: id }).update(body)

            return res.status(200).send({ message: "Usuário atualizado com sucesso!", data: data })
        } catch (error) {
            console.log(error)

            return res.status(500).send({ message: "Algo deu errado!" })
        }
    }

    return { update_api }
}