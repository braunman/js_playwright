import { BasePage } from "./base.page";
import { UserMenu } from "./user.menu";


export class EditorPage extends BasePage {
    constructor(page) {
        super(page)
        this.title = this.page.getByPlaceholder('Article Title');
        this.about = this.page.getByPlaceholder('What\'s this article about?');
        this.body = this.page.getByPlaceholder('Write your article (in');
        this.tag = this.page.getByPlaceholder('Enter tags');
        this.publishButton = page.getByRole('button', { name: 'Publish Article' });
        this.userMenu = new UserMenu(this.page)
    }

    async createArticle({ title = '', about = '', body = '', tag = '' }) {
        // { title, about, body,tags }
        await this.title.click();
        await this.title.fill(title);
        await this.about.click();
        await this.about.fill(about);
        await this.body.click();
        await this.body.fill(body);
        await this.tag.click();
        await this.tag.fill(tag);
        await this.publishButton.click()

    }



}