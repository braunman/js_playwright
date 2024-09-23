
export class NavigationBar {
    constructor(page) {
        this.page = page;
        this.home = this.page.getByRole('link', { name: 'Home' });
        this.login = this.page.getByRole('link', { name: 'Login' });
        this.newArticle = this.page.getByRole('link', { name: 'New Article' });
        this.singUp = this.page.getByRole('link', { name: 'Sign up' });
    }

    async goToRigister() {
        await this.singUp.click()

    }
    async goToLogin() {
        await this.login.click()

    }
    async goToNewArticle() {
        await this.newArticle.click();
    }
    async goToHome() {
        await this.home.click();
    }
};