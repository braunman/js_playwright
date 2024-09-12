import { BasePage } from "./base.page";
import { UserMenu } from "./user.menu";

export class MainPage extends BasePage {
    constructor(page) {
        super(page);
        this.globalFeed = this.page.getByRole('button', { name: 'Global Feed' })
        this.home = this.page.getByRole('link', { name: 'Home' });
        this.login = this.page.getByRole('link', { name: 'Login' });
        this.newArticle = this.page.getByRole('link', { name: 'New Article' });
        this.singUp = this.page.getByRole('link', { name: 'Sign up' });
        this.userMenu = new UserMenu(this.page);
    }

    async showGlobalFeed() {
        await this.globalFeed.click();
    }

}