class Login{

    get userName() {
        return cy.get('#user-name');
    }

    get password() {
        return cy.get('#password');
    }

    get loginButton() {
        return cy.get('#login-button');
    }

    get errorMessage() {
        return cy.get('.error');
    }

    get loginCredentialsBox() {
        return  cy.xpath('//div[contains(@class, "login_credentials_wrap-inner")]'); 
    }
        

    login(user, password) {
        this.userName.type(user);
        this.password.type(password);
        this.loginButton.click();
    }

}

export { Login };