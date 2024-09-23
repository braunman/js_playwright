
export class BasePage {
    constructor(page) {
        this.page = page;
        this.errorMessagesLocator = this.page.locator('.error-messages');
    }

    async open(url) {
        await this.page.goto(url);
    }

    async getErrorText() {
        return this.errorMessagesLocator.textContent();
    };

}
