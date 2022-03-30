/// <reference types="cypress" />

import signin from '../support/pages/signin'

describe('Login', () => {

    beforeEach(() => {
        cy.visit('login')
    });
    it('Successful login', () => {
        signin.enterCredentials('chaptervagilizei@mail.com', '123456')

        signin.pressSignInButton()

        signin.isLoginSuccessful('chaptervagilizei')
    });

    it('Login without email and without password', () => {
        signin.interceptBlankCredentials()
    
        signin.pressSignInButton()

        signin.areCredentialsBlank()
    });

    it('Login without password', () => {
        signin.interceptBlankPassword()
            
        signin.enterCredentialsWithoutPassword('chaptervagilizei@mail.com')
    
        signin.pressSignInButton()    
            
        signin.isPasswordBlank()
    });

    it('Login with wrong email', () => {
        signin.enterCredentials('chaptervagilizeiss@mail.com', '123456')

        signin.pressSignInButton()

        signin.areCredentialsWrong()
    });

    it('Login with wrong password', () => {
        signin.enterCredentials('chaptervagilizei@mail.com', '12345678')

        signin.pressSignInButton()

        signin.areCredentialsWrong()
    });

});