module.exports = app => {
    const listingByCNPJ_api = async (req, res) => {
        try {
            const cnpj = req.params.cnpj
            const data = await app.knex('tbl_clientes').where('cnpj', 'ilike', `%${cnpj}%`).select('nome', 'telefone', 'rua', 'bairro', 'numero_casa', 'complemento', 'cnpj')

            return res.status(200).send({ message: `Usuários com número de CPF '${cnpj}' listados com sucesso!`, data: data })
        } catch (error) {
            console.log(error)

            return res.status(500).send("Algo deu errado!")
        }
    }

    return { listingByCNPJ_api }
}