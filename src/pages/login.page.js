import { BasePage } from "./base.page";


export class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        this.emailField = this.page.getByPlaceholder('Email');
        this.passwordField = this.page.getByPlaceholder('Password');
        this.loginButton = this.page.getByRole('button', { name: 'Login' });

    }
    async doLogin(email = '', password = '') {
        if (email !== '') {
            await this.emailField.click();
            await this.emailField.fill(email);
        }
        if (password !== '') {
            await this.passwordField.click();
            await this.passwordField.fill(password);
        }
        this.loginButton.click()
    }

}