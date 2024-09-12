import { BasePage } from "./base.page";


export class ArticlePage extends BasePage {
    constructor(page) {
        super(page)
        this.commentFiled = this.page.getByPlaceholder('Write a comment');
        this.existCommentCard = this.page.locator('div.card');
        this.postCommentButton = this.page.getByRole('button', { name: 'Post Comment' });
    }

    async addComment(comment) {
        await this.commentFiled.click();
        await this.commentFiled.fill(comment);
        await this.postCommentButton.click();
    }

    async deleteComment() {
        this.page.on('dialog', async dialog => {
            await dialog.accept();
        });
        await this.existCommentCard.getByRole('button').click();
    }
}

