import { test, expect } from '@playwright/test';
import { createUser } from '../src/utilits';
import { App } from '../src/app';


test.describe('Страница Login', () => {
    let newUser;
    let app;
    test.beforeEach(async ({ page }) => {
        newUser = createUser()
        app = new App(page);
        await app.open('/');
        await app.goToRigister();
        await app.registerPage.registerUser(newUser);
        await app.doLogout();
    });

    test('Успешный Login нового пользователя', async ({ page }) => {
        await app.goToLogin();
        await app.loginPage.doLogin(newUser.email, newUser.password)
        await expect(page.getByText(newUser.username)).toBeVisible();
    });

    test('Login с неправильным email', async ({ page }) => {
        await app.goToLogin();
        await app.loginPage.doLogin(createUser().email, newUser.password)
        await expect(page.getByText('Email not found sign in first')).toBeVisible();
    });

    test('Login с неправильным password', async ({ page }) => {
        await app.goToLogin();
        await app.loginPage.doLogin(newUser.email, createUser().password)
        await expect(page.getByText('Wrong email/password')).toBeVisible();
    });

});
