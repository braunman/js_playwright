export class UserMenu {
    constructor(page) {
        this.page = page;
        this.logout = this.page.getByRole('link', { name: 'Logout' });
        this.menu = this.page.locator('.dropdown-toggle');
        this.profile = this.page.getByRole('link', { name: 'Profile' });
        this.settings = this.page.getByRole('link', { name: 'Settings' });
    }

    async doLogout() {
        await this.menu.click();
        await this.logout.click();
    }
};