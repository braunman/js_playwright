import { BasePage } from "./base.page";
import { UserMenu } from "./user.menu";


export class MainPage extends BasePage {
    constructor(page) {
        super(page);
        this.home = this.page.getByRole('link', { name: 'Home' });
        this.login = this.page.getByRole('link', { name: 'Login' });
        this.newArticle = this.page.getByRole('link', { name: 'New Article' });
        this.singUp = this.page.getByRole('link', { name: 'Sign up' });
        this.userMenu = new UserMenu(this.page)
        this.globalFeed = this.page.getByRole('button', { name: 'Global Feed' })
    }

    async goToHome() {
        await this.home.click();

    }

    async goToLogin() {
        await this.login.click();
    }

    async goToRigister() {
        await this.singUp.click();
    }

    async goToNewArticle() {
        await this.newArticle.click();
    }

    async doLogout() {
        await this.menu.click();
        await this.logout.click();
    }

    async showGlobalFeed() {
        await this.globalFeed.click();
    }

}