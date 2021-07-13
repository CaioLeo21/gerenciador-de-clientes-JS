module.exports = app => {
    app.route('/v1/validation')
        .post(app.api.A_validation_api.validation_api)
    
    app.route('/v1/register')
        .post(app.api.register_api.register_api)

    app.route('/v1/listing/name/:name')
        .get(app.api.listingByName_api.listingByName_api)
    
    app.route('/v1/listing/cpf/:cpf')
        .get(app.api.listingByCPF_api.listingByCPF_api)
    
    app.route('/v1/listing/cnpj/:cnpj')
        .get(app.api.listingByCNPJ_api.listingByCNPJ_api)
    
    app.route('/v1/listing')
        .get(app.api.listing_api.listing_api)

    app.route('/v1/delete/:id')
        .delete(app.api.delete_api.delete_api)

    app.route('/v1/update/:id')
        .put(app.api.update_api.update_api)
}