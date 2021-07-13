module.exports = app => {
    const delete_api = async (req, res) => {
        try {
            const id = req.params.id
            await app.knex('tbl_clientes').where({ id_cliente: id }).del()

            return res.status(200).send({ message: `Usuário ${id} deletado com sucesso!` })
        } catch (error) {
            console.log(error)

            return res.status(500).send({ message: "Algo deu errado!" })
        }
    }

    return { delete_api }
}