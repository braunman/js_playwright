

export class UserMenu {
    constructor(page) {
        this.page = page;
        this.menu = this.page.locator('.dropdown-toggle');
        this.profile = this.page.getByRole('link', { name: 'Profile' });
        this.settings = this.page.getByRole('link', { name: 'Settings' });
        this.logout = this.page.getByRole('link', { name: 'Logout' });
    }
    async goToProfile() {
        await this.menu.click();
        await this.profile.click();
    }

    async goToProfile() {
        await this.menu.click();
        await this.profile.click();
    }

    async doLogout() {
        await this.menu.click();
        await this.logout.click();
    }
};