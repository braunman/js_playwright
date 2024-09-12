import { test, expect } from '@playwright/test';
import { App } from '../src/app';
import { faker } from '@faker-js/faker';
import { createUser, createArticle } from '../src/utilits';


test.describe('Созадние новой заметки', () => {
    let newArticle;
    let app;
    test.beforeEach(async ({ page }) => {
        let newUser = createUser();
        newArticle = createArticle();
        app = new App(page);
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
        newArticle = createArticle();
        app = new App(page);
        await app.open('/');
        await app.goToRigister();
        await app.registerPage.registerUser(newUser);
        await app.goToNewArticle();
        await app.editorPage.createArticle(newArticle);

    });

    test('Добавление комментария', async ({ page }) => {
        let comment = faker.lorem.lines();
        await app.articlePage.addComment(comment);
        await expect(page.getByText('There are no comments yet')).not.toBeVisible()
        await expect(page.getByText(comment)).toBeVisible()
    });

    test('Удаление комментария', async ({ page }) => {
        let comment = faker.lorem.lines();
        await app.articlePage.addComment(comment);
        await app.articlePage.deleteComment();
        await expect(page.getByText('There are no comments yet')).toBeVisible();

    });
});
