module.exports = app => {
    app.route('/v1/validation')
        .post(app.api.A_validation_api.validation)
    
    app.route('/v1/register')
        .post(app.api.B_register_api.register)
}