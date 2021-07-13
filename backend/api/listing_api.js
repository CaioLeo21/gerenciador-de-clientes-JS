module.exports = app => {
    
    const listing_api = async (req, res) => {
        try {
            const data = await app.knex.select('nome', 'telefone', 'rua', 'bairro', 'numero_casa', 'complemento', 'cpf', 'cnpj').from('tbl_clientes')

            return res.status(200).send({ message: "Usuários listados com sucesso!", data: data })
        } catch (error) {
            console.log(error)

            return res.status(500).send("Algo deu errado!")
        }
    }

    return { listing_api }
}