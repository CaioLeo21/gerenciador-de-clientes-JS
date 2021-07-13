module.exports = app => {

    const listingByName_api = async (req, res) => {
        try {
            const name = req.params.name

            const data = await app.knex('tbl_clientes').where('nome', 'ilike', `%${name}%`).select('nome', 'telefone', 'rua', 'bairro', 'numero_casa', 'complemento', 'cpf', 'cnpj')

            return res.status(200).send({ message: `Usuários com '${name}' listados com sucesso!`, data: data })
        } catch (error) {
            console.log(error)

            return res.status(500).send("Algo deu errado!")
        }
    }

    return { listingByName_api }
}