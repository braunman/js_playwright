import { faker } from '@faker-js/faker';
import { expect, test } from '@playwright/test';

import { WebApp } from '../src/app';
import { createArticle, createUser } from '../src/utilits';

test.describe('Созадние новой заметки', () => {
    let app;
    let newArticle;
    test.beforeEach(async ({ page }) => {
        let newUser = createUser();
        newArticle = createArticle();
        app = new WebApp(page);
        await app.open('/');
        await app.goToRigister();
        await app.registerPage.registerUser(newUser);
    });

    test('Успешное создание статьи', async ({ page }) => {
        await app.goToNewArticle();
        await app.editorPage.createArticle(newArticle);
        await expect(page.getByText(newArticle.title)).toBeVisible();
        await expect(page.getByText(newArticle.body)).toBeVisible();
    });

    test('Новая статья есть на главной', async ({ page }) => {
        await app.goToNewArticle();
        await app.editorPage.createArticle(newArticle);
        await expect(page.getByText(newArticle.title)).toBeVisible();
        await app.goToHome();
        await app.mainPage.showGlobalFeed();
        await expect(page.getByText(newArticle.title)).toBeVisible();
        await expect(page.getByText(newArticle.about)).toBeVisible();
    });

});


test.describe('Действия над заметкой', () => {
    let newArticle;
    let app;
    test.beforeEach(async ({ page }) => {
        let newUser = createUser();
        app = new WebApp(page)
        newArticle = createArticle();
        await app.open('/');
        await app.goToRigister();
        await app.registerPage.registerUser(newUser);
        await app.goToNewArticle();
        await app.editorPage.createArticle(newArticle);

    });

    test('Добавление комментария', async ({ page }) => {
        let comment = faker.lorem.lines();
        await app.articlePage.addComment(comment);
        await expect(app.articlePage.noConnmetOnPage).not.toBeVisible()
        await expect(page.getByText(comment)).toBeVisible()
    });

    test('Удаление комментария', async () => {
        let comment = faker.lorem.lines();
        await app.articlePage.addComment(comment);
        await app.articlePage.deleteComment();
        await expect(app.articlePage.noConnmetOnPage).toBeVisible();

    });
});
