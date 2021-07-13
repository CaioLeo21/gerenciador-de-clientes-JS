module.exports = app => {
    const listingByCPF_api = async (req, res) => {
        try {
            const cpf = req.params.cpf
            const data = await app.knex('tbl_clientes').where('cpf', 'ilike', `%${cpf}%`).select('nome', 'telefone', 'rua', 'bairro', 'numero_casa', 'complemento', 'cpf')

            return res.status(200).send({ message: `Usuários com número de CPF '${cpf}' listados com sucesso!`, data: data })
        } catch (error) {
            console.log(error)

            return res.status(500).send("Algo deu errado!")
        }
    }

    return { listingByCPF_api }
}