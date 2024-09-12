
export class NavigationBar {
    constructor(page) {
        this.page = page;
        this.home = this.page.getByRole('link', { name: 'Home' });
        this.login = this.page.getByRole('link', { name: 'Login' });
        this.newArticle = this.page.getByRole('link', { name: 'New Article' });
        this.singUp = this.page.getByRole('link', { name: 'Sign up' });
    }

};