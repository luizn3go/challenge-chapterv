const el = require('./elements').ELEMENTS

class SignIn {

    enterCredentials (email, password) {
        cy.get(el.inputEmail).type(email)
        cy.get(el.inputPassword).type(password)
    }

    enterCredentialsWithoutPassword (email) {
        cy.get(el.inputEmail).type(email)
    }

    pressSignInButton () {
        cy.get(el.signInButton).click()
    }

    isLoginSuccessful (username) {
        cy.contains(username).should('be.visible')
    }

    interceptBlankCredentials () {
        cy.intercept({
            method: 'POST',
            path: '/api/users/login'
            }, {
                statusCode: 422,
                fixture: 'blank-email-blank-password.json'
            }).as('postUsers')
    }

    interceptBlankPassword () {
        cy.intercept({
            method: 'POST',
            path: '/api/users/login'
            }, {
                statusCode: 422,
                fixture: 'blank-password.json'
            }).as('postUsers')
    }

    areCredentialsBlank () {
        cy.contains("email can't be blank").should('be.visible')
    }

    isPasswordBlank () {
        cy.contains("password can't be blank").should('be.visible')
    }

    areCredentialsWrong () {
        cy.contains('email or password is invalid').should('be.visible')
    }
}

export default new SignIn()

