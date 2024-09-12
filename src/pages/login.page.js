import { BasePage } from "./base.page";

export class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        this.emailField = this.page.getByPlaceholder('Email');
        this.loginButton = this.page.getByRole('button', { name: 'Login' });
        this.passwordField = this.page.getByPlaceholder('Password');
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
        this.loginButton.click();
    }

}